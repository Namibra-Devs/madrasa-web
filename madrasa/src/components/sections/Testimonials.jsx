import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@utils/animations';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Student, Quran Memorization',
      image: '/images/placeholder1.jpg',
      content:
        'Digital Madrasah transformed my Quran learning journey. The qualified teachers and flexible schedule made it possible to memorize the Quran while working full-time.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Fatima Ali',
      role: 'Mother of Two Students',
      image: '/images/placeholder2.jpg',
      content:
        'My children love their classes! The interactive lessons keep them engaged, and I can see their love for Islam growing every day. The progress tracking feature is amazing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mohammed Ibrahim',
      role: 'Arabic Language Student',
      image: '/images/placeholder3.jpg',
      content:
        'As a busy professional, I never thought I could learn Arabic. Digital Madrasah made it possible with their flexible schedule and excellent teaching methods.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Aisha Khan',
      role: 'Islamic Studies Student',
      image: '/images/placeholder4.jpg',
      content:
        "The depth of knowledge and authenticity of the curriculum is impressive. I feel like I'm getting a proper Islamic education from the comfort of my home.",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        >
          ★
        </motion.span>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 dark:bg-primary-700 h-full" />

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col space-y-12 relative z-10"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                className={`flex items-start gap-6 relative ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-900 z-20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>

                {/* Bubble */}
                <div
                  className={`relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-xl ${
                    index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'
                  }`}
                >
                  <div className="mb-2">
                    <StarRating rating={t.rating} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">{t.content}</p>
                  <div className="mt-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>

                  {/* Tail */}
                  <div
                    className={`absolute w-4 h-4 bg-gray-50 dark:bg-gray-800 transform rotate-45 top-5 ${
                      index % 2 === 0 ? '-left-2' : '-right-2'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
