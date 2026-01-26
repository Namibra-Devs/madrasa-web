import React from 'react';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import CEOMessage from '@components/sections/CEOMessage';
import Features from '@components/sections/Features';
import Courses from '@components/sections/Courses';
import Testimonials from '@components/sections/Testimonials';
import FAQ from '@components/sections/FAQ';
import Contact from '@components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CEOMessage />
      <Features />
      <Courses />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;