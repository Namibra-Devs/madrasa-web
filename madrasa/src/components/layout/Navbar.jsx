import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@constants";
import Button from "@components/ui/Button";
import MobileNav from "./MobileNav";
import ShinyText from "@/components/ShinyText";

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetApp = () => {
    // Simulate app download
    alert("Redirecting to app store...");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-8 left-6 right-6 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl border border-gray-100/30 dark:border-gray-800/30"
        } rounded-2xl mx-auto max-w-7xl`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo with Image and Title Link */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Logo Image with Tilt Effect */}
              <motion.div
                className="relative"
                animate={{
                  rotate: isHovered ? [-2, 2, -2] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { duration: 0.2 },
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Digital Madrasah Logo"
                  className="w-15 h-15 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if image doesn't exist */}
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg hidden">
                  <span className="text-white font-bold text-sm">DM</span>
                </div>
              </motion.div>

              {/* Title as Link */}
              <ShinyText
                text="Digital Madrasah"
                speed={4}
                className="text-xl font-bold"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.filter((link) => link.name !== "Home").map(
                (link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 group/nav-item"
                    whileHover={{ y: -1 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-xl scale-0 group-hover/nav-item:scale-100"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  </motion.a>
                )
              )}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-200 dark:border-gray-700 animate-pulse"
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  key={isDark ? "sun" : "moon"}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isDark ? "☀️" : "🌙"}
                </motion.span>
              </motion.button>

              {/* Get App Button - Larger */}
              <Button
                size="lg"
                onClick={handleGetApp}
                className="px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <motion.img
                    src="/images/app-download.png"
                    alt="Download App"
                    className="w-5 h-5"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  Get App
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <MobileNav isDark={isDark} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>

        {/* Floating Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={false}
          animate={{
            boxShadow: isHovered
              ? "0 0 0 1px rgba(34, 197, 94, 0.3), 0 20px 40px rgba(0, 0, 0, 0.1)"
              : "0 0 0 1px transparent, 0 10px 30px rgba(0, 0, 0, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>
    </>
  );
};

export default Navbar;
