'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Quiero conocer más sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <footer className="bg-white border-t-2 border-black py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Left Column - Brand & CTAs */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-xl">DB</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black font-bold text-base tracking-wide leading-tight font-sans uppercase">DEVBROS</span>
                  <span className="text-black font-normal text-sm leading-tight font-sans">DEVELOPMENT</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
                Obtén direcciones en el camino hacia el desarrollo.
              </h3>
              
              {/* CTA Buttons */}
              <div className="space-y-3 mb-8">
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold hover:bg-[#7bc4b5] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Mi guía</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#contacto"
                  className="flex items-center justify-between w-full px-4 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold hover:bg-[#7bc4b5] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Contacto</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#proyectos"
                  className="flex items-center justify-between w-full px-4 py-3 bg-[#87d0c3] border-2 border-black rounded-lg text-black font-bold hover:bg-[#7bc4b5] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Ver proyectos</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
            
            {/* Services Column */}
            <div>
              <h4 className="font-bold mb-4 text-base text-[#1a1a1a] border-b-2 border-black pb-2 font-sans">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Desarrollo Web</a></li>
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Apps Móviles</a></li>
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">E-commerce</a></li>
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">SaaS & Dashboards</a></li>
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">APIs & Backend</a></li>
                <li><a href="#servicios" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Consultoría Técnica</a></li>
              </ul>
            </div>
            
            {/* Products Column */}
            <div>
              <h4 className="font-bold mb-4 text-base text-[#1a1a1a] border-b-2 border-black pb-2 font-sans">Productos</h4>
              <ul className="space-y-2">
                <li><a href="#proyectos" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Plataformas Web</a></li>
                <li><a href="#proyectos" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Aplicaciones Móviles</a></li>
                <li><a href="#proyectos" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Gestión de Proyectos</a></li>
                <li><a href="#proyectos" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors text-sm font-sans">Mantenimiento & Soporte</a></li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h4 className="font-bold mb-4 text-base text-[#1a1a1a] border-b-2 border-black pb-2 font-sans">Contacto</h4>
              <ul className="space-y-2 text-[#4a4a4a] text-sm font-sans">
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors flex items-center gap-2 font-sans">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li className="font-sans">Buenos Aires, Argentina</li>
                <li className="text-[#666] font-sans">Disponibles Lunes a Viernes</li>
              </ul>
              
              {/* Social Media */}
              <div className="mt-6 flex gap-3">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-[#87d0c3] border-2 border-black rounded-full flex items-center justify-center hover:bg-[#7bc4b5] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-black font-bold text-sm">in</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-[#87d0c3] border-2 border-black rounded-full flex items-center justify-center hover:bg-[#7bc4b5] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-black font-bold text-sm">f</span>
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t-2 border-black pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#4a4a4a] text-sm font-sans">
                © 2026 DevBros. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm font-sans">
                <a href="#" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors font-sans">Términos de Uso</a>
                <a href="#" className="text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors font-sans">Política de Privacidad</a>
              </div>
            </div>
            <p className="text-center mt-4 text-[#666] text-xs font-script">
              DevBros Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
