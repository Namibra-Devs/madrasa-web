import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@utils/animations';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Student, Quran Memorization',
      image: '👨‍🎓',
      content: 'Digital Madrasah transformed my Quran learning journey. The qualified teachers and flexible schedule made it possible to memorize the Quran while working full-time.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Fatima Ali',
      role: 'Mother of Two Students',
      image: '👩‍👧‍👦',
      content: 'My children love their classes! The interactive lessons keep them engaged, and I can see their love for Islam growing every day. The progress tracking feature is amazing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mohammed Ibrahim',
      role: 'Arabic Language Student',
      image: '👨‍💼',
      content: 'As a busy professional, I never thought I could learn Arabic. Digital Madrasah made it possible with their flexible schedule and excellent teaching methods.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Aisha Khan',
      role: 'Islamic Studies Student',
      image: '👩‍🎓',
      content: 'The depth of knowledge and authenticity of the curriculum is impressive. I feel like I\'m getting a proper Islamic education from the comfort of my home.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Omar Hussein',
      role: 'Parent & Student',
      image: '👨‍👧‍👦',
      content: 'Both my daughter and I take classes. The platform is so user-friendly, and the teachers are incredibly patient and knowledgeable.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Revert Student',
      image: '🙋‍♀️',
      content: 'As a recent revert, Digital Madrasah has been a blessing. The teachers are so understanding and provide the foundational knowledge I need in a supportive environment.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our community of students who have transformed their lives through authentic Islamic education.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 text-6xl text-primary-200 dark:text-primary-800 opacity-50">
                "
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Countries</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Completion Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;