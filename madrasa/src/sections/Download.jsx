import React from 'react'
import { Smartphone, Download as DownloadIcon, Apple, Play } from 'lucide-react'

const Download = () => {
  const handleGetApp = () => {
    // In a real application, this would redirect to app stores
    alert('Redirecting to app store...')
  }

  return (
    <section id="download" className="section-padding bg-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Download Our <span className="text-[#0a5c36]">Mobile App</span>
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl">
              Take your Islamic learning journey with you wherever you go. 
              Access all courses, track your progress, and learn on-the-go with our mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={handleGetApp}
                className="flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
              
              <button 
                onClick={handleGetApp}
                className="flex items-center justify-center space-x-3 bg-[#0a5c36] hover:bg-[#0a5c36]/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Play className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-secondary">
              <div className="flex items-center space-x-2">
                <DownloadIcon className="h-5 w-5 text-[#0a5c36]" />
                <span>Free Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-[#0a5c36]" />
                <span>iOS & Android</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-[3rem] p-4 w-64 mx-auto border-[6px] border-gray-800 shadow-2xl">
                <div className="bg-gradient-to-br from-[#0a5c36] to-[#d4af37] rounded-[2rem] h-96 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Smartphone className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Digital Madrasah</h3>
                    <p className="text-white/80">Your Islamic Learning Companion</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#d4af37] text-[#0a5c36] p-3 rounded-full shadow-lg">
                <DownloadIcon className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0a5c36] text-white p-3 rounded-full shadow-lg">
                <Play className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download