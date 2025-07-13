import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHeart, FiMessageCircle, FiMic, FiSend, FiUser, FiThumbsUp } = FiIcons;

const initialMessages = [
  {
    id: 1,
    name: 'Sarah M.',
    message: 'So excited for you two! Can\'t wait to celebrate! 💕',
    type: 'text',
    timestamp: '2 hours ago',
    likes: 12,
    emoji: '💕'
  },
  {
    id: 2,
    name: 'Mike & Emma',
    message: 'You guys are perfect together! Here\'s to your forever! 🥂',
    type: 'text',
    timestamp: '5 hours ago',
    likes: 8,
    emoji: '🥂'
  },
  {
    id: 3,
    name: 'Mom & Dad',
    message: 'Voice message: "We are so proud of you both and can\'t wait to see you tie the knot!"',
    type: 'audio',
    timestamp: '1 day ago',
    likes: 25,
    emoji: '👨‍👩‍👧‍👦'
  }
];

const emojiReactions = ['💕', '🥳', '😍', '🔥', '👏', '🥂', '💍', '✨'];

const GuestbookSection = ({ id }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [guestName, setGuestName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💕');
  const [isRecording, setIsRecording] = useState(false);
  const [messageType, setMessageType] = useState('text');
  const [likedMessages, setLikedMessages] = useState(new Set());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !guestName.trim()) return;

    const message = {
      id: messages.length + 1,
      name: guestName,
      message: newMessage,
      type: messageType,
      timestamp: 'Just now',
      likes: 0,
      emoji: selectedEmoji
    };

    setMessages([message, ...messages]);
    setNewMessage('');
    setGuestName('');
  };

  const handleLike = (messageId) => {
    const newLikedMessages = new Set(likedMessages);
    if (newLikedMessages.has(messageId)) {
      newLikedMessages.delete(messageId);
    } else {
      newLikedMessages.add(messageId);
    }
    setLikedMessages(newLikedMessages);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    setMessageType(isRecording ? 'text' : 'audio');
  };

  return (
    <section id={id} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-condensed font-black text-gray-900 dark:text-white mb-4">
            GUESTBOOK
          </h2>
          <p className="text-lg font-mono text-gray-600 dark:text-gray-400">
            Drop a voice memo or DM us your love
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pick an Emoji
                </label>
                <div className="flex gap-2">
                  {emojiReactions.map((emoji) => (
                    <motion.button
                      key={emoji}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-xl transition-all ${
                        selectedEmoji === emoji
                          ? 'border-accent-500 bg-accent-50 dark:bg-accent-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <div className="flex gap-2">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMessageType('text')}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      messageType === 'text'
                        ? 'bg-accent-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <SafeIcon icon={FiMessageCircle} className="mr-1" />
                    Text
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleRecording}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      messageType === 'audio'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <SafeIcon icon={FiMic} className="mr-1" />
                    {isRecording ? 'Recording...' : 'Voice'}
                  </motion.button>
                </div>
              </div>
              
              {messageType === 'text' ? (
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  rows="4"
                  placeholder="Share your love, excitement, or well wishes..."
                  required
                />
              ) : (
                <div className="w-full p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-center">
                  <motion.div
                    animate={{ scale: isRecording ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 1, repeat: isRecording ? Infinity : 0 }}
                    className="text-4xl text-red-500 mb-4"
                  >
                    <SafeIcon icon={FiMic} />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {isRecording ? 'Recording your message...' : 'Click the mic button to start recording'}
                  </p>
                  {isRecording && (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsRecording(false);
                        setNewMessage('Voice message recorded successfully!');
                      }}
                      className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full"
                    >
                      Stop Recording
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-accent-500 to-primary-500 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2"
            >
              <SafeIcon icon={FiSend} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Messages List */}
        <div className="space-y-6">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full flex items-center justify-center text-white font-bold">
                    {message.emoji}
                  </div>

                  {/* Message Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {message.name}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {message.timestamp}
                      </span>
                      {message.type === 'audio' && (
                        <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-1 rounded-full text-xs">
                          <SafeIcon icon={FiMic} className="mr-1" />
                          Audio
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {message.message}
                    </p>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLike(message.id)}
                        className={`flex items-center gap-1 text-sm transition-colors ${
                          likedMessages.has(message.id)
                            ? 'text-red-500'
                            : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <SafeIcon icon={FiThumbsUp} />
                        {message.likes + (likedMessages.has(message.id) ? 1 : 0)}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-accent-500"
                      >
                        <SafeIcon icon={FiMessageCircle} />
                        Reply
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Load More Messages
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestbookSection;