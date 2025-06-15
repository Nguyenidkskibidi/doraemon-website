import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // CSS mặc định của create-react-app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);