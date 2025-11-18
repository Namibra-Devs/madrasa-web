import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@utils/animations";
import Button from "@components/ui/Button";
import { useDarkMode } from "@hooks/useDarkMode";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode(); // Using the existing hook
  const videoRef = useRef(null);

  const handleGetApp = () => {
    alert("Redirecting to app store...");
  };

  const handleExploreCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[calc(var(--vh)*100)] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Fallback - Theme Aware */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video Background - Only show in dark mode or based on preference */}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(false)}
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Always-visible dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Fallback Background if video fails or in light mode */}
        {(!isVideoLoaded || !isDark) && (
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "" : ""
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        )}
      </div>

      {/* Main Content - Theme Aware Colors */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 top-15">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`text-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl transition-colors duration-500 ${
              isDark ? "text-white" : "text-white"
            }`}
          >
            Learn{" "}
            <motion.span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                isDark
                  ? "from-green-500 to-emerald-800"
                  : "from-primary-600 to-emerald-700"
              }`}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Quran & Arabic
            </motion.span>
            <br />
            with Certified Scholars
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`text-xl lg:text-2xl mb-8 max-w-4xl leading-relaxed font-light transition-colors duration-500 ${
              isDark ? "text-white" : "text-white"
            }`}
          >
            Join <strong className={isDark ? "" : ""}>Digital Madrasah</strong>{" "}
            - Where traditional
            <span
              className={`arabic-text font-semibold mx-2 ${
                isDark ? "text-emerald-600" : "text-primary-600"
              }`}
            >
              مدرسة
            </span>
            education meets cutting-edge technology. Study with qualified
            teachers from anywhere in the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={handleGetApp}
              className={`hover:scale-105 transform transition-all duration-300 shadow-2xl border-0 rounded-2xl px-8 py-4 font-bold text-lg group ${
                isDark
                  ? "bg-white text-primary-600 hover:bg-gray-100"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
            >
              <span className="flex items-center gap-3">
                Start Free Trial
                <motion.svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleExploreCourses}
              className={`rounded-2xl px-8 py-4 font-semibold text-lg backdrop-blur-sm hover:scale-105 transform transition-all duration-300 ${
                isDark
                  ? "border-2 border-white text-white hover:bg-white hover:text-primary-600"
                  : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
              }`}
            >
              Explore Courses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
