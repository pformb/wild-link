import React from 'react';
import ReactDOM from 'react-dom/client'; // /client
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//note all commented code is for react v6 not v5 which we are using