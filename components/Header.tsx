'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/85 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-[#87d0c3] rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(135,208,195,0.4)]">
              <span className="text-black font-black text-base sm:text-lg lg:text-xl tracking-tight font-sans">
                DB
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs sm:text-sm lg:text-base tracking-wider leading-tight font-sans">
                DEVBROS
              </span>
              <span className="text-[#87d0c3] font-mono text-[9px] sm:text-[10px] lg:text-xs leading-tight uppercase tracking-[0.2em]">
                {t.header.tagline}
              </span>
            </div>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300 font-sans">
            <a href="#proceso" className="hover:text-[#87d0c3] transition-colors">
              {t.header.nav.process}
            </a>
            <a href="#industrias" className="hover:text-[#87d0c3] transition-colors">
              {t.header.nav.industries}
            </a>
            <a href="#precios" className="hover:text-[#87d0c3] transition-colors">
              {t.header.nav.pricing}
            </a>
            <a href="#faq" className="hover:text-[#87d0c3] transition-colors">
              {t.header.nav.faq}
            </a>
            <a href="#contacto" className="hover:text-[#87d0c3] transition-colors">
              {t.header.nav.contact}
            </a>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle variant="dark" />

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-[#87d0c3] text-black font-bold text-xs lg:text-sm rounded-lg font-sans shadow-[0_0_20px_rgba(135,208,195,0.3)]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.header.cta}
              <svg
                className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-lg"
            >
              <div className="flex flex-col py-4 gap-1">
                {[
                  { href: '#proceso', label: t.header.nav.process },
                  { href: '#industrias', label: t.header.nav.industries },
                  { href: '#precios', label: t.header.nav.pricing },
                  { href: '#faq', label: t.header.nav.faq },
                  { href: '#contacto', label: t.header.nav.contact },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-2 py-3 text-white font-medium hover:text-[#87d0c3] hover:bg-white/5 rounded-lg transition-colors text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#87d0c3] text-black font-bold text-sm rounded-lg font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
