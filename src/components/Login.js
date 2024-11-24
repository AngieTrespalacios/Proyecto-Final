import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'attrespalacios' && password === 'pf_2024*') {
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/background.jpg")', // Ruta a tu imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semi-transparente
          padding: '40px',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h2 style={{ color: '#d90429' }}>Iniciar Sesión</h2>

        {/* Contenedor centrado de los inputs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
              width: '100%', // Hace que ocupe todo el ancho disponible
              maxWidth: '300px', // Limita el ancho máximo del input
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
              width: '100%', // Hace que ocupe todo el ancho disponible
              maxWidth: '300px', // Limita el ancho máximo del input
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: '#d90429',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '10px',
          }}
        >
          Entrar
        </button>
        {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
