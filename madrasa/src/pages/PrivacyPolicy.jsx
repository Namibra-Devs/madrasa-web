import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@utils/animations';
import { Link } from 'react-router-dom';
import { useDarkMode } from '@hooks/useDarkMode';
import { 
  Shield, 
  Lock, 
  User, 
  Mail, 
  Globe, 
  Bell, 
  Settings, 
  Eye,
  UserCheck,
  BarChart3,
  ShieldCheck,
  ChevronLeft,
  Sparkles,
  FileText,
  CheckCircle
} from 'lucide-react';




const PrivacyPolicy = () => {

  const heroRef = React.useRef(null);
const [lockSidebar, setLockSidebar] = useState(false);

  const [isDark, toggleDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState(0);
  
  

  const sections = [
    {
      icon: FileText,
      title: 'Introduction',
      content: 'This privacy policy outlines how Digital Madrasah (the "App") collects, uses, and protects your personal information. We are committed to providing a safe and secure learning environment for all users, and we take your privacy seriously.'
    },
    {
      icon: User,
      title: 'Information We Collect',
      content: 'We collect different types of information depending on your interaction with the App:',
      points: [
        'Personal Information: This includes information that can be used to identify you directly, such as your name, email address, phone number, location, and profile picture.',
        'User Content: This includes any content you submit through the App, such as texts, videos, messages, and assignments.',
        'Usage Data: We automatically collect information about how you use the App, such as the features you access, the content you view, and the time you spend using the App.',
        'Device Information: We collect information about the device you use to access the App, such as the operating system, device model, and IP address.'
      ]
    },
    {
      icon: Bell,
      title: 'How We Use Your Information',
      content: 'We use your information to:',
      points: [
        'Provide and personalize the App\'s features and services.',
        'Send you important notifications and updates about the App.',
        'Communicate with you regarding your use of the App.',
        'Improve the App and develop new features.',
        'Comply with legal requirements.'
      ]
    },
    {
      icon: Globe,
      title: 'Sharing Your Information',
      content: 'We will not share your personal information with third parties except in the following circumstances:',
      points: [
        'With your consent: We will share your information with third parties if you give us your express consent to do so.',
        'With service providers: We may share your information with third-party service providers who help us operate the App, such as cloud storage providers and data analytics companies. These service providers are obligated to protect your information and only use it as instructed by us.',
        'For legal reasons: We may disclose your information if we are required to do so by law, such as in response to a court order or subpoena.'
      ]
    },
    {
      icon: Settings,
      title: 'Data Retention',
      content: 'We will retain your personal information for as long as it is necessary to provide you with the App\'s services and to comply with legal requirements. We will then delete your information in a secure manner.'
    },
    {
      icon: ShieldCheck,
      title: "Children's Privacy",
      content: 'The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us and we will delete it.'
    },
    {
      icon: Lock,
      title: 'Security',
      content: 'We have implemented appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security measures are perfect, and we cannot guarantee the absolute security of your information.'
    },
    {
      icon: Eye,
      title: 'Your Choices',
      content: 'You have the right to access, correct, delete, or restrict the processing of your personal information. You can also object to the processing of your personal information in certain circumstances. To exercise these rights, please contact us at info@digitalmadrasah.com'
    }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, index) => {
    e.preventDefault();
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

 // Replace the entire useEffect that handles the lockSidebar with this:
useEffect(() => {
  if (!heroRef.current) return;

  const handleScroll = () => {
    const hero = heroRef.current;
    const mainContent = document.querySelector('main');
    
    if (!hero || !mainContent) return;

    const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
    const mainBottom = mainContent.getBoundingClientRect().bottom + window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate if we should lock or unlock the sidebar
    const shouldLock = scrollPosition > heroBottom - 150;
    const shouldUnlock = scrollPosition + viewportHeight >= mainBottom;

    setLockSidebar(shouldLock && !shouldUnlock);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <section ref={heroRef} className="relative py-20">

          <div className={`absolute inset-0 transition-colors duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-primary-900/10 via-transparent to-emerald-900/5' 
              : 'bg-gradient-to-br from-primary-500/5 via-transparent to-emerald-500/5'
          }`}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-center max-w-4xl mx-auto"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 mt-15 rounded-full transition-colors duration-500 ${
                isDark 
                  ? 'bg-primary-900/20 text-primary-500' 
                  : 'bg-primary-100  text-primary-600'
              }`}>
                <Shield className="w-4 h-4" />
                Privacy & Security
              </div>
              
              <h1 className={`text-display text-4xl sm:text-5xl lg:text-6xl font-bold transition-colors duration-500 ${
                isDark ? '' : ''
              } mb-6`}>
                Privacy Policy
              </h1>
              
              <p className={`text-xl transition-colors duration-500 ${
                isDark ? '' : ''
              } mb-2 leading-relaxed`}>
                Your privacy matters to us. Learn how we protect your data and ensure a secure learning environment.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Main Content - SEPARATE from hero to avoid overflow issues */}
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <section className="py-9">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Column - Table of Contents (Hidden on mobile) */}
              <aside className="hidden lg:block lg:w-1/3">
                <div
    style={{
      position: lockSidebar ? 'fixed' : 'sticky',
      top: lockSidebar ? '150px' : '96px', // Different top values for fixed vs sticky
      width: lockSidebar ? 'calc(25% - 2rem)' : 'auto',
      left: lockSidebar ? 'calc(8.333% - 1rem)' : 'auto',
      transition: 'all 0.3s ease'
    }}
  >

                   <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`rounded-2xl p-6 shadow-sm transition-colors duration-500 ${
        isDark ? '' : ''
      }`}
      style={{
        width: '100%', 
        maxWidth: '350px' 
      }}
    >
                    <h3 className={`text-lg font-semibold transition-colors duration-500 ${
                      isDark ? '' : ''
                    } mb-4 flex items-center gap-2`}>
                      <Settings className="w-5 h-5 text-primary-500" />
                      Quick Navigation
                    </h3>
                    <nav className="space-y-2">
                      {sections.map((section, index) => (
                        <a
                          key={index}
                          href={`#section-${index}`}
                          onClick={(e) => handleNavClick(e, index)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-300 ${
                            activeSection === index
                              ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                              : 'hover:text-primary-400 dark:hover:text-primary-400'
                          }`}
                        >
                          <section.icon className="w-4 h-4" />
                          <span className="text-sm">{section.title}</span>
                        </a>
                      ))}
                    </nav>

                    <div className={`mt-8 pt-6 border-t transition-colors duration-100 ${
                      isDark ? '' : ''
                    }`}>
                      <h4 className={`text-sm font-semibold transition-colors duration-100 ${
                        isDark ? '' : ''
                      } mb-3`}>Need Help?</h4>
                      <p className={`text-sm transition-colors duration-500 ${
                        isDark ? '' : ''
                      } mb-4`}>
                        Have questions about our privacy policy?
                      </p>
                      <a
                        href="mailto:info@digitalmadrasah.com"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors duration-300 w-full justify-center text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        Contact Privacy Team
                      </a>
                    </div>
                  </motion.div>
                </div>
              </aside>

              {/* Right Column - Content */}
              <motion.main
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:w-2/3 space-y-12"
              >
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    id={`section-${index}`}
                    variants={fadeInUp}
                    className={`rounded-2xl p-8 shadow-sm transition-colors duration-500 ${
                      isDark ? '' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className={`text-2xl font-bold transition-colors duration-500 ${
                          isDark ? '' : ''
                        } mb-2`}>
                          {section.title}
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className={`transition-colors duration-500 ${
                        isDark ? '' : ''
                      } leading-relaxed`}>
                        {section.content}
                      </p>

                      {section.points && (
                        <ul className="space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className={`transition-colors duration-500 ${
                                isDark ? '' : ''
                              } leading-relaxed`}>
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Contact & Updates Section */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-gradient-to-r from-primary-500 to-emerald-600 rounded-2xl p-8 text-white"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Mail className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Contact Us & Updates</h2>
                      <div className="w-16 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Changes to This Policy</h3>
                      <p className="text-primary-100 leading-relaxed">
                        We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on the App. You are advised to review this privacy policy periodically for any changes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                      <div className="space-y-3">
                        <p className="text-primary-100">
                          If you have any questions about this privacy policy, please contact us at:
                        </p>
                        <div className="space-y-2">
                          <a 
                            href="mailto:info@digitalmadrasah.com" 
                            className="flex items-center gap-2 text-white hover:underline"
                          >
                            <Mail className="w-4 h-4" />
                            info@digitalmadrasah.com
                          </a>
                          <a 
                            href="mailto:sallam@digitalmadrasah.com" 
                            className="flex items-center gap-2 text-white hover:underline"
                          >
                            <Mail className="w-4 h-4" />
                            sallam@digitalmadrasah.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-primary-400/30">
                      <p className="text-sm text-primary-200 mt-2">
                        This privacy policy is intended to be a clear and concise overview of how we handle your information. If you have any questions, please don't hesitate to contact us.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.main>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;