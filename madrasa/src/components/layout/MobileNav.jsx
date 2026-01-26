import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "@constants";
import Button from "@components/ui/Button";
import { X } from "lucide-react";

const MobileNav = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Magnetic button effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const hoverMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };
  
  const hoverReset = () => {
    x.set(0);
    y.set(0);
  };

  // Circular reveal animation
  const circleVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      scale: 35,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 5 },
    },
  };

  const handleGetApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.digitalmadrasah.madrasah&pcampaignid=web_share",
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  // Stagger animation for links
  const linkContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const linkItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 5 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  // Handle navigation - pages vs sections
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    // Check if it's a hash link (section) or page link
    if (link.href.startsWith('#')) {
      // It's a section link
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/');
        // Then scroll to section after navigation
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // It's a page link (like / or /privacy)
      navigate(link.href);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if link is active
  const isLinkActive = (link) => {
    if (link.href.startsWith('#')) {
      // For section links, they're active when on home page
      return location.pathname === '/' && location.hash === link.href;
    } else {
      // For page links, check exact path match
      return location.pathname === link.href;
    }
  };

  return (
    <div className="md:hidden relative z-[80] overflow-hidden">
      {/* Magnetic Menu Button */}
      <motion.button
        style={{ x: springX, y: springY }}
        onMouseMove={hoverMove}
        onMouseLeave={hoverReset}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      >
        <div className="w-6 h-6 space-y-[5px] flex flex-col justify-center">
          <span className="block h-[3px] w-full bg-current rounded" />
          <span className="block h-[3px] w-full bg-current rounded" />
          <span className="block h-[3px] w-full bg-current rounded" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Circular background */}
            <motion.div
              className="fixed top-4 right-4 w-20 h-20 rounded-full bg-white dark:bg-gray-900 z-0"
              variants={circleVariants}
              initial="closed"
              animate="open"
              exit="closed"
            />

            {/* Full-screen menu */}
            <motion.div
              className="fixed inset-0 z-[70] overflow-hidden flex flex-col text-center px-8 justify-center items-center pointer-events-auto"
              style={{ 
                minHeight: 'calc(var(--vh, 1vh) * 100)',
                WebkitOverflowScrolling: 'touch' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-[80]"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              {/* Menu Links with stagger */}
              <motion.div
                className="w-full max-w-xs flex flex-col items-start justify-center mt-10"
                variants={linkContainer}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  const active = isLinkActive(link);
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      variants={linkItem}
                      className={`flex items-center gap-4 text-4xl font-bold w-full py-3 px-4 rounded-xl transition-all duration-300
                        ${
                          active
                            ? "text-primary-600 dark:text-primary-400 shadow-[6px_0_25px_-4px_rgba(0,255,120,.5)]"
                            : "text-gray-800 dark:text-gray-100"
                        }`}
                    >
                      <Icon size={36} />
                      {link.name}
                    </motion.a>
                  );
                })}

                {/* Bottom buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center space-x-4 pt-8 w-full"
                >
                  <Button
                    className="text-md"
                    variant="outline"
                    size="md"
                    onClick={toggleDarkMode}
                  >
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                  </Button>
                  <Button size="lg" onClick={handleGetApp}>
                    Get App
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;