import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX, FiHeart } = FiIcons;

const CountdownWidget = ({ targetDate, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-2xl p-4 shadow-2xl border border-white/20 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <SafeIcon icon={FiHeart} className="text-lg" />
                </motion.div>
                <span className="font-mono text-sm font-bold">LIVE</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <SafeIcon icon={FiX} className="text-sm" />
              </motion.button>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg mb-3">Wedding Countdown</h3>

            {/* Countdown Display */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HRS' },
                { value: timeLeft.minutes, label: 'MIN' },
                { value: timeLeft.seconds, label: 'SEC' }
              ].map((unit, index) => (
                <motion.div
                  key={unit.label}
                  animate={{ scale: unit.label === 'SEC' ? [1, 1.05, 1] : 1 }}
                  transition={{ duration: 1, repeat: unit.label === 'SEC' ? Infinity : 0 }}
                  className="text-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mb-1">
                    <motion.span
                      key={unit.value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-xl font-bold font-mono"
                    >
                      {unit.value.toString().padStart(2, '0')}
                    </motion.span>
                  </div>
                  <span className="text-xs font-mono opacity-80">{unit.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <p className="text-center text-sm opacity-90 font-mono">
              Until we say "I do!" 💕
            </p>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"
              animate={{
                borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Floating Hearts */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/20 text-sm"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  💕
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountdownWidget;