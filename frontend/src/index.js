import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Mindfulness from './pages/Mindfulness';
import BreathingExercises from './pages/BreathingExercises';
import Meditation from './pages/Meditation';
import Journaling from './pages/Journaling';

const routes = [
  { path: "*",  // Changed from "/" to "*"
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  // Use index route for home
        element: <Home />
      },
      {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />
  },
  {
    path: "mindfulness",
    element: <Mindfulness />,
    errorElement: <ErrorPage />
  },
  {
    path: "breathing",
    element: <BreathingExercises />,
    errorElement: <ErrorPage />
  },
  {
    path: "meditation",
    element: <Meditation />,
    errorElement: <ErrorPage />
  },
  {
    path: "journal",
    element: <Journaling />,
    errorElement: <ErrorPage />
  }
 
]
   
  }
];
  const router = createBrowserRouter([
  {
    path: "*",  // Changed from "/" to "*"
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: routes
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
      future={{
        v7_startTransition: true
      }}
    />
  </React.StrictMode>
);
