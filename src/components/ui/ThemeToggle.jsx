import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 left-4 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="relative bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full p-3 border border-white/20 dark:border-gray-700 shadow-lg"
      >
        <motion.div
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-yellow-400"
              >
                <SafeIcon icon={FiMoon} className="text-xl" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-yellow-500"
              >
                <SafeIcon icon={FiSun} className="text-xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Label */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-mono text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full">
            {isDarkMode ? 'NIGHT MODE' : 'STUDIO MODE'}
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;