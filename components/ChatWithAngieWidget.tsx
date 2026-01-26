'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ChatWithAngieWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 w-80 max-w-[calc(100vw-4rem)]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="bg-white border-2 border-black rounded-lg p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4">
          <p className="text-sm text-[#4a4a4a] mb-1">Chat with</p>
          <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Angie</h3>
        </div>

        {/* Illustration */}
        <div className="relative mb-4 h-32 bg-[#f5f5f5] rounded-lg flex items-center justify-center overflow-hidden">
          {/* Simple illustration of Angie */}
          <svg viewBox="0 0 200 150" className="w-full h-full">
            {/* Background shelves */}
            <rect x="20" y="80" width="30" height="3" fill="#1a1a1a" />
            <rect x="20" y="90" width="30" height="3" fill="#1a1a1a" />
            <rect x="150" y="80" width="30" height="3" fill="#1a1a1a" />
            <rect x="150" y="90" width="30" height="3" fill="#1a1a1a" />
            
            {/* Plant */}
            <circle cx="35" cy="100" r="8" fill="#4a7c59" />
            <line x1="35" y1="100" x2="35" y2="110" stroke="#4a7c59" strokeWidth="2" />
            
            {/* Angie - simplified illustration */}
            <circle cx="100" cy="70" r="20" fill="#fdbcb4" stroke="#1a1a1a" strokeWidth="2" />
            <ellipse cx="100" cy="100" rx="25" ry="30" fill="#ffb6c1" stroke="#1a1a1a" strokeWidth="2" />
            <path d="M85,70 Q100,65 115,70" stroke="#1a1a1a" strokeWidth="2" fill="none" />
            <circle cx="95" cy="68" r="2" fill="#1a1a1a" />
            <circle cx="105" cy="68" r="2" fill="#1a1a1a" />
            {/* Waving hand */}
            <motion.path
              d="M120,85 Q125,80 130,85 Q125,90 120,85"
              fill="#fdbcb4"
              stroke="#1a1a1a"
              strokeWidth="2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Message */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-[#f5f5f5] rounded-lg border border-[#1a1a1a]"
          >
            <p className="text-sm text-[#1a1a1a]">
              ¡Hola! Estoy aquí para ayudarte.
            </p>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold text-center hover:bg-[#7bc4b5] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(true)}
        >
          Let&apos;s Chat!
        </motion.a>
      </div>
    </motion.div>
  );
}
