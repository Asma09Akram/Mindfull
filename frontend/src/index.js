
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext'; // Make sure this path is correct

// For react-bootstrap components
import { 
  Button, 
  Form, 
  Container 
} from 'react-bootstrap';

// For react-router-dom
//import { BrowserRouter } from 'react-router-dom';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
  
);*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);