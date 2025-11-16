import { Home, Info, Star, BookOpen, Users, HelpCircle, Phone } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Features", href: "#features", icon: Star },
  { name: "Courses", href: "#courses", icon: BookOpen },
  { name: "Testimonials", href: "#testimonials", icon: Users },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  { name: "Contact", href: "#contact", icon: Phone },
];

export const FEATURES = [
  {
    title: 'Interactive Lessons',
    description: 'Engaging multimedia content with quizzes and interactive exercises',
    icon: '🎓',
  },
  {
    title: 'Qualified Teachers',
    description: 'Learn from certified Islamic scholars and experienced educators',
    icon: '👨‍🏫',
  },
  {
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with 24/7 access to course materials',
    icon: '⏰',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress reports',
    icon: '📊',
  },
];

export const FAQS = [
  {
    question: 'What age groups do you cater to?',
    answer: 'We offer courses for students of all ages, from young children to adults. Our curriculum is tailored to different age groups and learning levels.'
  },
  {
    question: 'Do I need any prior knowledge?',
    answer: 'No prior knowledge is required. We have courses for complete beginners as well as advanced learners.'
  },
  {
    question: 'How are the classes conducted?',
    answer: 'Classes are conducted through our interactive platform with live sessions, recorded lessons, and one-on-one mentoring.'
  },
  {
    question: 'Is the platform available on mobile?',
    answer: 'Yes! Our app is available on both iOS and Android devices for learning on the go.'
  }
];

export const COURSES = [
  {
    title: 'Quran Reading & Tajweed',
    level: 'Beginner to Advanced',
    duration: '6 Months',
    students: '2,500+',
    description: 'Learn proper Quran recitation with Tajweed rules from qualified Qaris.',
    icon: '📖',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Islamic Studies',
    level: 'All Levels',
    duration: '12 Months',
    students: '1,800+',
    description: 'Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, and more.',
    icon: '🕌',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Arabic Language',
    level: 'Beginner to Advanced',
    duration: '9 Months',
    students: '1,200+',
    description: 'Master classical and modern Arabic for understanding Quran and Hadith.',
    icon: '🈁',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Quran Memorization',
    level: 'Intermediate to Advanced',
    duration: '24 Months',
    students: '800+',
    description: 'Structured program for memorizing the Holy Quran with understanding.',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Islamic History',
    level: 'All Levels',
    duration: '4 Months',
    students: '950+',
    description: 'Explore the rich history of Islam and Muslim civilizations.',
    icon: '📜',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Youth Programs',
    level: 'Kids & Teens',
    duration: 'Ongoing',
    students: '1,500+',
    description: 'Age-appropriate Islamic education for children and teenagers.',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-indigo-500 to-blue-500',
  },
];