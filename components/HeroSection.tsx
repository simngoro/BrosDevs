'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const boatRef = useRef<SVGGElement>(null);
  const waterWavesRef = useRef<SVGPathElement[]>([]);
  const landscapeRef = useRef<SVGSVGElement>(null);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo web y móvil.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  // Function to calculate water level based on X position (following the wave curve)
  const getWaterLevel = (x: number) => {
    // Water wave formula: follows the curve of the water
    // Base level is 600, with wave variation matching the SVG path
    const baseY = 600;
    // Match the wave pattern from the SVG: Q200,580 400,600 T800,590 T1200,600
    // Simplified wave calculation
    const waveAmplitude = 15;
    const waveFrequency = 0.005; // Adjusted to match visual wave
    const waveY = Math.sin(x * waveFrequency) * waveAmplitude;
    return baseY + waveY;
  };

  useEffect(() => {
    // Delay heavy animations until after initial render
    const timeoutId = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Boat moving left to right on water - following the water line, full screen
        if (boatRef.current) {
          const startX = -200; // Start off-screen left
          const endX = 2120; // End off-screen right (1920 + 200 for smooth exit)
          const totalDistance = endX - startX;
          
          // Create timeline for continuous loop
          const boatTimeline = gsap.timeline({ repeat: -1 });
          
          // Move boat from left to right across entire screen
          boatTimeline.to(boatRef.current, {
            x: endX,
            duration: 25, // Slower for more visible movement
            ease: 'none',
            onUpdate: function() {
              if (boatRef.current) {
                // Calculate current X position
                const currentX = startX + (this.progress() * totalDistance);
                const waterY = getWaterLevel(currentX);
                // Set Y position to follow water line
                // Base transform is 580, adjust based on wave calculation
                gsap.set(boatRef.current, { y: waterY - 600 + 580 });
                
                // Gentle rotation based on wave slope (derivative of wave)
                const slope = Math.cos(currentX * 0.005) * 0.075;
                gsap.set(boatRef.current, { rotation: slope * 10 });
              }
            }
          });
          
          // Reset position instantly (invisible transition)
          boatTimeline.set(boatRef.current, { 
            x: startX,
            y: getWaterLevel(startX) - 600 + 580,
            rotation: 0,
            duration: 0
          });
        }

        // Water waves animation - reduced complexity
        waterWavesRef.current.forEach((wave, index) => {
          if (wave && index < 2) { // Only animate first 2 waves
            gsap.to(wave, {
              attr: { d: wave.getAttribute('d')?.replace(/Q\d+,\d+/, `Q${300 + index * 50},${650 + index * 5}`) || '' },
              duration: 2 + index * 0.3,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
        });

        // Parallax landscape on scroll
        if (landscapeRef.current) {
          gsap.to(landscapeRef.current, {
            y: 100,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }, heroRef);
    }, 500); // Delay 500ms after initial render

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Full Page Landscape Illustration - No margins */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          ref={landscapeRef}
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffe5d4" />
              <stop offset="25%" stopColor="#ffd4b3" />
              <stop offset="50%" stopColor="#ffc49b" />
              <stop offset="75%" stopColor="#ffb380" />
              <stop offset="100%" stopColor="#fcf8f3" />
            </linearGradient>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6bb5d4" />
              <stop offset="30%" stopColor="#5ba3c2" />
              <stop offset="60%" stopColor="#4a90a4" />
              <stop offset="100%" stopColor="#2c5f6b" />
            </linearGradient>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8d5b7" />
              <stop offset="100%" stopColor="#d4a574" />
            </linearGradient>
            <filter id="waterGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Sky - Full coverage with animated gradient */}
          <motion.rect 
            width="1920" 
            height="1080" 
            fill="url(#skyGradient)"
            animate={{
              opacity: [1, 0.95, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Distant Mountains - Hand-drawn style with black outlines */}
          <g>
            <path
              d="M0,400 L300,320 L600,350 L900,300 L1200,330 L1500,310 L1800,340 L1920,320 L1920,1080 L0,1080 Z"
              fill="url(#mountainGradient)"
              stroke="#1a1a1a"
              strokeWidth="3"
              opacity="0.6"
            />
            {/* Mountain details - hand-drawn lines */}
            <path d="M300,320 L350,300 L400,310" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M900,300 L950,290 L1000,295" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.4" />
          </g>
          <g>
            <path
              d="M0,500 L400,420 L800,450 L1200,400 L1600,430 L1920,410 L1920,1080 L0,1080 Z"
              fill="url(#mountainGradient)"
              stroke="#1a1a1a"
              strokeWidth="3"
              opacity="0.7"
            />
            {/* Mountain details */}
            <path d="M400,420 L450,410 L500,415" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M1200,400 L1250,390 L1300,395" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.4" />
          </g>

          {/* Clouds - Hand-drawn style with black outlines */}
          <g>
            {/* Cloud 1 */}
            <motion.g
              initial={{ x: 0 }}
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="200" cy="150" rx="120" ry="40" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
              <ellipse cx="180" cy="140" rx="60" ry="25" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
              <ellipse cx="220" cy="140" rx="70" ry="30" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
            </motion.g>
            
            {/* Cloud 2 */}
            <motion.g
              initial={{ x: 0 }}
              animate={{ x: [0, -80, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="800" cy="120" rx="150" ry="50" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
              <ellipse cx="770" cy="110" rx="80" ry="35" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
              <ellipse cx="830" cy="110" rx="90" ry="40" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
            </motion.g>
            
            {/* Cloud 3 */}
            <motion.g
              initial={{ x: 0 }}
              animate={{ x: [0, 60, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="1400" cy="180" rx="100" ry="35" fill="#ffffff" stroke="#1a1a1a" strokeWidth="3" />
              <ellipse cx="1380" cy="175" rx="50" ry="20" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
              <ellipse cx="1420" cy="175" rx="55" ry="25" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
            </motion.g>
          </g>

          {/* Water/Ocean - Hand-drawn style with animated waves */}
          <g>
            {/* Base water - starts at water level */}
            <motion.path
              d="M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z"
              fill="url(#waterGradient)"
              stroke="#1a1a1a"
              strokeWidth="4"
              animate={{
                d: [
                  "M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z",
                  "M0,605 Q200,585 400,605 T800,595 T1200,605 T1600,595 T1920,605 L1920,1080 L0,1080 Z",
                  "M0,595 Q200,575 400,595 T800,585 T1200,595 T1600,585 T1920,595 L1920,1080 L0,1080 Z",
                  "M0,600 Q200,580 400,600 T800,590 T1200,600 T1600,590 T1920,600 L1920,1080 L0,1080 Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Animated wave lines - hand-drawn style */}
            <motion.path
              ref={(el) => { if (el) waterWavesRef.current[0] = el; }}
              d="M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620",
                  "M0,625 Q200,605 400,625 T800,615 T1200,625 T1600,615 T1920,625",
                  "M0,615 Q200,595 400,615 T800,605 T1200,615 T1600,605 T1920,615",
                  "M0,620 Q200,600 400,620 T800,610 T1200,620 T1600,610 T1920,620"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.path
              ref={(el) => { if (el) waterWavesRef.current[1] = el; }}
              d="M0,650 Q300,630 600,650 T1200,640 T1920,650"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M0,650 Q300,630 600,650 T1200,640 T1920,650",
                  "M0,655 Q300,635 600,655 T1200,645 T1920,655",
                  "M0,645 Q300,625 600,645 T1200,635 T1920,645",
                  "M0,650 Q300,630 600,650 T1200,640 T1920,650"
                ]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
            />
            <motion.path
              ref={(el) => { if (el && waterWavesRef.current.length < 3) waterWavesRef.current.push(el); }}
              d="M0,680 Q400,660 800,680 T1600,670 T1920,680"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M0,680 Q400,660 800,680 T1600,670 T1920,680",
                  "M0,685 Q400,665 800,685 T1600,675 T1920,685",
                  "M0,675 Q400,655 800,675 T1600,665 T1920,675",
                  "M0,680 Q400,660 800,680 T1600,670 T1920,680"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6
              }}
            />
          </g>

          {/* Trees/Islands - Removed black elements for cleaner design */}

          {/* Boat - Positioned ON the water, following the water line */}
          <g ref={boatRef} transform="translate(-200, 580)">
            {/* Boat hull - more detailed, positioned on water line */}
            <path
              d="M-70,10 Q-50,-5 0,-10 Q50,-5 70,10 L70,35 Q50,40 0,40 Q-50,40 -70,35 Z"
              fill="#8b4513"
              stroke="#1a1a1a"
              strokeWidth="4"
            />
            {/* Boat deck detail */}
            <ellipse cx="0" cy="10" rx="65" ry="12" fill="#a0522d" stroke="#1a1a1a" strokeWidth="2" />
            <line x1="-40" y1="10" x2="40" y2="10" stroke="#1a1a1a" strokeWidth="2" />
            
            {/* Mast - taller and more prominent */}
            <line x1="0" y1="-10" x2="0" y2="-100" stroke="#1a1a1a" strokeWidth="5" />
            
            {/* Main sail - larger and more detailed */}
            <path
              d="M0,-10 L0,-80 L-50,-70 L-40,-30 Z"
              fill="#ffffff"
              stroke="#1a1a1a"
              strokeWidth="4"
            />
            {/* Sail details */}
            <line x1="-25" y1="-40" x2="-25" y2="-70" stroke="#1a1a1a" strokeWidth="2" />
            <line x1="-12" y1="-35" x2="-12" y2="-65" stroke="#1a1a1a" strokeWidth="1.5" />
            
            {/* Front sail (jib) - better proportioned */}
            <path
              d="M0,-10 L0,-70 L35,-65 L30,-30 Z"
              fill="#f5f5f5"
              stroke="#1a1a1a"
              strokeWidth="3"
            />
            
            {/* Flag on top - more visible */}
            <rect x="0" y="-100" width="20" height="15" fill="#ff4444" stroke="#1a1a1a" strokeWidth="2" />
            <path d="M0,-100 L10,-92 L0,-85 Z" fill="#ffffff" />
            
            {/* Boat reflection in water - subtle */}
            <g opacity="0.25" transform="scale(1, -1) translate(0, -90)">
              <path
                d="M-70,10 Q-50,-5 0,-10 Q50,-5 70,10 L70,35 Q50,40 0,40 Q-50,40 -70,35 Z"
                fill="#8b4513"
                stroke="#1a1a1a"
                strokeWidth="3"
              />
            </g>
          </g>

          {/* Birds - Hand-drawn style with black outlines */}
          <g>
            <motion.g
              initial={{ x: 0 }}
              animate={{ 
                x: [0, 150, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                x: { duration: 20, repeat: Infinity, ease: 'linear' },
                y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              <path
                d="M300,350 Q310,340 320,350 Q310,360 300,350"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>
            <motion.g
              initial={{ x: 0 }}
              animate={{ 
                x: [0, -120, 0],
                y: [0, 5, 0]
              }}
              transition={{ 
                x: { duration: 18, repeat: Infinity, ease: 'linear', delay: 1 },
                y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
              }}
            >
              <path
                d="M1200,400 Q1210,390 1220,400 Q1210,410 1200,400"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>
            <motion.g
              initial={{ x: 0 }}
              animate={{ 
                x: [0, 100, 0],
                y: [0, -3, 0]
              }}
              transition={{ 
                x: { duration: 22, repeat: Infinity, ease: 'linear', delay: 0.5 },
                y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
              }}
            >
              <path
                d="M600,320 Q610,310 620,320 Q610,330 600,320"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>
          </g>

          {/* Sun - Hand-drawn style with animation */}
          <motion.g
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{ transformOrigin: '1600px 200px' }}
          >
            <circle cx="1600" cy="200" r="60" fill="#ffd93d" stroke="#1a1a1a" strokeWidth="4" />
            <circle cx="1600" cy="200" r="50" fill="#ffe066" />
            {/* Sun rays - hand-drawn style */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x1 = 1600 + Math.cos(angle) * 55;
              const y1 = 200 + Math.sin(angle) * 55;
              const x2 = 1600 + Math.cos(angle) * 75;
              const y2 = 200 + Math.sin(angle) * 75;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}
          </motion.g>
        </svg>
      </div>

      {/* 3D Particle Background - Disabled for initial load performance to improve speed */}
      {/* <Suspense fallback={null}>
        <div className="absolute inset-0 z-10 pointer-events-none opacity-15">
          <ParticleBackground />
        </div>
      </Suspense> */}

      {/* Main Content - Overlay on illustration */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - Serif font style */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 text-[#1a1a1a] leading-tight font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Desarrollo que genera
            <br />
            <span className="text-[#1a1a1a]">resultados reales.</span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            className="text-lg sm:text-xl text-[#1a1a1a] mb-8 font-sans font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformamos tus ideas en aplicaciones que funcionan y venden.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold text-base hover:bg-[#7bc4b5] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all font-sans"
            >
              Hablar por WhatsApp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* "My Guide" Badge - Bottom Left */}
      <motion.div
        className="fixed bottom-8 left-8 z-30 w-16 h-16 bg-[#ffd93d] border-4 border-black rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>
    </section>
  );
}
