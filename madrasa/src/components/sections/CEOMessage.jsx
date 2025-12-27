import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, slideInLeft, slideInRight } from '@utils/animations';
import Button from '@components/ui/Button';

const CEOMessage = () => {
  const handleContactCEO = () => {
    // Logic for contacting CEO - could open contact form or navigate to contact page
    console.log('Contact CEO clicked');
    // Example: document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ceo-message" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            A Message From Our CEO
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-6">
            Leading with Purpose & Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Words from our founder and Chief Executive Officer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - CEO Image & Info */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/ceo.jpeg" 
                alt="CEO of Digital Madrasah"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* CEO Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-2">
                  <span className="text-primary-300 font-medium">Founder & CEO</span>
                </div>
                <h3 className="text-3xl font-bold mb-1">Mr. Mohammed A. Ibrahim</h3>
               
              </div>
            </div>

           
          </motion.div>

          {/* Right Content - Message */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Message Quote */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-6xl text-primary-200 dark:text-primary-800/50 opacity-50">
                "
              </div>
              <motion.p
                variants={fadeInUp}
                className="text-2xl text-gray-800 dark:text-gray-200 italic leading-relaxed pl-8"
              >
                Our mission is to make authentic Islamic education accessible to every Muslim, 
                combining the wisdom of tradition with the possibilities of technology.
              </motion.p>
              <div className="absolute -bottom-6 -right-6 text-6xl text-primary-200 dark:text-primary-800/50 opacity-50 rotate-180">
                "
              </div>
            </div>

            {/* Main Message */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As someone who has spent decades studying traditional Islamic sciences and witnessing 
                the digital revolution, I saw a crucial gap. While technology advanced, authentic 
                Islamic education remained largely inaccessible to many.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Digital Madrasah, we bridge this gap by preserving the integrity of classical 
                Islamic learning while leveraging modern technology to make it accessible, engaging, 
                and relevant for today's generation.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Every course, every lesson, and every interaction on our platform is designed with 
                one goal: to help you strengthen your connection with Allah through knowledge that 
                is both authentic and accessible.
              </p>
            </motion.div>

            {/* Key Principles */}
            <motion.div
              variants={fadeInUp}
              className="pt-4"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Our Guiding Principles
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Authenticity First</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      All content is verified by qualified scholars before publication
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Student-Centered Approach</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Every decision is made with our students' spiritual growth in mind
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Innovation with Integrity</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Embracing technology while maintaining traditional Islamic values
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default CEOMessage;