'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Animated grid background (skip on mobile for performance)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    if (isMobile) return;

    const canvas = document.getElementById('hero-grid') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let offset = 0;
    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 60;
      ctx.strokeStyle = 'rgba(135, 208, 195, 0.08)';
      ctx.lineWidth = 1;

      for (let x = -spacing + (offset % spacing); x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -spacing + (offset % spacing); y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      offset += 0.3;
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 bg-[#0a0a0a] text-white"
    >
      {/* Static grid background as fallback for mobile */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none sm:hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(135,208,195,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(135,208,195,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated grid (desktop only) */}
      <canvas id="hero-grid" className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none opacity-60" />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(135, 208, 195, 0.18) 0%, transparent 60%)',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(135, 208, 195, 0.15)', top: '15%', left: '10%' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(166, 247, 123, 0.08)', bottom: '10%', right: '15%' }}
          animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#87d0c3]/30 bg-[#87d0c3]/5 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#87d0c3] animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm font-mono text-[#87d0c3] tracking-wider uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8"
          >
            {t.hero.titleStart}
            <br />
            <span className="italic font-light text-[#87d0c3]">
              {t.hero.titleAccent}
            </span>
            <span className="text-white">{t.hero.titleEnd}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 font-sans font-normal leading-relaxed px-2"
          >
            {t.hero.subtitle}
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-1 sm:mt-0">{t.hero.subtitle2}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#87d0c3] text-black font-bold rounded-lg font-sans text-sm sm:text-base overflow-hidden shadow-[0_0_30px_rgba(135,208,195,0.35)]"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="#proceso"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-lg font-sans text-sm sm:text-base hover:bg-white/10 transition-colors"
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs md:text-sm text-gray-400 font-mono uppercase tracking-wider mb-12 sm:mb-16"
          >
            {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((trust) => (
              <div key={trust} className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#87d0c3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {trust}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: t.hero.stats.speed, value: t.hero.stats.speedValue, sub: t.hero.stats.speedSub },
              { label: t.hero.stats.efficiency, value: t.hero.stats.efficiencyValue, sub: t.hero.stats.efficiencySub },
              { label: t.hero.stats.quality, value: t.hero.stats.qualityValue, sub: t.hero.stats.qualitySub },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.1 }}
                className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl p-5 sm:p-6 text-left"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-mono text-[#87d0c3] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#87d0c3]" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-sans">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* SYS code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 sm:mt-12 font-mono text-[9px] sm:text-[10px] md:text-xs text-gray-600 tracking-[0.3em] uppercase"
          >
            SYS.DEVBROS.26
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono tracking-widest uppercase"
      >
        {t.hero.scroll}
      </motion.div>
    </section>
  );
}
