'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function IndustriesSection() {
  const { t } = useLanguage();

  const industries = [
    { icon: '🛒', tags: ['Next.js', 'Stripe', 'Admin Panel'], accent: '#87d0c3' },
    { icon: '🍽️', tags: ['React Native', 'Maps API', 'Realtime'], accent: '#ff6b9d' },
    { icon: '💼', tags: ['Next.js', 'Supabase', 'Multi-tenant'], accent: '#ffd93d' },
    { icon: '🏥', tags: ['HIPAA', 'Video SDK', 'HL7'], accent: '#a6f77b' },
    { icon: '🏫', tags: ['Video', 'LMS', 'Certs'], accent: '#c084fc' },
    { icon: '🏠', tags: ['Maps', '3D Tours', 'CRM'], accent: '#60a5fa' },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#87d0c3]" />
            <span className="font-mono text-xs sm:text-sm text-[#87d0c3] uppercase tracking-[0.3em]">
              {t.industries.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6"
          >
            {t.industries.titleStart}
            <span className="italic font-light text-[#87d0c3]">
              {t.industries.titleAccent}
            </span>
            {t.industries.titleEnd}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl font-sans leading-relaxed mb-12 sm:mb-16"
          >
            {t.industries.subtitle}
          </motion.p>

          {/* Industries grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {t.industries.list.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:border-white/20 transition-colors overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                  style={{ backgroundColor: industries[i].accent }}
                />

                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{industries[i].icon}</div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-400 font-sans leading-relaxed mb-5 sm:mb-6">
                  {industry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {industries[i].tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded border"
                      style={{
                        color: industries[i].accent,
                        borderColor: `${industries[i].accent}40`,
                        backgroundColor: `${industries[i].accent}08`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
