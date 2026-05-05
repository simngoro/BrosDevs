'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function ValuePropositionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] text-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-mono text-xs sm:text-sm text-black uppercase tracking-[0.3em] mb-4 sm:mb-6">
                {t.value.label}
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                {t.value.titleStart}
                <span className="italic font-light text-[#87d0c3]">
                  {t.value.titleAccent}
                </span>
                {t.value.titleEnd}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-end h-full"
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-sans leading-relaxed">
                {t.value.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.value.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-[#87d0c3] mb-3 sm:mb-4 leading-none">
                  {value.number}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
