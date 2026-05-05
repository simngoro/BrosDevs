'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const accents = ['#87d0c3', '#a6f77b', '#ffd93d'];
  const stepEmojis = ['💡', '📐', '🚀'];

  return (
    <section
      id="proceso"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] text-black overflow-hidden"
    >
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
              {t.howItWorks.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            {t.howItWorks.titleStart}
            <span className="italic font-light text-[#87d0c3]">
              {t.howItWorks.titleAccent}
            </span>
            {t.howItWorks.titleEnd}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl font-sans leading-relaxed mb-12 sm:mb-16"
          >
            {t.howItWorks.subtitle}
          </motion.p>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {t.howItWorks.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white border-2 border-black rounded-2xl p-6 sm:p-8 overflow-hidden ${
                  i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: accents[i] }} />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${accents[i]}25`, border: `1.5px solid ${accents[i]}` }}
                    >
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full animate-pulse" style={{ backgroundColor: accents[i] }} />
                    </div>
                    <span
                      className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] px-2 py-1 rounded border"
                      style={{
                        color: '#059669',
                        borderColor: '#10b98130',
                        backgroundColor: '#10b9810d',
                      }}
                    >
                      ● {t.howItWorks.activated}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How clients use it */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white border-2 border-black rounded-2xl p-6 sm:p-8 lg:p-12"
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 text-center">
              {t.howItWorks.stepsTitle}
            </h3>

            <div className="grid sm:grid-cols-3 gap-8">
              {t.howItWorks.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="relative text-center"
                >
                  {i < t.howItWorks.steps.length - 1 && (
                    <div className="hidden sm:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-black/30 to-transparent" />
                  )}

                  <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#87d0c3]/10 border-2 border-black mb-4 text-3xl sm:text-4xl">
                    {stepEmojis[i]}
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-black mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
