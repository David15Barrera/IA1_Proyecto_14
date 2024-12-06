import React, { useState } from 'react';
import { loadModel, findBestMatch } from '../models/textModel';
import { Box, Typography, TextField, Button, Paper, List, ListItem, ListItemText, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBot = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([{ sender: 'bot', text: '¡Hola! ¿En qué puedo ayudarte?' }]);

  // Cargar el modelo al montar el componente
  React.useEffect(() => {
    loadModel();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;

    // Agregar mensaje del usuario
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);

    // Procesar la consulta y obtener respuesta
    const answer = await findBestMatch(query);
    setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);

    setQuery(''); // Limpiar el campo de entrada
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1E1E1E',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800, // Más ancho
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Chat con IA
        </Typography>
        <Paper
          sx={{
            width: '100%',
            height: 600, // Más alto
            overflowY: 'auto',
            backgroundColor: '#2D2D2D',
            color: '#fff',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
          elevation={4}
        >
          <List>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {msg.sender === 'bot' && <Avatar sx={{ bgcolor: '#007bff', marginRight: 1 }}>IA</Avatar>}
                <Paper
                  sx={{
                    padding: 1.5, // Más espacio en los mensajes
                    borderRadius: 2,
                    backgroundColor: msg.sender === 'user' ? '#007bff' : '#e0e0e0',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                    maxWidth: '80%',
                  }}
                >
                  <ListItemText primary={msg.text} />
                </Paper>
              </ListItem>
            ))}
          </List>
        </Paper>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            marginTop: 20,
            width: '100%',
          }}
        >
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe tu mensaje"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              marginRight: 1,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              backgroundColor: '#007bff',
              '&:hover': { backgroundColor: '#0056b3' },
            }}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ChatBot;
