'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
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
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
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
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-block mb-4">
              <span className="text-sm sm:text-base font-bold text-blue-600 uppercase tracking-wider">Sobre Nosotros</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
                DevBros
              </span>
              <span className="block mt-2">Desarrollo que vende</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              No somos una agencia tradicional. <span className="font-bold text-blue-600">DevBros</span> somos dos hermanos especializados en desarrollo web y móvil 
              que construimos aplicaciones que generan resultados reales para tu negocio.
            </p>
          </div>
          
          {/* Services Grid with 3D cards */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/50 hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
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
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Main content with glassmorphism card */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            <div className="space-y-6 sm:space-y-8">
              <div className="group">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-blue-600">DevBros</span>
                  <span>— Código que vende</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Cada línea que escribimos tiene un objetivo: hacer crecer tu negocio. 
                  Sin burocracia, sin intermediarios. Solo código de calidad que genera resultados.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">
                  La ventaja <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">DevBros</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Como hermanos developers, nos entendemos sin palabras. Compartimos la misma visión y estándares de calidad. 
                  Eso se traduce en proyectos más rápidos, consistentes y rentables.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">Tecnología que escala</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  Trabajamos con las herramientas más modernas del mercado. Tu proyecto no solo funcionará hoy, 
                  sino que crecerá con tu negocio sin límites.
                </p>
              </div>
            </div>
            
            {/* Stats card with glassmorphism */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-gray-800/50 backdrop-blur-sm">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <span className="text-lg sm:text-xl lg:text-2xl font-black">DB</span>
                    </div>
                    <div>
                      <div className="font-black text-xl sm:text-2xl">DevBros</div>
                      <div className="text-xs sm:text-sm text-gray-400">Desarrollo Web & Mobile</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { label: 'Proyectos completados', value: '50+', color: 'text-blue-400' },
                      { label: 'Años de experiencia', value: '8+', color: 'text-cyan-400' },
                      { label: 'Tecnologías', value: '15+', color: 'text-purple-400' },
                      { label: 'Satisfacción', value: '100%', color: 'text-green-400' }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-800/50 last:border-0 group">
                        <span className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors">{stat.label}</span>
                        <span className={`text-2xl sm:text-3xl font-black ${stat.color} group-hover:scale-110 transition-transform`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
          
          {/* CTA Section with gradient */}
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-10 sm:p-14 text-white text-center overflow-hidden">
            {/* Animated background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                ¿Listo para hacer crecer tu negocio?
              </h3>
              <p className="text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Hablemos de tu proyecto. Te damos una respuesta honesta sobre qué podemos hacer, 
                en cuánto tiempo y cuánto va a costar. Sin sorpresas, solo resultados.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
