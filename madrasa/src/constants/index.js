import { 
  Home, 
  Info, 
  Star, 
  BookOpen, 
  Users, 
  HelpCircle, 
  Phone,
  GraduationCap,
  UserCheck,
  Clock,
  BarChart3,
  Book,
  Landmark,
  Brain,
  ScrollText,
  Users2,
  Library,
  Video,
  ShieldCheck // New icon for Audited Courses
} from "lucide-react";

// ✅ Navigation Links (already correct)
export const NAV_LINKS = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Features", href: "#features", icon: Star },
  { name: "Courses", href: "#courses", icon: BookOpen },
  { name: "Testimonials", href: "#testimonials", icon: Users },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
  { name: "Contact", href: "#contact", icon: Phone },
];

// ✅ FEATURES — Updated with 6 features: 3 top, 3 down
export const FEATURES = [
  // First row (top 3)
  {
    title: 'Interactive Lessons',
    description: 'Engaging multimedia content with quizzes, simulations, and interactive exercises',
    icon: GraduationCap,
  },
  {
    title: 'Qualified Teachers',
    description: 'Learn from certified Islamic scholars, Hafiz, and experienced educators',
    icon: UserCheck,
  },
  {
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with 24/7 access to course materials and recordings',
    icon: Clock,
  },
  
  // Second row (bottom 3)
  {
    title: 'Live Sessions',
    description: 'Real-time interactive classes with Q&A, group discussions, and direct teacher feedback',
    icon: Video,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed progress reports and personalized insights',
    icon: BarChart3,
  },
  {
    title: 'Audited Courses',
    description: 'All curriculum reviewed and approved by senior Islamic scholars for authenticity',
    icon: ShieldCheck,
  },
];

// ✅ FAQ stays the same (no icons needed)
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

// ✅ COURSES — replaced emojis with Lucide icons
export const COURSES = [
  {
    title: 'Quran Reading & Tajweed',
    level: 'Beginner to Advanced',
    duration: '6 Months',
    students: '2,500+',
    description: 'Learn proper Quran recitation with Tajweed rules from qualified Qaris.',
    icon: Book, 
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Islamic Studies',
    level: 'All Levels',
    duration: '12 Months',
    students: '1,800+',
    description: 'Comprehensive Islamic education covering Aqeedah, Fiqh, Seerah, and more.',
    icon: Landmark,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Arabic Language',
    level: 'Beginner to Advanced',
    duration: '9 Months',
    students: '1,200+',
    description: 'Master classical and modern Arabic for understanding Quran and Hadith.',
    icon: Library,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Quran Memorization',
    level: 'Intermediate to Advanced',
    duration: '24 Months',
    students: '800+',
    description: 'Structured program for memorizing the Holy Quran with understanding.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Islamic History',
    level: 'All Levels',
    duration: '4 Months',
    students: '950+',
    description: 'Explore the rich history of Islam and Muslim civilizations.',
    icon: ScrollText,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Youth Programs',
    level: 'Kids & Teens',
    duration: 'Ongoing',
    students: '1,500+',
    description: 'Age-appropriate Islamic education for children and teenagers.',
    icon: Users2,
    color: 'from-indigo-500 to-blue-500',
  },
];