/* eslint-disable no-unused-vars */
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { faqData } from './faqData';
import { evaluate } from 'mathjs';

let model;
let questionEmbeddings = [];

// Cargar el modelo y calcular embeddings de preguntas
export const loadModel = async () => {
  if (!model) {
    await tf.setBackend('webgl');
    await tf.ready();
    model = await use.load();
    console.log('Modelo cargado');

    // Generar embeddings para preguntas predefinidas
    const questions = faqData.map((item) => item.question);
    questionEmbeddings = await model.embed(questions);
  }
};

// Detectar expresiones matemáticas
const isMathExpression = (query) => {
  const mathRegex = /^[0-9+\-*/().\s]+$/; // Solo números y operadores
  return mathRegex.test(query.trim());
};

// Detectar consultas matemáticas en lenguaje natural
const extractMathFromNaturalLanguage = (query) => {
  const mathNaturalRegex = /cuánto es\s*([\d+\-*/().\s]+)/i; // Busca frases como "cuánto es 2+2"
  const match = query.match(mathNaturalRegex);
  return match ? match[1] : null; // Devuelve la operación matemática encontrada
};

// Evaluar expresión matemática
const evaluateExpression = (expression) => {
  try {
    const result = evaluate(expression);
    return `El resultado es: ${result}`;
  } catch (error) {
    return "Lo siento, no pude calcular esa expresión. ¿Puedes verificar si es correcta?";
  }
};

// Procesar consulta
export const findBestMatch = async (query) => {
  if (!model) {
    await loadModel();
  }

  // Normalizar la consulta del usuario
  const normalizedQuery = query.trim().toLowerCase();

  // Coincidencias exactas para preguntas clave
  const exactMatches = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "cómo estás": "Estoy aquí para ayudarte con tus dudas.",
    "cómo te sientes": "Me siento genial ayudándote con tus consultas.",
    "eres humano": "No, soy una inteligencia artificial, pero estoy aquí para ayudarte.",
  };

  if (exactMatches[normalizedQuery]) {
    return exactMatches[normalizedQuery];
  }

  // Verificar si la consulta es una expresión matemática directa
  if (isMathExpression(normalizedQuery)) {
    return evaluateExpression(normalizedQuery);
  }

  // Verificar si es una pregunta en lenguaje natural con una operación matemática
  const mathExpression = extractMathFromNaturalLanguage(normalizedQuery);
  if (mathExpression) {
    return evaluateExpression(mathExpression);
  }

  // Generar el embedding de la consulta del usuario
  const queryEmbedding = await model.embed([normalizedQuery]);

  // Calcular similitudes entre la consulta y las preguntas en el FAQ
  const similarities = tf.matMul(queryEmbedding, questionEmbeddings, false, true);
  const similaritiesArray = similarities.arraySync()[0];

  // Encontrar la mejor coincidencia y el puntaje
  const bestMatchIndex = similaritiesArray.indexOf(Math.max(...similaritiesArray));
  const bestMatchScore = similaritiesArray[bestMatchIndex];

  // Umbral mínimo para similitud
  const SIMILARITY_THRESHOLD = 0.5;

  // Si la similitud no es suficiente, devolver mensaje genérico
  if (bestMatchScore < SIMILARITY_THRESHOLD) {
    return "Lo siento, no entiendo tu consulta. ¿Puedes escribirla de nuevo?";
  }

  // Responder con la mejor coincidencia del FAQ
  return faqData[bestMatchIndex]?.answer || "Lo siento, no entiendo tu consulta.";
};
