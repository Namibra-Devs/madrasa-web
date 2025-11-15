import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Courses from './sections/Courses'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Download from './sections/Download'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#fef9f0] to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Features />
        <Courses />
        <About />
        <Testimonials />
        <FAQ />
        <Download />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App