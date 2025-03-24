
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext'; // Make sure this path is correct
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
// For react-bootstrap components
import { 
  Button, 
  Form, 
  Container 
} from 'react-bootstrap';

// For react-router-dom
//import { BrowserRouter } from 'react-router-dom';

// Create root and render app
//const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
  
);*/
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage /> // Add error handling for this route
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    errorElement: <ErrorPage />, // Add error handling at the root level
    children: routes
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});
// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));

//nst root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);