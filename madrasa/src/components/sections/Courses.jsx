import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@utils/animations';
import Button from '@components/ui/Button';

const Courses = () => {
  const courses = [
    {
      title: 'Quran Reading & Tajweed',
      level: 'Beginner to Advanced',
      duration: '6 Months',
      students: '2,500+',
      description: 'Learn proper Quran recitation with Tajweed rules from qualified Qaris.',
      icon: '📖',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Islamic Studies',
      level: 'All Levels',
      duration: '12 Months',
      students: '1,800+',
      description: 'Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, and more.',
      icon: '🕌',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Arabic Language',
      level: 'Beginner to Advanced',
      duration: '9 Months',
      students: '1,200+',
      description: 'Master classical and modern Arabic for understanding Quran and Hadith.',
      icon: '🈁',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Quran Memorization',
      level: 'Intermediate to Advanced',
      duration: '24 Months',
      students: '800+',
      description: 'Structured program for memorizing the Holy Quran with understanding.',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Islamic History',
      level: 'All Levels',
      duration: '4 Months',
      students: '950+',
      description: 'Explore the rich history of Islam and Muslim civilizations.',
      icon: '📜',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      title: 'Youth Programs',
      level: 'Kids & Teens',
      duration: 'Ongoing',
      students: '1,500+',
      description: 'Age-appropriate Islamic education for children and teenagers.',
      icon: '👨‍👩‍👧‍👦',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const handleEnroll = (courseTitle) => {
    alert(`Enrolling in ${courseTitle}. You will be redirected to the enrollment page.`);
  };

  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Our Courses
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Comprehensive Islamic Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully designed courses that cater to all ages and learning levels. 
            Start your journey of Islamic knowledge today.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-hover bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 group"
            >
              {/* Course Header */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="p-6">
                {/* Course Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {course.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{course.duration}</div>
                  </div>
                </div>

                {/* Course Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-display">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Level:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Students:</span>
                    <span className="font-medium text-primary-600 dark:text-primary-400">{course.students}</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <Button 
                  onClick={() => handleEnroll(course.title)}
                  className="w-full"
                >
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-display">
              Ready to Start Your Islamic Learning Journey?
            </h3>
            <p className="text-primary-100 mb-6 text-lg max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives through authentic Islamic education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => alert('Starting free trial...')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Contact Advisor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;