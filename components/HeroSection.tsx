'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo web y móvil.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  useEffect(() => {
    setMounted(true);
    // Generate particles only on client side
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Animated grid pattern with 3D effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center center'
          }}
        ></div>
      </div>
      
      {/* Floating particles - only render on client */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 blur-sm"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            ></div>
          ))}
        </div>
      )}
      
      {/* Glassmorphism orbs */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge with glassmorphism */}
          <div className="inline-flex items-center px-5 py-2.5 sm:px-7 sm:py-3 mb-8 sm:mb-10 text-xs sm:text-sm font-medium text-gray-200 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-lg shadow-blue-500/20">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></span>
            <span className="hidden sm:inline">Disponibles para nuevos proyectos</span>
            <span className="sm:hidden">Disponibles ahora</span>
          </div>
          
          {/* Main heading with advanced gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 leading-[0.9] tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-[length:200%_200%] animate-gradient-slow">
              DevBros
            </span>
            <span className="block text-white mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Desarrollo Web & Mobile
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4 font-medium">
            Transformamos tus ideas en aplicaciones que generan resultados.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-14 leading-relaxed max-w-3xl mx-auto px-4">
            <span className="text-blue-400 font-bold">DevBros</span> somos dos hermanos especializados en desarrollo web y móvil. 
            <span className="text-cyan-400 font-semibold"> Sin intermediarios, sin complicaciones.</span> 
            <span className="text-white"> Solo código de calidad que vende.</span>
          </p>
          
          {/* CTA Buttons with 3D effect */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center mb-14 sm:mb-20 px-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-green-500 via-green-500 to-green-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 text-lg sm:text-xl shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">Hablar por WhatsApp</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#proyectos"
              className="px-10 sm:px-12 py-5 sm:py-6 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 text-lg sm:text-xl shadow-xl"
            >
              Ver Proyectos
            </a>
          </div>
          
          {/* Stats with glassmorphism */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-3xl sm:max-w-4xl mx-auto px-4">
            {[
              { value: '50+', label: 'Proyectos', color: 'from-blue-400 to-cyan-400' },
              { value: 'DevBros', label: 'Hermanos Dev', color: 'from-cyan-400 to-blue-500' },
              { value: '100%', label: 'Resultados', color: 'from-green-400 to-emerald-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 sm:mb-3`}>
                  <span className="block sm:inline">{stat.value}</span>
                </div>
                <div className="text-[10px] xs:text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mt-1 sm:mt-2 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) translateX(15px) scale(1.2); 
            opacity: 0.8;
          }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
        }
        @keyframes gradient-slow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-gradient-slow {
          animation: gradient-slow 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
