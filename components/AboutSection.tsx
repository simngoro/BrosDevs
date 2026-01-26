'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Quiero conocer más sobre sus servicios de desarrollo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Tienes objetivos. Pero los objetivos requieren tecnología. Asegúrate de tener una aplicación web que funcione para tu negocio. Y mientras lo hacemos, ¿por qué no hacer que esa aplicación sea escalable y moderna? Te mostraremos cómo aprovechar al máximo tu stack tecnológico actual, infraestructura y/o APIs (lo que tengas). También estaremos contigo durante todo el proceso, ayudando a suavizar las cosas cuando el camino se vuelve un poco complicado.',
      tech: 'React, Next.js, Node.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      icon: '🌐'
    },
    {
      title: 'Apps Móviles',
      description: 'Tus planes de desarrollo pueden no incluir problemas de compatibilidad. Pero ten por seguro que los problemas de compatibilidad tienen planes para tu aplicación. Trabajemos juntos para asegurarnos de que obtengas la mejor experiencia de usuario. Te mostraremos cómo diversificar tu estrategia móvil y maximizar el rendimiento de tu app.',
      tech: 'React Native, Flutter',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
      icon: '📱'
    },
    {
      title: 'E-commerce & Marketplaces',
      description: 'El e-commerce perfecto se ve un poco diferente para todos. La plataforma ideal debería ser exactamente igual. Asegurémonos de que tu visión de comercio electrónico sea la correcta, mientras reducimos la fricción, minimizamos los costos y potencialmente creamos una mayor conversión.',
      tech: 'Next.js, Stripe, PostgreSQL',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
      icon: '🛒'
    },
    {
      title: 'SaaS & Dashboards',
      description: 'No siempre es fácil hablar de escalabilidad. Puede ser aún más difícil planificarla. Te ayudaremos a crear un plan y construir una estrategia SaaS que tenga en cuenta todas las contingencias. Asegúrate de estar listo para todos los giros inesperados en el camino por delante.',
      tech: 'React, Node.js, MongoDB',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      icon: '📊'
    },
    {
      title: 'APIs & Backend',
      description: 'Has trabajado duro por todo lo que tienes. Suponemos que no lo hiciste para dejar tu infraestructura a tu tío menos favorito: el servidor sin optimizar. Te ayudaremos a minimizar la latencia y reducir los errores. También te mostraremos esos atajos inteligentes que solo los locales conocen.',
      tech: 'Node.js, Python, AWS',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80',
      icon: '⚙️'
    },
    {
      title: 'Consultoría Técnica',
      description: 'No confundas un código con un plan real. Unas pocas direcciones vagas de un desarrollador simplemente no funcionarán. Lo que necesitas es una verdadera guía técnica: alguien que ha recorrido este camino muchas veces y conoce las mejores rutas hacia el éxito.',
      tech: 'Arquitectura, DevOps, Cloud',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
      icon: '💡'
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section ref={sectionRef} id="servicios" className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Nuestros Servicios</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
              DevBros está aquí para simplificar tu desarrollo
            </h2>
            <p className="text-lg sm:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed font-sans font-normal italic">
              <span className="font-bold text-[#87d0c3]">DevBros</span> está aquí para simplificar tu desarrollo.
              <br />
              Trabajamos contigo para crear una estrategia personalizada que incorpore todas las áreas del desarrollo moderno: <span className="font-bold">Web</span>, <span className="font-bold">Móvil</span>, <span className="font-bold">E-commerce</span>, <span className="font-bold">SaaS</span>, y <span className="font-bold">Backend</span>.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card group block bg-white rounded-lg overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center border-2 border-black">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-[#1a1a1a] group-hover:text-[#87d0c3] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#4a4a4a] mb-6 leading-relaxed text-base sm:text-lg line-clamp-4 font-sans font-normal">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#666] uppercase tracking-wide font-sans">
                      {service.tech}
                    </span>
                    <motion.svg 
                      className="w-5 h-5 text-[#87d0c3]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* About DevBros Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
                DevBros está aquí para simplificar tu desarrollo.
              </h3>
              <p className="text-lg sm:text-xl text-[#4a4a4a] mb-6 leading-relaxed font-sans font-normal italic">
                Trabajamos contigo para crear una estrategia personalizada que incorpore todas las áreas del desarrollo moderno, enfocándonos en lo que es más importante para ti.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed font-sans font-normal italic">
                Como hermanos developers, nos entendemos sin palabras. Compartimos la misma visión y estándares de calidad. Eso se traduce en proyectos más rápidos, consistentes y rentables.
              </p>
            </div>
            
            {/* Stats Card */}
            <motion.div 
              className="bg-[#fcf8f3] rounded-lg p-8 sm:p-10 border-2 border-black"
              whileHover={{ scale: 1.02, boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {[
                  { label: 'Proyectos completados', value: '50+', color: 'text-[#87d0c3]' },
                  { label: 'Años de experiencia', value: '8+', color: 'text-[#87d0c3]' },
                  { label: 'Tecnologías dominadas', value: '15+', color: 'text-[#87d0c3]' },
                  { label: 'Satisfacción del cliente', value: '100%', color: 'text-[#ff6b6b]' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b-2 border-black last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-[#4a4a4a] font-medium">{stat.label}</span>
                    <motion.span 
                      className={`text-3xl sm:text-4xl font-bold font-serif ${stat.color} tracking-tight`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 text-center bg-[#87d0c3] rounded-lg p-10 sm:p-14 text-[#1a1a1a] relative overflow-hidden border-2 border-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              ¿Listo para hacer crecer tu negocio?
            </h3>
            <p className="text-[#1a1a1a] mb-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 font-sans font-normal">
              Hablemos de tu proyecto. Te damos una respuesta honesta sobre qué podemos hacer, 
              en cuánto tiempo y cuánto va a costar. Sin sorpresas, solo resultados.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-black text-[#1a1a1a] font-bold rounded-lg hover:bg-[#f5f5f5] transition-colors text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Hablar por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
