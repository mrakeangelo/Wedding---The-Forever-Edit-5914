import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiX, FiChevronLeft, FiChevronRight, FiHeart, FiShare2 } = FiIcons;

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop',
    title: 'The Proposal',
    likes: 234,
    category: 'engagement'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=400&fit=crop',
    title: 'First Dance Practice',
    likes: 189,
    category: 'moments'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop',
    title: 'Venue Visit',
    likes: 156,
    category: 'planning'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=400&fit=crop',
    title: 'Date Night',
    likes: 298,
    category: 'moments'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop',
    title: 'Ring Shopping',
    likes: 167,
    category: 'engagement'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=400&fit=crop',
    title: 'Sunset Shoot',
    likes: 342,
    category: 'engagement'
  }
];

const categories = ['all', 'engagement', 'moments', 'planning'];

const GallerySection = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedItems, setLikedItems] = useState(new Set());

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleLike = (itemId) => {
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId);
    } else {
      newLikedItems.add(itemId);
    }
    setLikedItems(newLikedItems);
  };

  const openLightbox = (item) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-condensed font-black text-gray-900 dark:text-white mb-4">
            PHOTO DUMP
          </h2>
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            Our favorite moments captured
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-mono text-sm capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.type === 'video' && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <SafeIcon icon={FiPlay} className="text-2xl text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{item.title}</span>
                      <div className="flex items-center gap-1">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(item.id);
                          }}
                          className={`p-1 ${likedItems.has(item.id) ? 'text-red-500' : 'text-white'}`}
                        >
                          <SafeIcon icon={FiHeart} className="text-sm" />
                        </motion.button>
                        <span className="text-xs">{item.likes + (likedItems.has(item.id) ? 1 : 0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(selectedItem.id)}
                    className={`p-2 rounded-full backdrop-blur-sm ${
                      likedItems.has(selectedItem.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    <SafeIcon icon={FiHeart} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                  >
                    <SafeIcon icon={FiShare2} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeLightbox}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                  >
                    <SafeIcon icon={FiX} />
                  </motion.button>
                </div>

                {/* Navigation */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  <SafeIcon icon={FiChevronLeft} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  <SafeIcon icon={FiChevronRight} />
                </motion.button>

                {/* Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm opacity-80">
                      {selectedItem.likes + (likedItems.has(selectedItem.id) ? 1 : 0)} likes
                    </span>
                    <span className="text-sm opacity-80 capitalize">
                      #{selectedItem.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;