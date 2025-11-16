import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@constants';
import Button from '@components/ui/Button';

const MobileNav = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetApp = () => {
    alert('Redirecting to app store...');
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-current transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-current transition-all"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-current transition-all"
          />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-16 left-4 right-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 z-50"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 4 }}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" size="sm" onClick={toggleDarkMode}>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </Button>
                <Button size="sm" onClick={handleGetApp}>
                  Get App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;