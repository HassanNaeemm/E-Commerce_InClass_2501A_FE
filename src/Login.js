import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

// All CSS lives inside this file
const styles = {
  page: {
    minHeight: '100vh',
    background: '#f1f4f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  box: {
    width: '340px',
    background: '#fff',
    padding: '28px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    background: '#2557d6',
    color: '#fff',
    border: 0,
    borderRadius: '6px',
    cursor: 'pointer',
  },
  or: { margin: '18px 0', color: '#888' },
  google: { display: 'flex', justifyContent: 'center' },
  error: { color: 'red', margin: 0, fontSize: '14px' },
  hint: { color: '#888', fontSize: '13px', marginTop: '16px' },
};

// Reads the user's details (name, email, photo) from the Google token
function decodeGoogleToken(token) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  const json = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(json);
}

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo credentials: username = admin, password = 1234
    if (username === 'admin' && password === '1234') {
      onLogin({ name: 'Admin', email: 'admin@demo.com', picture: '' });
    } else {
      setError('Incorrect username or password');
    }
  };

  const handleGoogle = (response) => {
    const data = decodeGoogleToken(response.credential);
    onLogin({ name: data.name, email: data.email, picture: data.picture });
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2>Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button style={styles.button} type="submit">Login</button>
        </form>

        <div style={styles.or}>or</div>

        <div style={styles.google}>
          <GoogleLogin
            onSuccess={handleGoogle}
            onError={() => setError('Google login failed')}
          />
        </div>

        <p style={styles.hint}>Username: admin | Password: 1234</p>
      </div>
    </div>
  );
}

export default Login;