'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PortfolioHeader() {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-block mb-4">
        <span className="text-sm sm:text-base font-black text-blue-600 uppercase tracking-wider">Portfolio</span>
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
        Proyectos que
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 mt-2">
          generan resultados
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
        Cada proyecto de <span className="font-black text-blue-600">DevBros</span> es una historia de problemas resueltos y objetivos alcanzados. 
        Desarrollo web y móvil que funciona y vende.
      </p>
    </div>
  );
}

function ProjectsGrid({ projects, whatsappUrl, filterKey }: { projects: any[], whatsappUrl: string, filterKey: string }) {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.15
      }
    }
  };
  
  if (projects.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-gray-500 text-xl">No hay proyectos en esta categoría.</p>
      </div>
    );
  }
  
  return (
    <motion.div 
      key={filterKey}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0
          }
        }
      }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={itemVariants}
          className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg"
          whileHover={{ 
            y: -8, 
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ willChange: 'transform' }}
        >
          {/* Gradient overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />
          
          {/* Glow effect */}
          <div 
            className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          />
          
          {/* Project image */}
          <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200 z-10">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-4 py-1.5 bg-black/80 backdrop-blur-sm text-white text-xs font-black rounded-full border border-white/20">
                {project.category}
              </span>
            </div>
            
            {/* Metric badge */}
            {project.metric && (
              <div className="absolute top-4 right-4 z-20">
                <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl border border-white/30 shadow-xl">
                  <div className="text-lg font-black text-gray-900 leading-tight">{project.metric}</div>
                  <div className="text-xs text-gray-600 font-semibold">{project.metricLabel}</div>
                </div>
              </div>
            )}
            
            {/* Hover icon */}
            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Project info */}
          <div className="relative p-6 sm:p-8 z-10 bg-white">
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* View project link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} group-hover:gap-3 transition-all duration-300`}
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
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa ver más proyectos y conocer sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  
  const projects = useMemo(() => [
    {
      title: "E-commerce Platform",
      description: "Tienda online completa con panel de administración y pasarela de pago integrada. Sistema de gestión de inventario en tiempo real.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      category: "Web App",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      metric: "+45% ventas",
      metricLabel: "en 3 meses"
    },
    {
      title: "Task Management SaaS",
      description: "Plataforma de gestión de proyectos para equipos remotos con integración de herramientas y reportes automatizados.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "SaaS",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
      metric: "12K+ usuarios",
      metricLabel: "activos mensuales"
    },
    {
      title: "Real Estate Portal",
      description: "Portal inmobiliario con búsqueda avanzada, virtual tours 360° y sistema de agendamiento de visitas automatizado.",
      tags: ["Vue.js", "Python", "AWS"],
      category: "Marketplace",
      gradient: "from-emerald-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
      metric: "+60% leads",
      metricLabel: "calificados"
    },
    {
      title: "Healthcare Dashboard",
      description: "Dashboard médico para gestión de pacientes, citas y historiales clínicos con integración de dispositivos IoT.",
      tags: ["React", "Express", "MySQL"],
      category: "Healthcare",
      gradient: "from-red-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
      metric: "50+ clínicas",
      metricLabel: "usando la plataforma"
    },
    {
      title: "Social Media App",
      description: "App móvil de redes sociales con chat en tiempo real, streaming de video y algoritmo de recomendación personalizado.",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      gradient: "from-cyan-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
      metric: "8K+ descargas",
      metricLabel: "en App Store"
    },
    {
      title: "Analytics Platform",
      description: "Plataforma de análisis de datos con visualizaciones en tiempo real, dashboards personalizables y reportes automatizados.",
      tags: ["TypeScript", "D3.js", "Python"],
      category: "Analytics",
      gradient: "from-cyan-500 to-blue-500",
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

  return (
    <section 
      id="proyectos" 
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white text-gray-900 relative overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <PortfolioHeader />
          
          {/* Filter tabs - optimized and working */}
          <div className="flex justify-center mb-12 sm:mb-16 px-4">
            <div className="inline-flex flex-wrap justify-center bg-white/90 backdrop-blur-sm rounded-2xl p-1.5 gap-2 shadow-lg border border-gray-200/50 max-w-4xl">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects grid - with key to force re-animation */}
          <AnimatePresence mode="wait">
            <ProjectsGrid 
              key={activeFilter} 
              projects={filteredProjects} 
              whatsappUrl={whatsappUrl}
              filterKey={activeFilter}
            />
          </AnimatePresence>
          
          {/* CTA Section - optimized */}
          <motion.div 
            className="relative bg-gradient-to-br from-gray-900 via-black to-slate-900 rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden border border-gray-800/50 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Simplified background pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
                                linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                backgroundSize: '60px 60px'
              }}
            />
            
            {/* Simplified glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
                ¿Listo para tu próximo proyecto?
              </h3>
              <p className="text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
                Hablemos de tu idea. <span className="text-blue-300 font-black">DevBros</span> te da una respuesta honesta sobre qué podemos hacer, 
                en cuánto tiempo y cuánto va a costar. Sin sorpresas, solo resultados.
              </p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black rounded-2xl text-lg sm:text-xl shadow-2xl shadow-emerald-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
