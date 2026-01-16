'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeaderSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <motion.div 
      ref={ref}
      className="text-center mb-16 sm:mb-20 lg:mb-24"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="inline-block mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider">Sobre Nosotros</span>
      </motion.div>
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ backgroundSize: '200% 200%' }}
        >
          DevBros
        </motion.span>
        <span className="block mt-2">Desarrollo que vende</span>
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        No somos una agencia tradicional. <span className="font-bold text-blue-600">DevBros</span> somos dos hermanos especializados en desarrollo web y móvil 
        que construimos aplicaciones que generan resultados reales para tu negocio.
      </motion.p>
    </motion.div>
  );
}

function ServicesGrid({ services }: { services: any[] }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <motion.div 
      ref={ref}
      className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-20"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/50 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Animated background gradient */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Glow effect */}
          <motion.div 
            className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredCard === index ? 0.2 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="relative z-10">
            {/* Icon with animated background */}
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.div>
            
            <h3 
              className={`text-2xl sm:text-3xl font-black mb-4 transition-all duration-300 ${
                hoveredCard === index 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500' 
                  : 'text-gray-900'
              }`}
            >
              {service.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6">
              {service.description}
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Stack:</span>
              <span className={`text-sm font-bold bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                {service.tech}
              </span>
            </div>
            
            {/* Decorative element */}
            <motion.div 
              className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl`}
              animate={hoveredCard === index ? { scale: 1.5 } : { scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AboutSection() {
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Quiero conocer más sobre sus servicios de desarrollo.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas, rápidas y escalables. Desde landing pages hasta plataformas complejas.',
      tech: 'React, Next.js, Node.js',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 via-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Apps Móviles',
      description: 'Aplicaciones móviles nativas y multiplataforma. iOS y Android con una sola base de código.',
      tech: 'React Native, Flutter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-cyan-500 via-blue-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50'
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <HeaderSection />
          <ServicesGrid services={services} />
          
          {/* Main content with glassmorphism card */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 sm:space-y-8">
              {[
                { title: 'DevBros', subtitle: '— Código que vende', text: 'Cada línea que escribimos tiene un objetivo: hacer crecer tu negocio. Sin burocracia, sin intermediarios. Solo código de calidad que genera resultados.' },
                { title: 'La ventaja', subtitle: 'DevBros', text: 'Como hermanos developers, nos entendemos sin palabras. Compartimos la misma visión y estándares de calidad. Eso se traduce en proyectos más rápidos, consistentes y rentables.' },
                { title: 'Tecnología que escala', subtitle: '', text: 'Trabajamos con las herramientas más modernas del mercado. Tu proyecto no solo funcionará hoy, sino que crecerá con tu negocio sin límites.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-blue-600">{item.title}</span>
                    {item.subtitle && <span className={item.subtitle === 'DevBros' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500' : ''}>{item.subtitle}</span>}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Stats card with glassmorphism */}
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-gray-800/50 backdrop-blur-sm">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl font-black">DB</span>
                    </motion.div>
                    <div>
                      <div className="font-black text-xl sm:text-2xl">DevBros</div>
                      <div className="text-xs sm:text-sm text-gray-400">Desarrollo Web & Mobile</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { label: 'Proyectos completados', value: '50+', color: 'text-blue-500' },
                      { label: 'Años de experiencia', value: '8+', color: 'text-cyan-500' },
                      { label: 'Tecnologías', value: '15+', color: 'text-blue-600' },
                      { label: 'Satisfacción', value: '100%', color: 'text-emerald-500' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800/50 last:border-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-400 text-xs sm:text-sm transition-colors">{stat.label}</span>
                        <motion.span 
                          className={`text-2xl sm:text-3xl font-black ${stat.color}`}
                          whileHover={{ scale: 1.2 }}
                        >
                          {stat.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-20 blur-xl -z-10"></div>
            </motion.div>
          </motion.div>
          
          {/* CTA Section with gradient */}
          <motion.div 
            className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated background */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                ¿Listo para hacer crecer tu negocio?
              </h3>
              <p className="text-blue-50 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Hablemos de tu proyecto. Te damos una respuesta honesta sobre qué podemos hacer, 
                en cuánto tiempo y cuánto va a costar. Sin sorpresas, solo resultados.
              </p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-black rounded-2xl text-lg shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
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
