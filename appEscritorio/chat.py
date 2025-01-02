import nltk
from nltk.stem import WordNetLemmatizer
import pickle
import numpy as np
from keras.models import load_model
import json
import random

lemmatizer = WordNetLemmatizer()

# Singleton para cargar el modelo y datos una sola vez
class ChatbotModel:
    def __init__(self):
        self.model = load_model('chatbot_model.h5')
        # Cargar ambos JSONs
        with open('faqdataEn.json', encoding='utf-8') as file_es:
            self.intents_es = json.load(file_es)
        with open('faqdata.json', encoding='utf-8') as file_en:
            self.intents_en = json.load(file_en)
        self.words = pickle.load(open('words.pkl', 'rb'))
        self.classes = pickle.load(open('classes.pkl', 'rb'))

    def predict_class(self, sentence):
        p = self.bow(sentence)
        res = self.model.predict(np.array([p]))[0]
        ERROR_THRESHOLD = 0.4
        results = [{"intent": self.classes[i], "probability": prob} for i, prob in enumerate(res) if
                   prob > ERROR_THRESHOLD]
        return sorted(results, key=lambda x: x['probability'], reverse=True)

    def bow(self, sentence):
        sentence_words = self.clean_up_sentence(sentence)
        bag = [1 if word in sentence_words else 0 for word in self.words]
        return np.array(bag)

    def clean_up_sentence(self, sentence):
        sentence_words = nltk.word_tokenize(sentence)
        return {lemmatizer.lemmatize(word.lower()) for word in sentence_words}

    def detect_language(self, sentence):
        # Detección básica del idioma
        spanish_keywords = ["qué", "es", "cómo", "dónde", "por qué", "cuándo", "cuál", "hola"]
        if any(word.lower() in sentence.lower() for word in spanish_keywords):
            return "es"
        else:
            return "en"


chatbot = ChatbotModel()


def chatbot_response(msg):
    language = chatbot.detect_language(msg)
    intents_primary = chatbot.intents_es if language == "es" else chatbot.intents_en
    intents_secondary = chatbot.intents_en if language == "es" else chatbot.intents_es

    print(f"Idioma detectado: {language}")
    print(f"Intenciones primarias: {intents_primary}")
    print(f"Intenciones secundarias: {intents_secondary}")

    # Predecir la intención
    ints = chatbot.predict_class(msg)
    if not ints:  # Si no se predicen intenciones válidas
        return "Lo siento, no entiendo." if language == "es" else "Sorry, I don't understand."

    # Obtener el tag de la intención más probable
    tag = ints[0]['intent']
    print(f"Etiqueta predicha: {tag}")

    # Buscar en las intenciones primarias xd
    for intent in intents_primary['intents']:
        print(f"Comparando {intent['tag']} con {tag}")
        if intent['tag'] == tag:
            print(f"Etiqueta encontrada en intenciones primarias: {tag}")
            return random.choice(intent['responses'])

    # Buscar en las intenciones secundarias por si acso 
    for intent in intents_secondary['intents']:
        print(f"Comparando {intent['tag']} con {tag}")
        if intent['tag'] == tag:
            print(f"Etiqueta encontrada en intenciones secundarias: {tag}")
            return random.choice(intent['responses'])

    # Si no se encuentra en ningún conjunto de intenciones
    print("Etiqueta no encontrada en ninguno de los conjuntos de intenciones.")
    return "Lo siento, no entiendo." if language == "es" else "Sorry, I don't understand."

