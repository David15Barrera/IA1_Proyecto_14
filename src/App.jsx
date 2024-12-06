// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputForm from './components/InputForm';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Centrar horizontalmente
        alignItems: 'center',    // Centrar verticalmente
        height: '100vh',         // Asegura que ocupe toda la pantalla
        backgroundColor: '#1E1E1E', // Fondo oscuro, similar al chat
        margin: 0,
        padding: 0,
      }}
    >
      <InputForm />
    </div>
  );
}

export default App;
