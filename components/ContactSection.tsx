'use client';

import { useState } from 'react';

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
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      text: 'Tengo un proyecto en mente', 
      message: '¡Hola DevBros! Tengo un proyecto en mente y me gustaría conversar sobre cómo pueden ayudarme.',
      icon: '💡',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      text: 'Quiero un presupuesto', 
      message: '¡Hola DevBros! Me gustaría solicitar un presupuesto para mi proyecto de desarrollo.',
      icon: '💰',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const handleQuickMessage = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Respuesta rápida',
      description: 'Te respondemos en menos de 24 horas, directamente desde WhatsApp.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Conversación directa',
      description: 'Habla directamente con los desarrolladores, sin intermediarios.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sin complicaciones',
      description: 'No necesitas llenar formularios. Solo envía un mensaje y listo.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black text-white relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-green-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm sm:text-base font-bold text-green-400 uppercase tracking-wider">Contacto</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              Hablemos de tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600">
                próximo proyecto
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Sin formularios complicados. Habla directamente con <span className="text-green-400 font-bold">DevBros</span> por WhatsApp 
              y obtén una respuesta rápida sobre tu proyecto.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left side - WhatsApp CTA with glassmorphism */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 text-center backdrop-blur-xl border border-green-500/30 shadow-2xl overflow-hidden">
                {/* Animated background */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl shadow-green-500/50">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">Habla con DevBros</h3>
                  <p className="text-green-100 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                    Responde en menos de 24 horas. Sin spam, solo conversaciones que generan resultados.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-green-600 font-black rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg shadow-2xl"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Quick messages */}
              <div>
                <h4 className="font-black mb-6 text-lg sm:text-xl text-gray-300">Mensajes rápidos</h4>
                <div className="space-y-3">
                  {quickMessages.map((item, index) => (
                    <button
                      key={index}
                      onMouseEnter={() => setHoveredMessage(index)}
                      onMouseLeave={() => setHoveredMessage(null)}
                      onClick={() => handleQuickMessage(item.message)}
                      className={`w-full text-left px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-green-500/50 hover:bg-gray-900 transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden`}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10 flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm sm:text-base font-semibold text-white group-hover:text-green-400 transition-colors">
                          {item.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-8">¿Por qué WhatsApp?</h3>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-green-500/30 hover:bg-gray-900 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform border border-green-500/20">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-black mb-2 text-base sm:text-lg text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <h4 className="font-black mb-4 text-lg sm:text-xl text-white">Horario de atención</h4>
                <div className="space-y-2 text-gray-300">
                  <p className="text-base sm:text-lg">Lunes a Viernes: <span className="text-green-400 font-bold">9:00 - 18:00</span></p>
                  <p className="text-base sm:text-lg">Sábados: <span className="text-green-400 font-bold">10:00 - 14:00</span></p>
                </div>
              </div>
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
