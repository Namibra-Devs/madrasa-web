import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { NAV_LINKS } from "@constants";
import Button from "@components/ui/Button";
import { X } from "lucide-react";

const MobileNav = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

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
    setIsOpen(false); // closes modal/drawer if applicable
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
              className="fixed inset-0 z-[70] overflow-hidden flex flex-col text-center px-8 min-h-screen justify-center items-center pointer-events-auto"
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
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setActive(link.href);
                        setIsOpen(false);

                        // Scroll to hero if Home is clicked
                        if (link.name === "Home") {
                          e.preventDefault();
                          // Give time for menu to close before scrolling
                          setTimeout(() => {
                            const heroSection = document.querySelector("#hero");
                            if (heroSection) {
                              heroSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }, 100);
                        }
                      }}
                      variants={linkItem}
                      className={`flex items-center gap-4 text-4xl font-bold w-full py-3 px-4 rounded-xl transition-all duration-300
        ${
          active === link.href
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
                    className="animate-pulse text-md"
                    variant="outline"
                    size="md"
                    onClick={toggleDarkMode}
                  >
                    {isDark ? "Light Mode" : "Dark Mode"}
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
