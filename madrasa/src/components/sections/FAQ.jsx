import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, stagger, slideInLeft, slideInRight } from '@utils/animations';
import { FAQS } from '@constants';
import { BookOpen, Users, Clock, Award, Star, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const stats = [
    { icon: Users, number: '10,000+', label: 'Students Enrolled' },
    { icon: BookOpen, number: '50+', label: 'Courses Available' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Award, number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Get Your Questions Answered
          </div>
          <h2 className="text-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Digital Madrasah. Can't find the answer you're looking for? 
            <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline ml-1">Contact our team.</a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ============================
                 LEFT: LARGE IMAGE WITH GLASSY DESCRIPTION
          ============================= */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <img 
                src="/images/faq.png" 
                alt="Students learning at Digital Madrasah"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  // Fallback gradient background
                  e.target.parentElement.className += ' bg-gradient-to-br from-primary-500 to-primary-600';
                }}
              />
              
            
            </div>

           
          </motion.div>

          {/* ============================
                 RIGHT: FAQ ACCORDIONS
          ============================= */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-1 bg-primary-500 rounded-full"></div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                Certified Quality Education
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  All teachers are certified with Ijazah
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Curriculum approved by Islamic scholars
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Regular progress assessments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Safe and monitored learning environment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;