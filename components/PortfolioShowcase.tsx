'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const sectionRef = useRef<HTMLElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa ver más proyectos y conocer sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  
  const projects = useMemo(() => [
    {
      title: "E-commerce Platform",
      description: "Tienda online completa con panel de administración y pasarela de pago integrada. Sistema de gestión de inventario en tiempo real.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      category: "Web App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      metric: "+45% ventas",
      metricLabel: "en 3 meses"
    },
    {
      title: "Task Management SaaS",
      description: "Plataforma de gestión de proyectos para equipos remotos con integración de herramientas y reportes automatizados.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "SaaS",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
      metric: "12K+ usuarios",
      metricLabel: "activos mensuales"
    },
    {
      title: "Real Estate Portal",
      description: "Portal inmobiliario con búsqueda avanzada, virtual tours 360° y sistema de agendamiento de visitas automatizado.",
      tags: ["Vue.js", "Python", "AWS"],
      category: "Marketplace",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
      metric: "+60% leads",
      metricLabel: "calificados"
    },
    {
      title: "Healthcare Dashboard",
      description: "Dashboard médico para gestión de pacientes, citas y historiales clínicos con integración de dispositivos IoT.",
      tags: ["React", "Express", "MySQL"],
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
      metric: "50+ clínicas",
      metricLabel: "usando la plataforma"
    },
    {
      title: "Social Media App",
      description: "App móvil de redes sociales con chat en tiempo real, streaming de video y algoritmo de recomendación personalizado.",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
      metric: "8K+ descargas",
      metricLabel: "en App Store"
    },
    {
      title: "Analytics Platform",
      description: "Plataforma de análisis de datos con visualizaciones en tiempo real, dashboards personalizables y reportes automatizados.",
      tags: ["TypeScript", "D3.js", "Python"],
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      metric: "+80% eficiencia",
      metricLabel: "en toma de decisiones"
    }
  ], []);

  const filters = ['Todos', 'Web App', 'Mobile', 'SaaS', 'Marketplace', 'Healthcare', 'Analytics'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (filtersRef.current) {
        const buttons = filtersRef.current.querySelectorAll('.filter-btn');
        gsap.fromTo(buttons,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: filtersRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="proyectos" 
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Nuestros Proyectos</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
              Proyectos que generan resultados
            </h2>
            <p className="text-lg sm:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed font-sans font-normal italic">
              Cada proyecto de <span className="font-bold text-blue-600">DevBros</span> es una historia de problemas resueltos y objetivos alcanzados.{' '}
              Desarrollo web y móvil que funciona y vende.
            </p>
          </motion.div>
          
          {/* Filter tabs */}
          <div ref={filtersRef} className="flex justify-center mb-12 sm:mb-16 px-4">
            <div className="inline-flex flex-wrap justify-center bg-[#fcf8f3] rounded-lg p-1 gap-1 max-w-4xl border-2 border-black">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm whitespace-nowrap transition-all duration-300 relative overflow-hidden border-2 ${
                    activeFilter === filter
                      ? 'bg-[#87d0c3] text-[#1a1a1a] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      : 'text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-white border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{filter}</span>
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-500 text-xl">No hay proyectos en esta categoría.</p>
                </div>
              ) : (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group bg-white rounded-lg overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Project image */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Category badge */}
                      <motion.div 
                        className="absolute top-4 left-4"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="px-4 py-1.5 bg-white border-2 border-black text-[#1a1a1a] text-xs font-bold rounded-lg font-sans">
                          {project.category}
                        </span>
                      </motion.div>
                      
                      {/* Metric badge */}
                      {project.metric && (
                        <motion.div 
                          className="absolute top-4 right-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="px-4 py-2 bg-[#87d0c3] border-2 border-black rounded-lg">
                            <div className="text-lg font-bold text-[#1a1a1a] leading-tight font-sans">{project.metric}</div>
                            <div className="text-xs text-[#1a1a1a] font-semibold">{project.metricLabel}</div>
                          </div>
                        </motion.div>
                      )}

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    
                    {/* Project info */}
                    <div className="p-6 sm:p-8">
                      <motion.h3 
                        className="text-xl sm:text-2xl font-serif font-bold mb-3 text-[#1a1a1a] group-hover:text-[#87d0c3] transition-colors duration-300 tracking-tight"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-[#4a4a4a] mb-4 line-clamp-2 text-base leading-relaxed font-sans font-normal">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <motion.span
                            key={tagIndex}
                            className="px-3 py-1 bg-[#fcf8f3] border border-black text-[#1a1a1a] text-xs font-bold rounded-lg font-sans"
                            whileHover={{ scale: 1.1, backgroundColor: '#87d0c3' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* View project link */}
                      <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#87d0c3] group-hover:gap-3 transition-all duration-300 font-sans"
                        whileHover={{ x: 5 }}
                      >
                        Consultar proyecto
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
