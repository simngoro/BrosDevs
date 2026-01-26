'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GetDirectionsSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Compass Illustration */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Compass SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
              >
                <defs>
                  <radialGradient id="compassGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#f5f5f5" />
                    <stop offset="100%" stopColor="#e0e0e0" />
                  </radialGradient>
                </defs>
                
                {/* Outer circle */}
                <circle cx="200" cy="200" r="180" fill="url(#compassGradient)" stroke="#1a1a1a" strokeWidth="4" />
                
                {/* Inner circle */}
                <circle cx="200" cy="200" r="150" fill="white" stroke="#1a1a1a" strokeWidth="3" />
                
                {/* Cardinal directions */}
                <text x="200" y="50" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#1a1a1a">N</text>
                <text x="200" y="370" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#1a1a1a">S</text>
                <text x="50" y="210" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#1a1a1a">W</text>
                <text x="350" y="210" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#1a1a1a">E</text>
                
                {/* Direction lines */}
                <line x1="200" y1="50" x2="200" y2="80" stroke="#1a1a1a" strokeWidth="3" />
                <line x1="200" y1="320" x2="200" y2="350" stroke="#1a1a1a" strokeWidth="3" />
                <line x1="50" y1="200" x2="80" y2="200" stroke="#1a1a1a" strokeWidth="3" />
                <line x1="320" y1="200" x2="350" y2="200" stroke="#1a1a1a" strokeWidth="3" />
                
                {/* Compass needle */}
                <motion.g
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '200px 200px' }}
                >
                  <path d="M200,80 L220,200 L200,320 L180,200 Z" fill="#ff4444" stroke="#1a1a1a" strokeWidth="2" />
                  <path d="M200,80 L180,200 L200,320 L220,200 Z" fill="#1a1a1a" />
                </motion.g>
                
                {/* Center dot */}
                <circle cx="200" cy="200" r="8" fill="#1a1a1a" />
                
                {/* Decorative text around compass */}
                <text x="200" y="120" textAnchor="middle" fontSize="14" fill="#666" fontWeight="bold">
                  WE&apos;RE HERE TO HELP
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Direcciones</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#1a1a1a] leading-tight font-bold tracking-tight">
              Obtén direcciones en el camino hacia el desarrollo
            </h2>
            <p className="text-lg sm:text-xl text-[#4a4a4a] mb-6 leading-relaxed font-sans italic">
              Tu viaje hacia el desarrollo es único. Cada parte de tu proyecto es solo uno de los muchos caminos en tu roadmap personal. Pero ese roadmap puede volverse un poco complicado. Está bien detenerse y pedir direcciones.
            </p>
            <p className="text-lg sm:text-xl text-[#4a4a4a] mb-8 leading-relaxed font-sans italic">
              Por supuesto, si le preguntas a tres personas por direcciones, probablemente obtendrás tres respuestas diferentes. Estamos aquí para ayudarte a darle sentido a todo. Reconocemos que la ruta hacia el desarrollo no es un solo camino. Es un viaje al lugar donde todos los caminos convergen. Estamos aquí para asegurarnos de que llegues a tu destino con confianza.
            </p>
            <motion.a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold text-base hover:bg-[#7bc4b5] transition-colors font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver cómo somos diferentes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
