'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const testimonials = t.testimonials.list;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-[#87d0c3]" />
              <span className="font-mono text-xs sm:text-sm text-[#87d0c3] uppercase tracking-[0.3em]">
                {t.testimonials.label}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6 max-w-4xl">
              {t.testimonials.titleStart}
              <span className="italic font-light text-[#87d0c3]">
                {t.testimonials.titleAccent}
              </span>
              {t.testimonials.titleEnd}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-sans leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative min-h-[480px] sm:min-h-[400px] lg:min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 relative">
                    {/* Quote SVG */}
                    <div className="absolute -top-4 sm:-top-6 left-6 sm:left-8 text-[#87d0c3]/30">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <div className="relative">
                      <p className="font-serif text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed italic">
                        {current.quote}
                      </p>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#87d0c3] to-[#a6f77b] flex items-center justify-center font-bold text-black text-base sm:text-lg flex-shrink-0">
                          {current.author
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-serif text-base sm:text-lg font-bold text-white">
                            {current.author}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400 font-sans italic">
                            {current.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metric (mobile = inline below, desktop = right side) */}
                    <div className="lg:hidden border-t border-white/10 pt-6 mt-2 flex items-center gap-4">
                      <div className="font-serif text-3xl sm:text-4xl font-bold text-[#87d0c3]">
                        {current.metric}
                      </div>
                      <div className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider">
                        {current.metricLabel}
                      </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center min-w-[180px] border-l border-white/10 pl-8">
                      <div className="font-serif text-5xl font-bold text-[#87d0c3] mb-2">
                        {current.metric}
                      </div>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-wider text-center">
                        {current.metricLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 sm:mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-[#87d0c3]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
