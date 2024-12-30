import tensorflow as tf
import tensorflowjs as tfjs
import numpy as np
import json
from tensorflow import keras
from keras import layers

# Dataset (Colocar despues el archivo o ruta)
data = {
    'saludos': ['Hola', '¿Cómo estás?', 'Buenas tardes', '¡Qué tal!', '¿Qué hay?'],
    'respuestas': ['¡Hola! ¿Cómo puedo ayudarte?', 'Estoy bien, gracias por preguntar', 
                   'Buenas tardes, ¿en qué te ayudo?', '¡Hola! ¿Qué tal?', 
                   'Hola, ¿en qué te puedo asistir?']
}

tokenizer = tf.keras.preprocessing.text.Tokenizer(num_words=1000, oov_token="<OOV>")
tokenizer.fit_on_texts(data['saludos'])

X = tokenizer.texts_to_sequences(data['saludos'])
X = tf.keras.preprocessing.sequence.pad_sequences(X, maxlen=10, padding='post')

responses_tokenizer = tf.keras.preprocessing.text.Tokenizer(num_words=1000, oov_token="<OOV>")
responses_tokenizer.fit_on_texts(data['respuestas'])

y = responses_tokenizer.texts_to_sequences(data['respuestas'])
y = tf.keras.preprocessing.sequence.pad_sequences(y, maxlen=10, padding='post')

model = tf.keras.Sequential([
    layers.Embedding(input_dim=1000, output_dim=64, input_length=10),  # Se define la forma de entrada correctamente aquí
    layers.LSTM(128),
    layers.Dense(len(responses_tokenizer.word_index) + 1, activation='softmax')  # +1 por el token <OOV>
])

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

y_encoded = np.argmax(y, axis=1)
model.fit(np.array(X), y_encoded, epochs=100)

tfjs.converters.save_keras_model(model, 'model_tfjs')

with open('tokenizer.json', 'w') as f:
    f.write(json.dumps(tokenizer.to_json()))

with open('responses_tokenizer.json', 'w') as f:
    f.write(json.dumps(responses_tokenizer.to_json()))