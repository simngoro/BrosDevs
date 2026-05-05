'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power, Bug, Wrench, Rocket, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const accents = ['#87d0c3', '#ff6b9d', '#ffd93d', '#a6f77b'];
const lucideIcons: LucideIcon[] = [Power, Bug, Wrench, Rocket];

// SSR-safe layout effect
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function StickyHorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  // Mark as mounted (avoids SSR mismatch issues with gsap.matchMedia)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Setup GSAP horizontal scroll using matchMedia for clean responsive handling
  useIsoLayoutEffect(() => {
    if (!mounted) return;
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const section = sectionRef.current;

    const mm = gsap.matchMedia();

    // ONLY apply pin + horizontal scroll on desktop (>= 1024px)
    mm.add('(min-width: 1024px)', () => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        // Reset transform so layout doesn't stay stuck
        gsap.set(track, { clearProps: 'transform' });
      };
    });

    // Multiple refreshes to catch dynamic components loading above
    const refreshDelays = [100, 400, 800, 1500, 3000];
    const refreshTimers = refreshDelays.map((d) =>
      window.setTimeout(() => ScrollTrigger.refresh(), d)
    );

    // Refresh when window finishes loading (images, fonts, etc.)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    // Refresh when fonts load (changes text widths)
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
    }

    return () => {
      refreshTimers.forEach((t) => clearTimeout(t));
      window.removeEventListener('load', onLoad);
      mm.revert();
    };
  }, [mounted]);

  const logs = t.sticky.logs.map((log, i) => ({
    ...log,
    accent: accents[i],
    Icon: lucideIcons[i],
  }));

  // Refresh ScrollTrigger when locale changes (text width changes)
  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(id);
  }, [t, mounted]);

  return (
    <>
      {/* ----------------------------- MOBILE / TABLET (< lg) ----------------------------- */}
      <section className="lg:hidden relative bg-[#0a0a0a] text-white overflow-hidden py-16 sm:py-20">
        <div className="text-center font-mono text-[10px] sm:text-xs text-gray-500 tracking-[0.3em] uppercase mb-8">
          {t.sticky.processLabel}
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16">
            {logs.map((log, i) => (
              <motion.div
                key={`m-${log.label}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {i < logs.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
                )}

                <div className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-mono text-sm font-bold relative"
                      style={{
                        backgroundColor: log.accent,
                        color: '#000',
                        boxShadow: `0 0 20px ${log.accent}40`,
                      }}
                    >
                      0{i + 1}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2"
                      style={{ color: log.accent }}
                    >
                      {log.label}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-3 text-white">
                      {log.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                      {log.subtitle}
                    </p>

                    <div
                      className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        borderColor: `${log.accent}40`,
                        backgroundColor: `${log.accent}08`,
                        color: log.accent,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: log.accent }} />
                      {t.sticky.statusActive}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- DESKTOP (>= lg) ----------------------------- */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative bg-[#0a0a0a] text-white overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/10">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#87d0c3] via-[#a6f77b] to-[#87d0c3] transition-none"
            style={{ width: '0%' }}
          />
        </div>

        {/* Top label */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-gray-500 tracking-[0.3em] uppercase">
          {t.sticky.scrollLabel}
        </div>

        {/* Bottom decorative */}
        <div className="absolute bottom-6 left-6 z-20 font-mono text-xs text-gray-600 tracking-[0.3em] uppercase">
          {t.sticky.processLabel}
        </div>
        <div className="absolute bottom-6 right-6 z-20 font-mono text-xs text-gray-600 tracking-[0.3em] uppercase">
          {t.sticky.version}
        </div>

        <div className="h-full flex items-center">
          <div ref={trackRef} className="flex h-full items-center" style={{ willChange: 'transform' }}>
            {logs.map((log, i) => (
              <div
                key={`d-${log.label}`}
                className="h-full w-screen shrink-0 flex items-center justify-center px-8 lg:px-24"
              >
                <div className="w-full max-w-7xl grid grid-cols-[1fr_auto] gap-12 items-center">
                  <div className="max-w-3xl">
                    <div
                      className="font-mono text-sm uppercase tracking-[0.3em] mb-6"
                      style={{ color: log.accent }}
                    >
                      {log.label}
                    </div>
                    <h3 className="font-serif text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-white">
                      {log.title}
                    </h3>
                    <p className="text-lg xl:text-xl text-gray-300 font-sans leading-relaxed max-w-2xl">
                      {log.subtitle}
                    </p>

                    <div className="flex items-center gap-3 mt-10">
                      {logs.map((_, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
                              idx === i
                                ? 'scale-110'
                                : idx < i
                                ? 'opacity-40'
                                : 'opacity-20'
                            }`}
                            style={{
                              backgroundColor: idx === i ? log.accent : 'transparent',
                              border: `1.5px solid ${idx === i ? log.accent : 'rgba(255,255,255,0.2)'}`,
                              color: idx === i ? '#000' : '#fff',
                            }}
                          >
                            0{idx + 1}
                          </div>
                          {idx < logs.length - 1 && (
                            <div className="w-10 h-px bg-white/10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div
                      className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl border flex items-center justify-center relative overflow-hidden"
                      style={{
                        borderColor: `${log.accent}30`,
                        background: `radial-gradient(circle at 50% 50%, ${log.accent}10 0%, transparent 70%)`,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />
                      <div
                        className="w-40 h-40 relative flex items-center justify-center"
                        style={{ filter: `drop-shadow(0 0 20px ${log.accent}40)`, color: log.accent }}
                      >
                        <log.Icon className="w-28 h-28" strokeWidth={1.25} />
                      </div>

                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l" style={{ borderColor: log.accent }} />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r" style={{ borderColor: log.accent }} />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l" style={{ borderColor: log.accent }} />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: log.accent }} />

                      <div className="absolute bottom-5 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: log.accent }}>
                        {t.sticky.statusActive}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
