import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [spellCheck, setSpellCheck] = useState(() => {
    const storedValue = localStorage.getItem('spellCheck');
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    localStorage.setItem('spellCheck', JSON.stringify(spellCheck));
  }, [spellCheck]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedThemePreference = localStorage.getItem('themePreference');

    if (savedThemePreference === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themePreference', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route index element={<Navigate to="/home" />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} spellCheck={spellCheck} setSpellCheck={setSpellCheck} />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          {/* Fallback route to handle 404 or unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
