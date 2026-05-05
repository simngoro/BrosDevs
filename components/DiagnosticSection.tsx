'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function DiagnosticSection() {
  const { t } = useLanguage();
  const problems = t.diagnostic.problems;

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs sm:text-sm text-[#87d0c3] uppercase tracking-[0.3em] mb-4 sm:mb-6"
          >
            {t.diagnostic.label}
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6 max-w-4xl"
          >
            {t.diagnostic.titleStart}
            <span className="italic font-light text-[#87d0c3]">
              {t.diagnostic.titleAccent}
            </span>
            {t.diagnostic.titleEnd}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl font-sans leading-relaxed mb-12 sm:mb-16"
          >
            {t.diagnostic.subtitle}
          </motion.p>

          {/* Problem cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:border-[#87d0c3]/40 transition-colors ${
                  i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(135,208,195,0.08) 0%, transparent 70%)' }}
                />

                <div className="relative">
                  {/* Metric */}
                  <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#87d0c3] mb-2">
                    {problem.metric}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
                    {problem.metricLabel}
                  </div>

                  <div className="h-px bg-white/10 mb-4 sm:mb-6" />

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
