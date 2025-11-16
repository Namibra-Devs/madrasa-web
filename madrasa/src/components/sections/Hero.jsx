import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@utils/animations';
import Button from '@components/ui/Button';

const Hero = () => {
  const handleGetApp = () => {
    alert('Redirecting to app store...');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full  border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Revolutionizing Islamic Education
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-display text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Learn{' '}
              <span className="text-gradient text-shadow-glow">
                Islam
              </span>
              <br />
              in the Digital Age
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Traditional <span className="arabic-text font-semibold text-primary-600 dark:text-primary-400">مدرسة</span> education meets cutting-edge technology. 
              Access comprehensive courses, qualified teachers, and interactive learning from anywhere.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" onClick={handleGetApp} className="btn-modern">
                <span className="flex items-center gap-2">
                  Download App
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
              <Button variant="outline" size="lg" className="border-2">
                Explore Courses
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-gray-600 dark:text-gray-400"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10K+</div>
                <div className="text-sm font-medium">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm font-medium">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                <div className="text-sm font-medium">Certified Teachers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern App Mockup */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[40px] p-4 shadow-2xl border-2 border-gray-800">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full z-10"></div>
              
              <div className="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-[32px] p-6 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                </div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10 mb-8"
                >
                  <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30">
                    <span className="text-4xl">🕌</span>
                  </div>
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-4 text-display">Digital Madrasah</h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Your gateway to authentic Islamic knowledge
                </p>
                
                <div className="space-y-4 w-full max-w-xs relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-4 text-left backdrop-blur-sm"
                  >
                    <div className="font-semibold text-lg">Quran Reading</div>
                    <div className="text-sm opacity-80 mt-1">Beginner to Advanced</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-4 text-left backdrop-blur-sm"
                  >
                    <div className="font-semibold text-lg">Islamic Studies</div>
                    <div className="text-sm opacity-80 mt-1">Comprehensive Curriculum</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-4 text-left backdrop-blur-sm"
                  >
                    <div className="font-semibold text-lg">Arabic Language</div>
                    <div className="text-sm opacity-80 mt-1">Speak & Understand</div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl shadow-lg"
            >
              📖
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 dark:bg-primary-700 rounded-2xl flex items-center justify-center text-primary-700 dark:text-primary-300 text-lg shadow-lg"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;