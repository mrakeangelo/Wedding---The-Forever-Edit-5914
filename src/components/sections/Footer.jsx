import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHeart, FiInstagram, FiTwitter, FiMail, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Couple Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">ALEX & JORDAN</h3>
            <p className="text-gray-400 mb-4">
              Thank you for being part of our love story. We can't wait to celebrate with you!
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent-400">
              <SafeIcon icon={FiMapPin} />
              <span className="text-sm">Malibu, California</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-edit" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#wedding-info" className="hover:text-white transition-colors">
                  Wedding Details
                </a>
              </li>
              <li>
                <a href="#rsvp" className="hover:text-white transition-colors">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#guestbook" className="hover:text-white transition-colors">
                  Guestbook
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
              >
                <SafeIcon icon={FiInstagram} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
              >
                <SafeIcon icon={FiTwitter} />
              </motion.a>
              <motion.a
                href="mailto:alexandjordan@wedding.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
              >
                <SafeIcon icon={FiMail} />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">
              Questions? Email us at<br />
              <a href="mailto:alexandjordan@wedding.com" className="text-accent-400 hover:text-accent-300">
                alexandjordan@wedding.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Wedding Hashtag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center py-8 border-t border-gray-800"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-6 py-3 mb-4">
            <span className="text-2xl">💕</span>
            <span className="font-mono text-lg">#AlexAndJordanForever</span>
          </div>
          <p className="text-gray-400 text-sm">
            Share your photos and memories with our wedding hashtag
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <SafeIcon icon={FiHeart} />
              </motion.div>
              <span>for our special day</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Alex & Jordan. All rights reserved.
            </div>
          </div>
          
          {/* Mrake Attribution */}
          <div className="mt-8 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              <span className="font-bold">The Forever Edit</span> – A Social Wedding Template by{' '}
              <span className="text-accent-400 font-bold">Mrake Agency</span>
            </p>
          </div>
        </motion.div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                rotate: [0, Math.random() * 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;