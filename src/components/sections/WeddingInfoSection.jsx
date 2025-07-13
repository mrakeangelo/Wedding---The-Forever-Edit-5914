import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiCalendar, FiClock, FiHeart, FiUsers, FiCamera } = FiIcons;

const weddingInfo = [
  {
    id: 'when',
    icon: FiCalendar,
    title: 'WHEN',
    primary: 'August 15, 2024',
    secondary: '4:00 PM',
    emoji: '📅',
    color: 'from-accent-400 to-accent-600'
  },
  {
    id: 'where',
    icon: FiMapPin,
    title: 'WHERE',
    primary: 'Sunset Garden Venue',
    secondary: 'Malibu, California',
    emoji: '🏖️',
    color: 'from-primary-400 to-primary-600'
  },
  {
    id: 'dress',
    icon: FiHeart,
    title: 'DRESS CODE',
    primary: 'Garden Party Chic',
    secondary: 'Think florals & pastels',
    emoji: '👗',
    color: 'from-peach-400 to-peach-600'
  },
  {
    id: 'rsvp',
    icon: FiUsers,
    title: 'RSVP',
    primary: 'By July 1st',
    secondary: 'Can\'t wait to party!',
    emoji: '💌',
    color: 'from-lavender-400 to-lavender-600'
  }
];

const WeddingInfoSection = ({ id }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id={id} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-condensed font-black text-gray-900 dark:text-white mb-4">
            THE DETAILS
          </h2>
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            Everything you need to know
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingInfo.map((info, index) => (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveCard(info.id)}
              onHoverEnd={() => setActiveCard(null)}
              className="group cursor-pointer"
            >
              <div className={`
                relative h-64 rounded-2xl overflow-hidden shadow-lg
                bg-gradient-to-br ${info.color}
                transform transition-all duration-300
                ${activeCard === info.id ? 'shadow-2xl' : ''}
              `}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ rotate: activeCard === info.id ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl"
                    >
                      {info.emoji}
                    </motion.div>
                    <motion.div
                      animate={{ scale: activeCard === info.id ? 1.2 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SafeIcon icon={info.icon} className="text-2xl" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="text-center">
                    <h3 className="font-mono text-sm font-bold mb-2 tracking-wider">
                      {info.title}
                    </h3>
                    <p className="text-xl font-bold mb-1">
                      {info.primary}
                    </p>
                    <p className="text-sm opacity-90">
                      {info.secondary}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                    animate={{
                      borderColor: activeCard === info.id 
                        ? 'rgba(255,255,255,0.8)' 
                        : 'rgba(255,255,255,0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💕 Special Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  🚗 Getting There
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Valet parking available. Rideshare drop-off at main entrance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  📱 Share the Love
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Use #AlexAndJordanForever for all your posts!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  🎁 Gifts
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Your presence is the only present we need!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  🌿 Eco-Friendly
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  This is a green wedding - digital invites only!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfoSection;