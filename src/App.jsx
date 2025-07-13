import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WeddingTemplate from './components/WeddingTemplate';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <WeddingTemplate 
                  isDarkMode={isDarkMode} 
                  toggleTheme={toggleTheme}
                  isPreview={isPreview}
                />
              } 
            />
            <Route 
              path="/admin" 
              element={
                <AdminPanel 
                  isDarkMode={isDarkMode} 
                  toggleTheme={toggleTheme}
                  isPreview={isPreview}
                  setIsPreview={setIsPreview}
                />
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;