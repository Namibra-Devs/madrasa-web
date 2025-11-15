import React from 'react'
import { Clock, Users, Star, BookOpen } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      title: 'Quran Memorization',
      description: 'Complete Hifz program with qualified Huffaz',
      duration: '12 months',
      students: '2.5K',
      rating: '4.9',
      level: 'All Levels',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Arabic Language',
      description: 'Master classical Arabic for Quran understanding',
      duration: '6 months',
      students: '1.8K',
      rating: '4.8',
      level: 'Beginner',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Islamic Studies',
      description: 'Comprehensive study of Aqeedah, Fiqh, and Seerah',
      duration: '9 months',
      students: '3.2K',
      rating: '4.9',
      level: 'Intermediate',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Tajweed Mastery',
      description: 'Perfect your Quran recitation with proper rules',
      duration: '4 months',
      students: '2.1K',
      rating: '4.7',
      level: 'All Levels',
      icon: <BookOpen className="h-6 w-6" />
    }
  ]

  return (
    <section id="courses" className="section-padding bg-gradient-to-br from-islamic-cream to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Popular <span className="text-islamic-green">Courses</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed for students of all ages and levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="group bg-section rounded-2xl border border-color overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-islamic-green"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-islamic-green/10 rounded-lg text-islamic-green">
                    {course.icon}
                  </div>
                  <span className="text-sm font-medium text-islamic-green bg-islamic-green/10 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {course.title}
                </h3>
                <p className="text-secondary mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <button className="w-full btn-secondary">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses