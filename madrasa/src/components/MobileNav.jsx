import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-secondary hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-color shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-4 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary hover:text-[#d4af37] font-medium py-2 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <span className="text-secondary">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </motion.div>
              
              <motion.button 
                variants={itemVariants}
                onClick={() => {
                  document.getElementById('download').scrollIntoView({ behavior: 'smooth' })
                  setIsOpen(false)
                }}
                className="btn-secondary w-full mt-2"
              >
                Get App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav