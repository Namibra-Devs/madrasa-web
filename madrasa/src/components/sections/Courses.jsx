// Courses.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@utils/animations";
import Button from "@components/ui/Button";
import {
  BookOpen,
  Landmark,
  Languages,
  Brain,
  Check,
  Star,
  Heart,
} from "lucide-react";

const Courses = () => {
  const [pricingView, setPricingView] = useState("A"); // A | B | C

  const courses = [
    {
      title: "Quran Reading & Tajweed",
      level: "Beginner to Advanced",
      duration: "6 Months",
      students: "2,500+",
      description:
        "Learn proper Quran recitation with Tajweed rules from qualified Qaris.",
      Icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Islamic Studies",
      level: "All Levels",
      duration: "12 Months",
      students: "1,800+",
      description:
        "Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, and more.",
      Icon: Landmark,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Arabic Language",
      level: "Beginner to Advanced",
      duration: "9 Months",
      students: "1,200+",
      description:
        "Master classical and modern Arabic for understanding Quran and Hadith.",
      Icon: Languages,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Quran Memorization",
      level: "Intermediate to Advanced",
      duration: "24 Months",
      students: "800+",
      description:
        "Structured program for memorizing the Holy Quran with understanding.",
      Icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Pricing plans data (used across views)
  const plans = {
    basic: {
      name: "Basic",
      price: "₵9",
      cadence: "/mo",
      bullets: ["Access to recorded lessons", "Community support"],
    },
    standard: {
      name: "Standard",
      price: "₵29",
      cadence: "/mo",
      bullets: [
        "Live weekly classes",
        "Recorded library",
        "Progress tracking",
        "Certificate",
      ],
    },
    premium: {
      name: "Premium",
      price: "₵79",
      cadence: "/mo",
      bullets: [
        "1-on-1 mentoring",
        "Priority scheduling",
        "Full course access",
        "Certificate & review",
      ],
    },
  };

  const comparisonRows = [
    { label: "Recorded lessons", basic: true, standard: true, premium: true },
    { label: "Live classes", basic: false, standard: true, premium: true },
    { label: "Progress tracking", basic: false, standard: true, premium: true },
    { label: "1-on-1 mentoring", basic: false, standard: false, premium: true },
    { label: "Certificate", basic: false, standard: true, premium: true },
  ];

  return (
    <section id="courses" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Our Courses
          </div>

          <h2 className="text-display text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Comprehensive Islamic Education
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Carefully designed tracks for meaningful progress — start with a foundation, grow into mastery.
          </p>
        </motion.div>

        {/* Courses: 4 across on large screens */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {courses.map((c, i) => (
            <motion.article
              key={c.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg"
            >
              {/* gradient strip */}
              <div className={`h-1 bg-gradient-to-r ${c.color}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br ${c.color}`}
                  >
                    <c.Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{c.duration}</div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{c.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Level</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{c.level}</div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Students</div>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400">{c.students}</div>
                </div>

                <Button onClick={() => alert(`Enrolling in ${c.title}`)} className="w-full">
                  Enroll Now
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Courses;
