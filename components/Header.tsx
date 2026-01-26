'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-black text-lg lg:text-xl">DB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-sm lg:text-base tracking-wide leading-tight font-sans uppercase">DEVBROS</span>
              <span className="text-black font-normal text-xs lg:text-sm leading-tight font-sans">DEVELOPMENT</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-black font-sans">
            <a href="#servicios" className="hover:opacity-70 transition-opacity">Servicios</a>
            <a href="#proyectos" className="hover:opacity-70 transition-opacity">Proyectos</a>
            <a href="#testimonios" className="hover:opacity-70 transition-opacity">Testimonios</a>
            <a href="#contacto" className="hover:opacity-70 transition-opacity">Contacto</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold text-sm hover:bg-[#7bc4b5] transition-colors font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hablar por WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.button
              className="w-10 h-10 bg-[#87d0c3] border-2 border-black rounded-full flex items-center justify-center hover:bg-[#7bc4b5] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-black font-bold text-lg">?</span>
            </motion.button>
            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t-2 border-black"
          >
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-black font-medium hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#proyectos" className="text-black font-medium hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
              <a href="#testimonios" className="text-black font-medium hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
              <a href="#contacto" className="text-black font-medium hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold text-sm font-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
