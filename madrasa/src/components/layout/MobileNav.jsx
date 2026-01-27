import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "@constants";
import Button from "@components/ui/Button";
import { X, Menu } from "lucide-react";

const MobileNav = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const handleGetApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.digitalmadrasah.madrasah&pcampaignid=web_share",
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Menu Portal */}
      {isOpen && createPortal(
        <div className="lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[9999]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 z-[10000] shadow-2xl flex flex-col animate-slide-in">
            {/* Header - Matching Navbar Style */}
<div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
  <div 
    className="flex items-center space-x-3 cursor-pointer group"
    onClick={() => {
      setIsOpen(false);
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <div className="relative group-hover:scale-110 transition-transform duration-300">
      <img
        src="/images/logo.png"
        alt="Digital Madrasah"
        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextElementSibling.style.display = "flex";
        }}
      />
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 hidden items-center justify-center ring-2 ring-primary-500/20 group-hover:ring-primary-500/40">
        <span className="text-white font-bold text-lg">DM</span>
      </div>
    </div>
    <div>
      <h2 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        Digital Madrasah
      </h2>
     
    </div>
  </div>
  <button
    onClick={() => setIsOpen(false)}
    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  >
    <X size={24} />
  </button>
</div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto p-6">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center space-x-3 p-4 rounded-xl text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 mb-2"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center justify-center space-x-2 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span>{isDark ? '☀️' : '🌙'}</span>
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              <Button
                size="lg"
                onClick={handleGetApp}
                className="w-full"
              >
                Get App
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};



export default MobileNav;