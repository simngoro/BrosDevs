'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [hoveredMessage, setHoveredMessage] = useState<number | null>(null);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo web y móvil.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const quickMessages = [
    { 
      text: 'Quiero desarrollar una aplicación web', 
      message: '¡Hola DevBros! Quiero desarrollar una aplicación web y me gustaría conocer más sobre sus servicios.',
      icon: '🌐',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      text: 'Necesito una app móvil', 
      message: '¡Hola DevBros! Necesito desarrollar una aplicación móvil y quiero saber más sobre sus servicios.',
      icon: '📱',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      text: 'Tengo un proyecto en mente', 
      message: '¡Hola DevBros! Tengo un proyecto en mente y me gustaría conversar sobre cómo pueden ayudarme.',
      icon: '💡',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    { 
      text: 'Quiero un presupuesto', 
      message: '¡Hola DevBros! Me gustaría solicitar un presupuesto para mi proyecto de desarrollo.',
      icon: '💰',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  const handleQuickMessage = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Respuesta rápida',
      description: 'Te respondemos en menos de 24 horas, directamente desde WhatsApp.'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Conversación directa',
      description: 'Habla directamente con los desarrolladores, sin intermediarios.'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sin complicaciones',
      description: 'No necesitas llenar formularios. Solo envía un mensaje y listo.'
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-black text-white relative overflow-hidden">
      {/* Advanced background with animated effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_60%)]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_60%)]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      {/* Advanced animated grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Advanced glow orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-[600px] h-[600px] bg-emerald-500/25 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ 
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-blue-500/25 rounded-full mix-blend-screen filter blur-3xl"
        animate={{ 
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with advanced animations */}
          <motion.div 
            className="text-center mb-20 sm:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="text-sm sm:text-base font-black text-emerald-400 uppercase tracking-[0.3em]">Contacto</span>
            </motion.div>
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 sm:mb-10 leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hablemos de tu
              </motion.span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 via-cyan-400 to-emerald-600 mt-3 sm:mt-5"
                style={{ 
                  backgroundSize: '200% 200%',
                  textShadow: '0 0 60px rgba(16, 185, 129, 0.5)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 1, delay: 0.5 },
                  scale: { duration: 1, delay: 0.5 }
                }}
              >
                próximo proyecto
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed px-4 font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Sin formularios complicados. Habla directamente con <span className="text-emerald-400 font-black">DevBros</span> por WhatsApp 
              y obtén una respuesta rápida sobre tu proyecto.
            </motion.p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left side - WhatsApp CTA with advanced glassmorphism */}
            <motion.div 
              className="space-y-8 sm:space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-emerald-500/25 to-emerald-600/25 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 xl:p-14 text-center backdrop-blur-2xl border border-emerald-500/40 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.6)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <motion.div 
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl shadow-emerald-500/60"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Habla con DevBros
                  </motion.h3>
                  <motion.p 
                    className="text-emerald-50 mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl leading-relaxed px-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Responde en menos de 24 horas. Sin spam, solo conversaciones que generan resultados.
                  </motion.p>
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl text-lg sm:text-xl shadow-2xl overflow-hidden"
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                    <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="relative z-10">Contactar por WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Quick messages with advanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h4 className="font-black mb-8 text-xl sm:text-2xl text-gray-200">Mensajes rápidos</h4>
                <div className="space-y-4">
                  {quickMessages.map((item, index) => (
                    <motion.button
                      key={index}
                      onMouseEnter={() => setHoveredMessage(index)}
                      onMouseLeave={() => setHoveredMessage(null)}
                      onClick={() => handleQuickMessage(item.message)}
                      className={`w-full text-left px-7 py-5 bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 rounded-2xl transition-all duration-300 group relative overflow-hidden`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.03, 
                        borderColor: 'rgba(16, 185, 129, 0.6)',
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0`}
                        animate={{ opacity: hoveredMessage === index ? 0.15 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10 flex items-center gap-5">
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {item.text}
                        </span>
                        <motion.svg 
                          className="w-5 h-5 ml-auto text-gray-400 group-hover:text-emerald-400"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: hoveredMessage === index ? 5 : 0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side - Features with advanced animations */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl sm:text-4xl font-black mb-10">¿Por qué WhatsApp?</h3>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-5 p-7 bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 rounded-2xl group relative overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ 
                        scale: 1.03,
                        borderColor: 'rgba(16, 185, 129, 0.5)',
                        backgroundColor: 'rgba(17, 24, 39, 0.8)',
                      }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30"
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 360,
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-black mb-2 text-lg sm:text-xl text-white">{feature.title}</h4>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-800/60 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              >
                <h4 className="font-black mb-6 text-xl sm:text-2xl text-white">Horario de atención</h4>
                <div className="space-y-3 text-gray-300">
                  <motion.p 
                    className="text-lg sm:text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    Lunes a Viernes: <span className="text-emerald-400 font-black">9:00 - 18:00</span>
                  </motion.p>
                  <motion.p 
                    className="text-lg sm:text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    Sábados: <span className="text-emerald-400 font-black">10:00 - 14:00</span>
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
