import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from '@hooks/useDarkMode';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/sections/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  // Apply dark mode to document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Fix mobile viewport height for iOS
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <Router>
      {/* Add overflow-x-hidden here instead of on html/body to preserve sticky positioning */}
      <div className={`min-h-screen overflow-x-hidden ${isDark ? 'dark' : ''}`}>
        <div
          className={`transition-colors duration-300 ${
            isDark
              ? 'bg-gray-900 text-gray-100'
              : 'bg-white text-gray-900'
          }`}
          style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
        >
          <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            
            {/* 404 route */}
            <Route path="*" element={
              <div className={`min-h-screen flex items-center justify-center px-4 ${
                isDark ? 'bg-gray-900' : 'bg-gray-50'
              }`}>
                <div className="text-center">
                  <h1 className={`text-6xl font-bold mb-4 ${
                    isDark ? 'text-red-400' : 'text-red-500'
                  }`}>
                    404
                  </h1>
                  <p className={`text-xl mb-8 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Page not found
                  </p>
                  <a 
                    href="/" 
                    className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors"
                  >
                    Go to Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;