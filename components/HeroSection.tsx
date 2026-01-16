'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo web y móvil.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  // Removed mouse tracking for better performance

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Optimized particle system - reduced from 50 to 20
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Advanced gradient mesh background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[150px]"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[900px] h-[900px] bg-cyan-500/20 rounded-full blur-[160px]"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Optimized particle system - simplified for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, idx) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float ${10 + (idx % 5) * 2}s infinite ease-in-out`,
                animationDelay: `${idx * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Simplified grid - removed 3D transforms for performance */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </motion.div>
      
      <div ref={ref} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Badge with advanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3.5 sm:px-8 sm:py-4 mb-12 sm:mb-16 text-xs sm:text-sm font-semibold text-emerald-300 border border-emerald-400/40 rounded-full bg-emerald-500/10 backdrop-blur-xl hover:bg-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 shadow-2xl shadow-emerald-500/30"
          >
            <motion.span 
              className="w-3 h-3 bg-emerald-400 rounded-full mr-3 shadow-lg shadow-emerald-400/70"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 10px rgba(16, 185, 129, 0.6)',
                  '0 0 20px rgba(16, 185, 129, 0.8)',
                  '0 0 10px rgba(16, 185, 129, 0.6)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="hidden sm:inline">Disponibles para nuevos proyectos</span>
            <span className="sm:hidden">Disponibles ahora</span>
          </motion.div>
          
          {/* Kinetic typography - Main heading */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-8 sm:mb-10 leading-[0.85] tracking-tighter"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              textShadow: '0 0 80px rgba(59, 130, 246, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
            }}
          >
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 via-blue-400 to-cyan-300"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: '200% 200%',
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))',
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                DevBros
              </motion.span>
            </motion.span>
            <motion.span 
              className="block text-white mt-3 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
            >
              Desarrollo Web & Mobile
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl text-gray-100 mb-8 sm:mb-10 leading-relaxed max-w-5xl mx-auto px-4 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Transformamos tus ideas en aplicaciones que generan resultados.
          </motion.p>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-14 sm:mb-20 leading-relaxed max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <span className="text-blue-400 font-bold">DevBros</span> somos dos hermanos especializados en desarrollo web y móvil. 
            <span className="text-emerald-400 font-semibold"> Sin intermediarios, sin complicaciones.</span> 
            <span className="text-white"> Solo código de calidad que vende.</span>
          </motion.p>
          
          {/* CTA Buttons with advanced effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-20 sm:mb-24 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 sm:px-14 py-6 sm:py-7 bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 text-white font-black rounded-2xl text-xl sm:text-2xl shadow-2xl shadow-emerald-500/50 overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-4">
                <motion.svg 
                  className="w-8 h-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </motion.svg>
                Hablar por WhatsApp
                <motion.svg 
                  className="w-7 h-7" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.a>
            <motion.a
              href="#proyectos"
              className="px-12 sm:px-14 py-6 sm:py-7 border-2 border-white/40 text-white font-black rounded-2xl backdrop-blur-sm text-xl sm:text-2xl shadow-xl"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.6)",
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
          
          {/* Stats with advanced animations */}
          <motion.div 
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 max-w-4xl sm:max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { value: '50+', label: 'Proyectos', color: 'from-blue-500 to-blue-400' },
              { value: 'DevBros', label: 'Hermanos Dev', color: 'from-blue-600 to-cyan-500' },
              { value: '100%', label: 'Resultados', color: 'from-emerald-500 to-emerald-400' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.15, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -5 }}
              >
                <motion.div 
                  className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-3 sm:mb-4 relative z-10`}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ 
                    backgroundSize: '200% 200%',
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))',
                  }}
                >
                  <span className="block sm:inline relative z-20">{stat.value}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}



