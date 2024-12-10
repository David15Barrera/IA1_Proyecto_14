let model, tokenizer, labelEncoder;

async function loadModel() {
    await tf.setBackend('cpu');
    try {
        model = await tf.loadLayersModel('../backend/model_tfjs/model.json');
        console.log("Modelo cargado correctamente:", model);
    } catch (error) {
        console.error("Error al cargar el modelo:", error);
    }

    const response = await fetch('../backend/tokenizer.json');
    const tokenizerJson = await response.json();
    tokenizer = new Tokenizer(tokenizerJson);

    const labelResponse = await fetch('../backend/responses_tokenizer.json');
    const labelJson = await labelResponse.json();
    labelEncoder = labelJson.word_index;
}

// Función para tokenizar el texto en JavaScript
class Tokenizer {
    constructor(tokenizerJson) {
        this.wordIndex = tokenizerJson.word_index || {};
        this.oovToken = tokenizerJson.oov_token || "<OOV>";
    }

    texts_to_sequences(texts) {
        return texts.map(text => {
            const sequence = [];
            const words = text.split(' ');
            words.forEach(word => {
                const index = this.wordIndex[word] || this.wordIndex[this.oovToken];
                sequence.push(index);
            });
            return sequence;
        });
    }
}

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    chatBox.innerHTML += `<div><strong>Usuario:</strong> ${userInput}</div>`;
    const prediction = await predictResponse(userInput);

    chatBox.innerHTML += `<div><strong>Chatbot:</strong> ${prediction}</div>`;

    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function predictResponse(input) {
    if (!model) {
        console.error("Modelo no está cargado.");
        return;
    }

    const sequence = tokenizer.texts_to_sequences([input]);

    const maxLength = 10;
    const paddedSequence = padSequence(sequence, maxLength);

    const paddedInput = tf.tensor([paddedSequence]);

     console.log('Entrada con padding:', paddedInput.shape);

     const result = model.predict(paddedInput);
    const predictedClass = result.argMax(1).dataSync()[0];

    const response = labelEncoder[predictedClass];
    return response;
}

function padSequence(sequence, maxLength) {
    const padded = sequence[0];
    if (padded.length < maxLength) {
        const padding = Array(maxLength - padded.length).fill(0);
        return padded.concat(padding);
    } else {
        return padded.slice(0, maxLength);
    }
}

loadModel();
