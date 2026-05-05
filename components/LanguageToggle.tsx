'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

interface LanguageToggleProps {
  variant?: 'dark' | 'light';
}

export default function LanguageToggle({ variant = 'dark' }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();

  const isLight = variant === 'light';

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 font-mono text-[10px] sm:text-xs ${
        isLight
          ? 'border-black/20 bg-white'
          : 'border-white/10 bg-white/[0.03] backdrop-blur-sm'
      }`}
      role="group"
      aria-label="Language selector"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocale('es')}
        className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors uppercase tracking-wider font-bold ${
          locale === 'es'
            ? isLight
              ? 'text-white'
              : 'text-black'
            : isLight
            ? 'text-black/60'
            : 'text-gray-400'
        }`}
        aria-pressed={locale === 'es'}
      >
        {locale === 'es' && (
          <motion.span
            layoutId="lang-pill"
            className={`absolute inset-0 rounded-full ${
              isLight ? 'bg-black' : 'bg-[#87d0c3]'
            }`}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative">ES</span>
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocale('en')}
        className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors uppercase tracking-wider font-bold ${
          locale === 'en'
            ? isLight
              ? 'text-white'
              : 'text-black'
            : isLight
            ? 'text-black/60'
            : 'text-gray-400'
        }`}
        aria-pressed={locale === 'en'}
      >
        {locale === 'en' && (
          <motion.span
            layoutId="lang-pill"
            className={`absolute inset-0 rounded-full ${
              isLight ? 'bg-black' : 'bg-[#87d0c3]'
            }`}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative">EN</span>
      </motion.button>
    </div>
  );
}
