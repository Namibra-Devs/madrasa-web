import React from 'react'
import { Play, Star, Users, BookOpen } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#0a5c36]/10 dark:bg-[#0a5c36]/20 text-[#0a5c36] px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-semibold">Trusted by 10,000+ Students</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Traditional Islamic
              <span className="text-[#0a5c36]"> Learning</span>
              <br />
              Meets Modern
              <span className="text-[#d4af37]"> Technology</span>
            </h1>
            
            <p className="text-xl text-secondary mb-8 max-w-2xl">
              Experience authentic Islamic education through our cutting-edge digital platform. 
              Learn Quran, Arabic, Fiqh, and more with qualified teachers from anywhere in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start Learning Free
              </button>
              <button className="flex items-center justify-center space-x-2 bg-section border border-color hover:border-[#0a5c36] text-secondary font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-[#0a5c36] mb-2">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-secondary text-sm">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-[#0a5c36] mb-2">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-secondary text-sm">Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-[#0a5c36] mb-2">
                  <Star className="h-5 w-5" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-secondary text-sm">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0a5c36] to-[#d4af37] rounded-2xl p-8 text-white transform rotate-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 transform -rotate-3 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-[#d4af37] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">Digital Madrasah</h3>
                    <p className="text-secondary">Your Gateway to Islamic Knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero