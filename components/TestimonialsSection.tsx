'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "DevBros transformó completamente nuestra plataforma de e-commerce. En 3 meses aumentamos las ventas en un 45%. El trabajo fue impecable y siempre estuvieron disponibles.",
      author: "María González",
      company: "CEO, TiendaOnline"
    },
    {
      quote: "Trabajar con DevBros fue una experiencia increíble. Entendieron perfectamente nuestra visión y la ejecutaron mejor de lo que esperábamos. Profesionales de verdad.",
      author: "Carlos Rodríguez",
      company: "Fundador, TaskFlow"
    },
    {
      quote: "Necesitábamos una app móvil compleja y DevBros la entregó a tiempo y superando expectativas. Su atención al detalle y comunicación constante hizo toda la diferencia.",
      author: "Ana Martínez",
      company: "CTO, HealthCare Pro"
    },
    {
      quote: "Como startup, necesitábamos algo rápido y de calidad. DevBros nos dio ambas cosas. La plataforma que construyeron escaló perfectamente con nuestro crecimiento.",
      author: "Luis Fernández",
      company: "Co-fundador, RealEstate Hub"
    },
    {
      quote: "DevBros no solo desarrolló nuestra aplicación, nos asesoró en cada paso. Su expertise técnico combinado con su visión de negocio fue invaluable.",
      author: "Sofía Pérez",
      company: "Directora, SocialConnect"
    },
    {
      quote: "Después de trabajar con varias agencias, finalmente encontramos a DevBros. Transparentes, eficientes y con resultados que hablan por sí solos.",
      author: "Diego Sánchez",
      company: "CEO, Analytics Pro"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="testimonios" className="py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Lo que dicen nuestros clientes</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
              Testimonios
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Large Opening Quote decoration - Left */}
            <div className="absolute -left-8 -top-8 z-0 opacity-20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            {/* Large Closing Quote decoration - Right */}
            <div className="absolute -right-8 -bottom-8 z-0 opacity-20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" transform="scale(-1, 1)">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-[#f5f5f5] transition-colors shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-[#f5f5f5] transition-colors shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Cards Container */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white border-2 border-black rounded-lg p-8 sm:p-12 max-w-3xl mx-auto shadow-lg relative">
                    {/* Quote Text */}
                    <p className="text-lg sm:text-xl text-[#1a1a1a] mb-6 leading-relaxed relative z-10 font-sans font-normal italic">
                      {testimonials[currentIndex].quote}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-xl font-bold text-[#1a1a1a] tracking-tight">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-sm text-[#666] font-sans italic">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                      {/* BBB Rating */}
                      <div className="flex items-center gap-2">
                        <div className="text-yellow-500 text-xl">★★★★★</div>
                        <span className="text-xs text-[#666] font-bold">5-Star Verified</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full border-2 border-black transition-all ${
                    index === currentIndex ? 'bg-[#87d0c3]' : 'bg-white'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* More journeys button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#testimonios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold hover:bg-[#7bc4b5] transition-colors font-sans"
            >
              Mas viajes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
