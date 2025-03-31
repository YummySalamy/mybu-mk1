import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/landing/LandingPage';
import AppLayout from './layouts/AppLayout';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage toggleTheme={toggleTheme} />} />
        
        {/* Application Routes */}
        <Route path="/app/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;