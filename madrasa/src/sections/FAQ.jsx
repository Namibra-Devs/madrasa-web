import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQ = () => {
  const { ref, isInView } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "We offer courses for all age groups, from children (5+ years) to adults. Our curriculum is tailored to different age brackets to ensure appropriate learning experiences."
    },
    {
      question: "Do I need any prior knowledge to enroll?",
      answer: "No prior knowledge is required! We have courses for complete beginners as well as advanced levels. Our teachers will assess your level and place you in the appropriate class."
    },
    {
      question: "How are the classes conducted?",
      answer: "Classes are conducted live online through our interactive platform. You can interact with teachers in real-time, access learning materials, and track your progress."
    },
    {
      question: "Are your teachers qualified?",
      answer: "Yes, all our teachers are certified Islamic scholars and educators with extensive teaching experience. They undergo rigorous screening and training before joining our platform."
    },
    {
      question: "Can I get a certificate after completing a course?",
      answer: "Yes, we provide recognized certificates upon successful completion of all our courses. These certificates can be used for educational and professional purposes."
    },
    {
      question: "What if I miss a class?",
      answer: "All live classes are recorded and available for replay. You can access the recordings anytime to catch up on missed lessons."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="section-padding bg-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked <span className="text-[#0a5c36]">Questions</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Find answers to common questions about our digital madrasah platform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-color hover:border-[#0a5c36] transition-all duration-300 text-left flex justify-between items-center shadow-sm hover:shadow-md"
              >
                <span className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#0a5c36] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0a5c36] flex-shrink-0" />
                )}
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-b-2xl border border-t-0 border-color">
                      <p className="text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ