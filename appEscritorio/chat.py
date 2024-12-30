from googletrans import Translator
import nltk
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
import pickle
import numpy as np
import speech_recognition as s

import tensorflow as tf
from keras.models import load_model

model = load_model('chatbot_model.h5')
from google_trans_new import google_translator
from googletrans import Translator
translator = google_translator()
translator = Translator()
import json
import random
intents = json.loads(open('faqdata.json', encoding='utf-8').read())
words = pickle.load(open('words.pkl','rb'))
classes = pickle.load(open('classes.pkl','rb'))


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bow(sentence, words, show_details=True):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print(f"found in bag: {w}")
    return np.array(bag)

def predict_class(sentence, model):
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return [{"intent": classes[r[0]], "probability": str(r[1])} for r in results]

def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    for i in intents_json['intents']:
        if i['tag'] == tag:
            return random.choice(i['responses'])
    return "I don't understand."

def chatbot_response(msg):
    detected_lang = translator.detect(msg).lang
    print(f"Detected language: {detected_lang}")
    
    if detected_lang != 'en':  # Translate to English for processing
        msg = translator.translate(msg, dest='en').text
    
    ints = predict_class(msg, model)
    res = getResponse(ints, intents)
    
    if detected_lang != 'en':  # Translate response back to original language
        res = translator.translate(res, dest=detected_lang).text
    
    return res