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

        {/* Pricing selector (preview all 3 variants) */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="text-sm text-gray-500 dark:text-gray-300">Pricing view</div>
          <div className="inline-flex gap-2 bg-white/60 dark:bg-gray-800/40 p-1 rounded-full border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setPricingView("A")}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${pricingView === "A" ? "bg-primary-600 text-white shadow" : "text-gray-600 dark:text-gray-300"}`}
            >
              A
            </button>
            <button
              onClick={() => setPricingView("B")}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${pricingView === "B" ? "bg-primary-600 text-white shadow" : "text-gray-600 dark:text-gray-300"}`}
            >
              B
            </button>
            <button
              onClick={() => setPricingView("C")}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${pricingView === "C" ? "bg-primary-600 text-white shadow" : "text-gray-600 dark:text-gray-300"}`}
            >
              C
            </button>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="mb-20">
          {/* A: Three-Tier Pricing */}
          {pricingView === "A" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            >
              {/* Basic */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">Basic</div>
                  <Star className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-3xl font-bold mb-4">
                  ₵9 <span className="text-sm text-gray-500">/mo</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>Recorded lessons</li>
                  <li>Community support</li>
                </ul>
                <Button className="mt-auto">Choose Basic</Button>
              </div>

              {/* Standard - highlighted */}
              <div className="rounded-3xl border-2 border-primary-600 shadow-2xl bg-gradient-to-br from-primary-600 to-emerald-500 text-white p-8 transform scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">Standard</div>
                  <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Popular</div>
                </div>

                <div className="text-4xl font-extrabold mb-4">
                  ₵29 <span className="text-base font-medium">/mo</span>
                </div>

                <ul className="space-y-3 mb-6 text-sm">
                  <li>Live weekly classes</li>
                  <li>Recorded library</li>
                  <li>Progress tracking & certificate</li>
                </ul>

                <Button className="bg-white text-primary-600 mt-auto">Get Standard</Button>
              </div>

              {/* Premium */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">Premium</div>
                  <Heart className="w-5 h-5 text-pink-500" />
                </div>
                <div className="text-3xl font-bold mb-4">
                  ₵79 <span className="text-sm text-gray-500">/mo</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
                  <li>1-on-1 mentoring</li>
                  <li>Priority scheduling</li>
                  <li>Full course access</li>
                </ul>
                <Button className="mt-auto">Choose Premium</Button>
              </div>
            </motion.div>
          )}

          {/* B: Split-Screen Pricing */}
          {pricingView === "B" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
            >
              {/* Left gradient hero */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-primary-600 to-emerald-500 text-white flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-extrabold">Find your learning path</h3>
                  <p className="mt-3 text-sm text-white/90 max-w-md">
                    Pick a plan that suits your goals. Upgrade anytime to unlock more personalized features.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="text-sm font-semibold">Standard</div>
                    <div className="text-xl font-bold">₵29/mo</div>
                    <div className="text-xs mt-1">Most popular for regular learners</div>
                  </div>

                  <div className="bg-white/10 p-4 rounded-xl">
                    <div className="text-sm font-semibold">Premium</div>
                    <div className="text-xl font-bold">₵79/mo</div>
                    <div className="text-xs mt-1">For advanced, dedicated learners</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-white text-primary-600">Start Free Trial</Button>
                </div>
              </div>

              {/* Right: Pricing cards */}
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold">Basic</div>
                    <div className="text-2xl font-bold">₵9</div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Access recorded lessons and community</p>
                  <Button className="w-full">Choose Basic</Button>
                </div>

                <div className="rounded-3xl border-2 border-primary-600 p-6 bg-gradient-to-br from-primary-600 to-emerald-500 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold">Standard</div>
                    <div className="text-2xl font-bold">₵29</div>
                  </div>
                  <p className="text-sm mb-4">Live classes, recordings, tracking</p>
                  <Button className="bg-white text-primary-600 w-full">Get Standard</Button>
                </div>

                <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold">Premium</div>
                    <div className="text-2xl font-bold">₵79</div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">1-on-1 mentoring & priority scheduling</p>
                  <Button className="w-full">Choose Premium</Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* C: Minimal Modern Comparison Table */}
          {pricingView === "C" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="p-4 text-sm font-semibold">Features</th>
                      <th className="p-4 text-center">Basic</th>
                      <th className="p-4 text-center">Standard</th>
                      <th className="p-4 text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="p-4 text-sm text-gray-700 dark:text-gray-300">{row.label}</td>
                        <td className="p-4 text-center">
                          {row.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-sm text-gray-400">—</span>}
                        </td>
                        <td className="p-4 text-center">
                          {row.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-sm text-gray-400">—</span>}
                        </td>
                        <td className="p-4 text-center">
                          {row.premium ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-sm text-gray-400">—</span>}
                        </td>
                      </tr>
                    ))}

                    {/* Pricing row */}
                    <tr className="border-t border-gray-100 dark:border-gray-800">
                      <td className="p-4 text-sm font-semibold">Price</td>
                      <td className="p-4 text-center font-bold">₵9/mo</td>
                      <td className="p-4 text-center font-bold">₵29/mo</td>
                      <td className="p-4 text-center font-bold">₵79/mo</td>
                    </tr>

                    {/* CTA row */}
                    <tr>
                      <td className="p-6"></td>
                      <td className="p-6 text-center"><Button>Choose</Button></td>
                      <td className="p-6 text-center"><Button className="bg-primary-600 text-white">Choose</Button></td>
                      <td className="p-6 text-center"><Button>Choose</Button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
