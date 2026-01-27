'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProductsSection() {
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Quiero conocer más sobre sus productos y servicios de desarrollo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: 'Plataformas Web Completas',
      description: 'El desarrollo web se ve diferente para todos, potencialmente consistiendo en frontend, backend, APIs e integraciones. La gente tiende a tener más preguntas sobre escalabilidad, así que echemos un vistazo para aclarar. Las plataformas web son solo un producto. No son un plan. Entonces, dependiendo de tu situación personal, una plataforma puede o no ser adecuada para ti. Una plataforma puede reemplazar una estrategia de acumulación o crear crecimiento garantizado, e incluso puede crear ingresos como SaaS. ¿Pero tiene sentido para ti?',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80'
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Dejar una aplicación móvil significa muchas cosas diferentes. Ya sea que seas alguien que quiere lanzar en iOS y Android o alguien que quiere una app multiplataforma, hay diferentes estrategias y tecnologías para ayudarte a lograrlo. Una de las mejores formas de lograr cualquier resultado es con React Native o Flutter. Si estás esperando hasta que tengas problemas de compatibilidad para utilizar desarrollo móvil, podrías estar haciéndolo mal. Después de todo, se llama desarrollo móvil, no desarrollo de problemas. Pero hay muchas opciones. Entonces, ¿qué tecnología puede ayudarte más en tu proyecto?',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&q=80'
    },
    {
      title: 'Gestión de Proyectos',
      description: 'Imagina que contratas a alguien para hacer un trabajo para ti. Si hacen el trabajo bien, estás feliz de pagarles. Pero, ¿qué pasa si no hacen el trabajo en absoluto? ¿Aún vale la pena el dinero? Así es como nos sentimos sobre la gestión de proyectos con un desarrollador tradicional. El proyecto avanza y pagas tu tarifa. El proyecto se retrasa, pierdes tiempo... y aún pagas tu tarifa. Creemos que puedes hacerlo mejor.',
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&q=80'
    },
    {
      title: 'Mantenimiento & Soporte',
      description: 'Claro, tienes tu aplicación y ahorros. Pero, ¿tienes un plan para el mantenimiento a largo plazo? Alerta de spoiler: tener un desarrollador no es un plan... al menos no uno bueno.',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80'
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.product-card');
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
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
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] relative overflow-hidden">
      {/* Subtle particle background - disabled for performance */}
      {/* <SectionParticles count={100} color="#a8e6cf" intensity={0.1} /> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-4 font-light">Nuestros Productos</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 text-[#1a1a1a] leading-tight font-bold tracking-tight">
              Está bien detenerse y pedir direcciones.
            </h2>
            <p className="text-lg sm:text-xl text-[#4a4a4a] max-w-3xl leading-relaxed font-sans italic">
              No confundas un código con un plan real. Unas pocas direcciones vagas de un desarrollador simplemente no funcionarán. Lo que necesitas es una verdadera guía técnica: alguien que ha recorrido este camino muchas veces y conoce las mejores rutas hacia el éxito. No hay un camino simple hacia este destino. Por eso viajaremos a tu lado todo el camino, asegurándonos de que todos los caminos conduzcan al desarrollo que imaginas.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-8 sm:gap-10"
          >
            {products.map((product, index) => (
              <motion.a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card group block bg-white rounded-lg overflow-hidden border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <motion.img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 text-5xl bg-white/90 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center border-2 border-black">
                    {product.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-[#1a1a1a] group-hover:text-[#87d0c3] transition-colors tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-[#4a4a4a] mb-6 leading-relaxed text-base sm:text-lg font-sans font-normal">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    <motion.svg 
                      className="w-6 h-6 text-[#87d0c3]" 
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
        </div>
      </div>
    </section>
  );
}
