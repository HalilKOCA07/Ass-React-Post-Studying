import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginProvider from './context/LoginProvider';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
    // <LoginProvider>
    <App />
  // </LoginProvider>
  // </BrowserRouter>

);

