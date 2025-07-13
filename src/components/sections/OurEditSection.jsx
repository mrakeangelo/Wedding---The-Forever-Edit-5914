import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHeart, FiMapPin, FiCalendar, FiCamera, FiMusic } = FiIcons;

const timelineEvents = [
  {
    id: 1,
    emoji: '👋',
    title: 'First Met',
    date: '2019.03.15',
    description: 'Coffee shop accident turned into destiny',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop',
    tag: 'MEET_CUTE'
  },
  {
    id: 2,
    emoji: '💕',
    title: 'First Date',
    date: '2019.04.02',
    description: 'Rooftop dinner under the stars',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    tag: 'FIRST_DATE'
  },
  {
    id: 3,
    emoji: '🏠',
    title: 'Moved In',
    date: '2021.09.10',
    description: 'Our first apartment together',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    tag: 'MILESTONE'
  },
  {
    id: 4,
    emoji: '💍',
    title: 'The Proposal',
    date: '2023.12.24',
    description: 'Christmas morning surprise',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop',
    tag: 'PROPOSAL'
  },
  {
    id: 5,
    emoji: '💒',
    title: 'Wedding Day',
    date: '2024.08.15',
    description: 'Forever starts here',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    tag: 'WEDDING'
  }
];

const OurEditSection = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const filters = ['ALL', 'MEET_CUTE', 'FIRST_DATE', 'MILESTONE', 'PROPOSAL', 'WEDDING'];

  const filteredEvents = activeFilter === 'ALL' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.tag === activeFilter);

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-condensed font-black text-gray-900 dark:text-white mb-4">
            OUR EDIT
          </h2>
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            The story behind the love
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.replace('_', ' ')}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-300 to-accent-500 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Content */}
                <div className="w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{event.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
                          {event.date}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    animate={{
                      scale: hoveredEvent === event.id ? 1.2 : 1,
                      rotate: hoveredEvent === event.id ? 180 : 0,
                    }}
                    className="w-6 h-6 bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  />
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <SafeIcon icon={FiHeart} />
            Add Your Memory
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurEditSection;