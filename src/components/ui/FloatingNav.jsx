import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiHeart, FiInfo, FiCamera, FiMail, FiMessageCircle, FiMenu, FiX } = FiIcons;

const navItems = [
  { id: 'hero', label: 'Home', icon: FiHome },
  { id: 'our-edit', label: 'Story', icon: FiHeart },
  { id: 'wedding-info', label: 'Details', icon: FiInfo },
  { id: 'gallery', label: 'Gallery', icon: FiCamera },
  { id: 'rsvp', label: 'RSVP', icon: FiMail },
  { id: 'guestbook', label: 'Messages', icon: FiMessageCircle },
];

const FloatingNav = ({ activeSection, scrollToSection, isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-2"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsExpanded(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-lg border transition-all backdrop-blur-sm ${
                  activeSection === item.id
                    ? 'bg-accent-500 text-white border-accent-400 shadow-accent-500/25'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                <span className="font-medium text-sm whitespace-nowrap">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-full shadow-lg flex items-center justify-center border-2 border-white/20"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SafeIcon icon={isExpanded ? FiX : FiMenu} className="text-xl" />
        </motion.div>
      </motion.button>

      {/* Floating Indicator */}
      <motion.div
        className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        6
      </motion.div>
    </div>
  );
};

export default FloatingNav;