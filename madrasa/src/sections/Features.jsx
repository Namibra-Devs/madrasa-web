import React from 'react'
import { Users, Clock, Globe, Award, BookOpen, Shield } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Qualified Teachers',
      description: 'Learn from certified Islamic scholars and experienced teachers from around the world.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Flexible Schedule',
      description: 'Study at your own pace with 24/7 access to courses and learning materials.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Community',
      description: 'Connect with Muslim students and teachers from different cultures and backgrounds.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certified Courses',
      description: 'Receive recognized certificates upon completion of your courses and programs.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Comprehensive Curriculum',
      description: 'Access wide range of subjects from Quran memorization to Islamic sciences.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safe Environment',
      description: 'Learn in a secure, moderated platform designed for Islamic education.'
    }
  ]

  return (
    <section id="features" className="section-padding bg-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose <span className="text-islamic-green">Digital Madrasah</span>?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We combine traditional Islamic teaching methods with modern technology 
            to create the perfect learning experience for the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-color hover:border-islamic-green transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-islamic-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features