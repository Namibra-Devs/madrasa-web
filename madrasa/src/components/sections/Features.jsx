import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@utils/animations';
import { FEATURES } from '@constants';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4 transition-colors duration-300">
            Why Choose Us
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Modern Islamic Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            We combine centuries of Islamic tradition with cutting-edge technology 
            to create an engaging and effective learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-hover bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 text-center group border border-gray-100 dark:border-gray-800 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-3xl text-white">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-display transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;