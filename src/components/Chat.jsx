import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  StarButton,
  InfoButton,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import { faqData } from "../models/faqData";
import { evaluate } from "mathjs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Chat = ({ messages, setMessages }) => {

  const [model, setModel] = useState(null);
  const [questionEmbeddings, setQuestionEmbeddings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar el modelo y los embeddings al montar el componente
  useEffect(() => {
    const loadModelAndEmbeddings = async () => {
      // Mostrar el loader de SweetAlert2
      MySwal.fire({
        title: "Cargando...",
        text: "Por favor espera mientras se carga el modelo",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          MySwal.showLoading();
        },
      });

      try {
        await tf.setBackend("webgl");
        await tf.ready();
        const loadedModel = await use.load();
        setModel(loadedModel);

        const questions = faqData.map((item) => item.question);
        const embeddings = await loadedModel.embed(questions);
        setQuestionEmbeddings(embeddings);

        console.log("Modelo y embeddings cargados");
      } catch (error) {
        console.error("Error al cargar el modelo:", error);
      } finally {
        // Ocultar el loader
        MySwal.close();
        setIsLoading(false);
      }
    };

    loadModelAndEmbeddings();
  }, []);

  // Detectar expresiones matemáticas
  const isMathExpression = (query) => {
    const mathRegex = /^[0-9+\-*/().\s]+$/;
    return mathRegex.test(query.trim());
  };

  // Detectar consultas matemáticas en lenguaje natural
  const extractMathFromNaturalLanguage = (query) => {
    const mathNaturalRegex = /cuánto es\s*([\d+\-*/().\s]+)/i;
    const match = query.match(mathNaturalRegex);
    return match ? match[1] : null;
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
  const processQuery = async (query) => {
    if (!model) {
      return "El modelo aún no está listo, por favor espera un momento.";
    }

    // Normalizar la consulta del usuario
    const normalizedQuery = query.trim().toLowerCase();

    // Coincidencias exactas para preguntas clave
    const exactMatches = {
      hola: "¡Hola! ¿En qué puedo ayudarte?",
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

    // Generar el embedding de la consulta
    const queryEmbedding = await model.embed([normalizedQuery]);

    // Calcular similitud con las preguntas predefinidas
    const similarities = tf.matMul(queryEmbedding, questionEmbeddings, false, true);
    const bestMatchIndex = similarities.argMax(1).arraySync()[0];

    return faqData[bestMatchIndex]?.answer || "Aun no aprendo sobre lo que quieres saber, pero puedes preuntarme sobre tecnologia, Inteligencia artificial, libros o musica.";
  };

  // Manejar el envío de mensajes
  const handleSend = async (text) => {
    const newMessage = {
      message: text,
      sentTime: "justo ahora",
      sender: "Usuario",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Procesar la respuesta del chatbot
    const response = await processQuery(text);
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: response,
        sentTime: "justo ahora",
        sender: "Chatbot",
      },
    ]);
  };

  return (
    <div className="w-full flex justify-center items-start h-screen mt-2">
      {isLoading ? (
        // Muestra un loader (opcional)
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-white text-xl">Cargando el chat...</span>
        </div>
      ) : (
        <MainContainer
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "88vh",
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <ChatContainer>
            <ConversationHeader
              style={{
                padding: "1px",
                backgroundColor: "#1e1e1e",
              }}
            >
              <Avatar
                name="Emily"
                title="Emely Chat Bot IA"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                style={{
                  padding: "4px",
                  backgroundColor: "#1e1e1e",
                }}
              />
              <ConversationHeader.Content
              >
                <span
                  style={{
                    alignSelf: 'flex-center',
                    color: '#fff'
                  }}
                >
                  Emely Chat Bot
                </span>
              </ConversationHeader.Content>
              <ConversationHeader.Actions>
                <StarButton title="Add to favourites" />
                <InfoButton title="Show info" />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList typingIndicator={<TypingIndicator
              style={{
                padding: "10px",
                backgroundColor: "#1e1e1e",
              }}
              content="Emily is typing" />}
              style={{
                flex: "1 1 auto",
                overflowY: "auto",
                padding: "10px",
                backgroundColor: "#1e1e1e",
              }}
            >
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  model={{
                    message: msg.message,
                    sentTime: msg.sentTime,
                    sender: msg.sender,
                    direction: msg.sender === "Usuario" ? "outgoing" : "incoming",
                    position: "normal",
                  }}
                >
                  {msg.sender !== "Usuario" && (
                    <Avatar
                      name="Emily"
                      src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                    />
                  )}
                </Message>
              ))}
            </MessageList>
            <MessageInput
              placeholder="Escribe tu mensaje aquí..."
              onSend={handleSend}
              attachButton={false}
              autoFocus
              style={{
                borderTop: "1px solid #444",
                backgroundColor: "#1e1e1e",
                color: "#fff",
              }}
            />
          </ChatContainer>
        </MainContainer>
      )

      }
    </div>
  );
};

export default Chat;
