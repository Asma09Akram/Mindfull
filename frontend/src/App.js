import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Ensure this is imported
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Mindfulness from './pages/Mindfulness';
import BreathingExercises from './pages/BreathingExercises';
import Meditation from './pages/Meditation';
import Journaling from './pages/Journaling';
import PrivateRoute from './components/PrivateRoute';
import './styles/app.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mindfulness"
                element={
                  <PrivateRoute>
                    <Mindfulness />
                  </PrivateRoute>
                }
              />
              <Route
                path="/breathing"
                element={
                  <PrivateRoute>
                    <BreathingExercises />
                  </PrivateRoute>
                }
              />
              <Route
                path="/meditation"
                element={
                  <PrivateRoute>
                    <Meditation />
                  </PrivateRoute>
                }
              />
              <Route
                path="/journal"
                element={
                  <PrivateRoute>
                    <Journaling />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;