import React from 'react'
import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

const About = () => {
  const missions = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Our Mission',
      description: 'To make authentic Islamic education accessible to every Muslim worldwide through innovative technology.'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Our Vision',
      description: 'To become the leading digital platform for Islamic learning while preserving traditional teaching values.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Our Values',
      description: 'Authenticity, excellence, accessibility, and community building guide everything we do.'
    }
  ]

  const features = [
    'Authentic Islamic Curriculum',
    'Qualified & Certified Teachers',
    'Interactive Learning Platform',
    'Flexible Learning Schedule',
    'Progress Tracking',
    'Certification Upon Completion'
  ]

  return (
    <section id="about" className="section-padding bg-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About <span className="text-[#0a5c36]">Digital Madrasah</span>
            </h2>
            <p className="text-lg text-secondary mb-6">
              Digital Madrasah is a revolutionary educational platform that brings traditional 
              Islamic learning into the digital age. Founded by educators and technology experts, 
              we're committed to making authentic Islamic knowledge accessible to everyone.
            </p>
            <p className="text-lg text-secondary mb-8">
              Our platform combines centuries-old teaching methodologies with modern technology 
              to create an engaging, effective, and convenient learning experience for students 
              of all ages and backgrounds.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#0a5c36] flex-shrink-0" />
                  <span className="text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Mission Cards */}
          <div className="space-y-6">
            {missions.map((mission, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-[#fef9f0] to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-color hover:border-[#0a5c36] transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#0a5c36] text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-secondary">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About