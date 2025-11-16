import React, { useEffect } from 'react';
import { useDarkMode } from '@hooks/useDarkMode';
import Navbar from '@components/layout/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Features from '@components/sections/Features';
import Courses from '@components/sections/Courses';
import Testimonials from '@components/sections/Testimonials';
import FAQ from '@components/sections/FAQ';
import Contact from '@components/sections/Contact';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  // Force apply dark mode styles
  useEffect(() => {
    const applyTheme = () => {
      const elements = document.querySelectorAll('[class*="bg-"], [class*="text-"]');
      elements.forEach(el => {
        el.classList.toggle('dark', isDark);
      });
    };

    applyTheme();
    // Re-apply after a short delay to catch dynamically loaded content
    const timeoutId = setTimeout(applyTheme, 100);
    
    return () => clearTimeout(timeoutId);
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className={`transition-colors duration-300 ${
        isDark 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-white text-gray-900'
      }`}>
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Features />
        <Courses />
        <Testimonials />
        <FAQ />
        <Contact />
        
        {/* Theme debug indicator */}
        <div className="fixed bottom-4 left-4 z-50 p-2 text-xs bg-black text-white rounded">
          Theme: {isDark ? 'Dark' : 'Light'}
        </div>
      </div>
    </div>
  );
}

export default App;