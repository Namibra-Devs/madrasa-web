import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@utils/animations";
import { FEATURES } from "@constants";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  UserPlus,
  Target,
  Users,
  Rocket,
  CheckCircle,
  Clock,
  Star,
  Award,
} from "lucide-react";

const stepVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.8,
    },
  }),
};

const Features = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up in 30 seconds and tell us about your learning goals and schedule preferences.",
      icon: UserPlus,
      color: "from-green-400 to-green-900",
      stats: "30-second setup",
    },
    {
      number: "02",
      title: "Choose Your Path",
      description:
        "Select from Quran recitation, Arabic language, Islamic studies, or customized learning tracks.",
      icon: Target,
      color: "from-green-500 to-green-900",
      stats: "50+ courses available",
    },
    {
      number: "03",
      title: "Meet Your Teacher",
      description:
        "Get matched with certified Islamic scholars who specialize in your chosen subjects.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      stats: "100+ certified teachers",
    },
    {
      number: "04",
      title: "Start Learning",
      description:
        "Join interactive live classes or access recorded sessions with progress tracking and feedback.",
      icon: Rocket,
      color: "from-green-400 to-green-900",
      stats: "24/7 access",
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================
                SECTION TITLE
        ============================= */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 transition-colors duration-300">
            <Star className="w-4 h-4" />
            Why Choose Digital Madrasah
          </div>
          <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Modern Islamic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-600">
              {" "}
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where centuries of Islamic tradition meet cutting-edge technology
            for a transformative learning journey.
          </p>
        </motion.div>

        {/* ============================
               FEATURE CARDS - FIXED
        ============================= */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon; // Get the Lucide icon component
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ============================
               HOW IT WORKS SECTION
        ============================= */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Start Learning in 4 Simple Steps
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your journey to Islamic knowledge begins here. Simple, fast, and
              designed for modern learners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* ============================
                   LEFT: MODERN TIMELINE
            ============================= */}
            <div className="relative">
              {/* Vertical Connection Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary-500/30 via-primary-400/50 to-primary-500/30 dark:from-primary-400/20 dark:via-primary-300/30 dark:to-primary-400/20 rounded-full"></div>

              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={stepVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative flex items-start gap-6 p-6 rounded-3xl mb-8 group cursor-pointer transition-all duration-500 ${
                      currentStep === index
                        ? "bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 border-2 border-primary-200 dark:border-primary-700 shadow-xl scale-105"
                        : "bg-gray-50/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:scale-102"
                    }`}
                    onMouseEnter={() => setCurrentStep(index)}
                  >
                    {/* Step Number & Icon */}
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-md font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <div className="flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/40 rounded-full">
                          <Clock className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                          <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                            {step.stats}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Animated Checkmark for active step */}
                    {currentStep === index && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* ============================
                   RIGHT: MODERN VIDEO PLAYER
            ============================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Video */}
                <video
                  src="/videos/globe.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/images/video-poster.jpg"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content Below Video */}
              <div className="bg-white dark:bg-gray-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      See Digital Madrasah in Action
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Watch how thousands of students are transforming their
                      Islamic learning journey with our interactive platform,
                      qualified teachers, and flexible scheduling.
                    </p>
                   
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
