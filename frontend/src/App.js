import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Mindfulness from './pages/Mindfulness';
import BreathingExercises from './pages/BreathingExercises';
import Meditation from './pages/Meditation';
import Journaling from './pages/Journaling';
import './styles/App.css';
import { AuthProvider } from './contexts/AuthContext';

// In Register.js, Login.js, or any other component that uses useAuth
import { useAuth } from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/breathing" element={<BreathingExercises />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/journal" element={<Journaling />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
