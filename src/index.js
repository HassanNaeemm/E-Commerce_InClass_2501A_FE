import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={"100800983443-e8co0t0kpv2109csp67darh7vcldlq3t.apps.googleusercontent.com"}>
    <App />
  </GoogleOAuthProvider>
);