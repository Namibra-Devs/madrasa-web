import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Then check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    // Apply to document element
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.style.background = '#111827';
      document.body.style.color = '#f9fafb';
    } else {
      root.classList.remove('dark');
      document.body.style.background = 'white';
      document.body.style.color = '#1f2937';
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return [isDark, toggleDarkMode];
};