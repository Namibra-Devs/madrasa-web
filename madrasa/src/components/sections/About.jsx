import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, slideInLeft, slideInRight } from '@utils/animations';
import Button from '@components/ui/Button';

const About = () => {
  const handleLearnMore = () => {
    // Scroll to features section
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '5+', label: 'Years of Excellence' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '10K+', label: 'Students Enrolled' },
    { number: '95%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img 
                src="/images/about.png"
                alt="Islamic Education"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            </div>

           
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
              >
                About Us
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4"
              >
                Bridging Tradition with Technology
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Digital Madrasah is a pioneering educational platform that brings the rich tradition 
                of Islamic learning into the digital age. We combine authentic Islamic teachings with 
                modern educational technology.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Authentic Islamic curriculum</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Certified and experienced teachers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Interactive learning platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Flexible learning schedule</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-6"
            >
              <Button size="lg" onClick={handleLearnMore}>
                Learn More About Our Approach
              </Button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;