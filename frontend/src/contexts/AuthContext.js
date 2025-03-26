import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock signup function (replace with actual API call)
  const signup = async (email, password) => {
    try {
      // Simulate API call
      const user = { id: Date.now(), email }; // Replace with actual user data
      setCurrentUser(user);
      console.log('User signed up:', user);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  // Mock login function (replace with actual API call)
  const login = async (email, password) => {
    try {
      // Simulate API call
      const user = { id: Date.now(), email }; // Replace with actual user data
      setCurrentUser(user);
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      // Clear any auth tokens from localStorage
      localStorage.removeItem('token');
      // Clear the current user
      setCurrentUser(null);
      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Simulate fetching the current user on mount (replace with actual logic)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulate fetching user data
        const user = null; // Replace with actual user data if logged in
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Context value
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};