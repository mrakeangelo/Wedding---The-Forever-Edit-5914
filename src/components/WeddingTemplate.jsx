import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import OurEditSection from './sections/OurEditSection';
import WeddingInfoSection from './sections/WeddingInfoSection';
import GallerySection from './sections/GallerySection';
import RSVPSection from './sections/RSVPSection';
import GuestbookSection from './sections/GuestbookSection';
import CountdownWidget from './widgets/CountdownWidget';
import ThemeToggle from './ui/ThemeToggle';
import FloatingNav from './ui/FloatingNav';
import Footer from './sections/Footer';

const WeddingTemplate = ({ isDarkMode, toggleTheme, isPreview }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'our-edit', 'wedding-info', 'gallery', 'rsvp', 'guestbook'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Floating Navigation */}
      <FloatingNav 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
      />

      {/* Countdown Widget */}
      {showCountdown && (
        <CountdownWidget 
          targetDate="2024-08-15T16:00:00" 
          onClose={() => setShowCountdown(false)}
        />
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection id="hero" />
        <OurEditSection id="our-edit" />
        <WeddingInfoSection id="wedding-info" />
        <GallerySection id="gallery" />
        <RSVPSection id="rsvp" />
        <GuestbookSection id="guestbook" />
        <Footer />
      </motion.div>
    </div>
  );
};

export default WeddingTemplate;