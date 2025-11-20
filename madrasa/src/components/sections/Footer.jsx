import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:salam@digitalmadrasah.app';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+233542095568';
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    'Quran & Tajweed',
    'Arabic Language',
    'Islamic Studies',
    'Quran Memorization',
    'Islamic History',
    'Youth Programs'
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/digitalmadrasah', 
      label: 'Facebook' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/digitalmadrasah', 
      label: 'Twitter' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/digitalmadrasah', 
      label: 'Instagram' 
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com/digitalmadrasah', 
      label: 'YouTube' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-primary-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary-500 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column with Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                {/* Logo Image */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/images/logo.png" 
                    alt="Digital Madrasah Logo"
                    className="w-12 h-12 rounded-xl object-cover shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if logo doesn't exist */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg hidden">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Digital Madrasah
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming Islamic education through technology. Learn Quran, Arabic, and Islamic studies with certified teachers from anywhere in the world.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-400" />
                Our Courses
              </h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <span className="text-gray-300 flex items-center gap-2 group cursor-default">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Functional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400" />
                Contact Us
              </h3>
              <div className="space-y-4">
                {/* Email - Functional */}
                <motion.button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 w-full text-left group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:underline">info@digitalmadrasah.com</span>
                </motion.button>

                {/* Phone - Functional */}
                <motion.button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 w-full text-left group"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:underline">tel:+233542095568</span>
                </motion.button>

                {/* Location */}
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Online Islamic Education Platform<br />Available Worldwide</span>
                </div>
              </div>

              

              {/* Newsletter Signup */}
              <div className="mt-6">
                <p className="text-sm text-gray-300 mb-3">Stay updated with our latest courses</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 text-sm"
                  />
                  <motion.button 
                    className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Digital Madrasah. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-xl flex items-center justify-center text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;