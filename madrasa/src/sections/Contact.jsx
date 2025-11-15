import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const { ref, isInView } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      detail: 'contact@digitalmadrasah.com',
      subtitle: 'Send us an email anytime'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      subtitle: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      detail: 'Global Online Platform',
      subtitle: 'Available worldwide 24/7'
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-br from-[#fef9f0] to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In <span className="text-[#0a5c36]">Touch</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-color hover:border-[#0a5c36] transition-all duration-300"
                >
                  <div className="p-3 bg-[#0a5c36] text-white rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#0a5c36] font-medium mb-1">
                      {item.detail}
                    </p>
                    <p className="text-secondary text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-color shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-primary font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-color rounded-xl focus:outline-none focus:border-[#0a5c36] focus:ring-2 focus:ring-[#0a5c36]/20 bg-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-primary font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-color rounded-xl focus:outline-none focus:border-[#0a5c36] focus:ring-2 focus:ring-[#0a5c36]/20 bg-transparent transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-primary font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-color rounded-xl focus:outline-none focus:border-[#0a5c36] focus:ring-2 focus:ring-[#0a5c36]/20 bg-transparent transition-colors duration-300"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-primary font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-secondary" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 border border-color rounded-xl focus:outline-none focus:border-[#0a5c36] focus:ring-2 focus:ring-[#0a5c36]/20 bg-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact