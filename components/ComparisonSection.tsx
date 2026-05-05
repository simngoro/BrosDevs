'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function ComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] text-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#87d0c3]" />
            <span className="font-mono text-xs sm:text-sm text-black uppercase tracking-[0.3em]">
              {t.comparison.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            {t.comparison.titleStart}
            <span className="italic font-light text-gray-400">{t.comparison.titleVs}</span>
            <span className="text-[#0a0a0a]">{t.comparison.titleEnd}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-sans leading-relaxed mb-12 sm:mb-16"
          >
            {t.comparison.subtitle}
          </motion.p>

          {/* Comparison grid */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 lg:gap-4 items-center">
            {/* OLD WAY */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-white border-2 border-black rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] mb-3 sm:mb-4">
                {t.comparison.oldLabel}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8">
                {t.comparison.oldTitle}
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="border border-gray-200 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{t.comparison.oldStats.time}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">{t.comparison.oldStats.timeLabel}</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{t.comparison.oldStats.cost}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">{t.comparison.oldStats.costLabel}</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{t.comparison.oldStats.delays}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-1">{t.comparison.oldStats.delaysLabel}</div>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-3 sm:space-y-4">
                {t.comparison.oldList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 font-sans text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* VS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center font-serif font-bold text-lg sm:text-xl italic">
                VS
              </div>
            </motion.div>

            {/* NEW WAY */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#0a0a0a] text-white border-2 border-black rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(135,208,195,0.25)]"
            >
              <div className="absolute -top-3 -right-2 sm:-right-3 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase bg-[#87d0c3] text-black px-2 py-1 rounded">
                {t.comparison.newLabel}
              </div>

              <div className="font-mono text-[10px] sm:text-xs text-[#87d0c3] uppercase tracking-[0.3em] mb-3 sm:mb-4">
                {t.comparison.newSubtitle}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
                {t.comparison.newTitle}
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="border border-white/10 rounded-lg p-2 sm:p-3 text-center bg-white/[0.02]">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#87d0c3]">{t.comparison.newStats.time}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{t.comparison.newStats.timeLabel}</div>
                </div>
                <div className="border border-white/10 rounded-lg p-2 sm:p-3 text-center bg-white/[0.02]">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#87d0c3]">{t.comparison.newStats.cost}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{t.comparison.newStats.costLabel}</div>
                </div>
                <div className="border border-white/10 rounded-lg p-2 sm:p-3 text-center bg-white/[0.02]">
                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#87d0c3]">{t.comparison.newStats.delivery}</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">{t.comparison.newStats.deliveryLabel}</div>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-3 sm:space-y-4">
                {t.comparison.newList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-200 font-sans text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#87d0c3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 text-center font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em]"
          >
            {t.comparison.footer}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
