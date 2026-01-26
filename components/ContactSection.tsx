'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent('¡Hola DevBros! Me interesa conocer más sobre sus servicios de desarrollo web y móvil.');
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const quickQuestions = [
    '¿Cuánto tiempo toma desarrollar una aplicación?',
    '¿Qué tecnologías usan?',
    '¿Ofrecen mantenimiento post-lanzamiento?',
    '¿Trabajan con startups?',
    '¿Cuál es su proceso de trabajo?',
    'Otro, lo escribiré en el mensaje'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll('input, textarea, select');
        gsap.fromTo(inputs,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nPregunta: ${selectedQuestion}\nMensaje: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  return (
    <section ref={sectionRef} id="contacto" className="py-20 sm:py-24 lg:py-32 bg-[#f3f9f8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-serif italic text-[#4a4a4a] mb-2 font-light">Contacto</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1a1a1a] tracking-tight">
              DevBros
            </h2>
            <p className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-[#1a1a1a] tracking-tight">
              ¿Tienes alguna pregunta?
            </p>
            <p className="text-xl text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed font-sans italic">
              Tienes preguntas, nosotros tenemos respuestas.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="bg-white rounded-lg p-8 sm:p-10 shadow-lg border-2 border-black relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="name" className="block text-sm font-bold text-[#1a1a1a] mb-2 font-sans">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans"
                  placeholder="Tu nombre"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="email" className="block text-sm font-bold text-[#1a1a1a] mb-2 font-sans">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans"
                  placeholder="tu@email.com"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="phone" className="block text-sm font-bold text-[#1a1a1a] mb-2 font-sans">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans"
                  placeholder="+54 9 11 1234-5678"
                />
              </motion.div>

              {/* Questions Dropdown */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="question" className="block text-sm font-bold text-[#1a1a1a] mb-2 font-sans">
                  Preguntas
                </label>
                <select
                  id="question"
                  value={selectedQuestion}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans"
                >
                  <option value="">Selecciona una pregunta...</option>
                  {quickQuestions.map((question, index) => (
                    <option key={index} value={question}>
                      {question}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-sm font-bold text-[#1a1a1a] mb-2 font-sans">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all resize-none bg-white font-sans"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-[#87d0c3] border-2 border-black text-[#1a1a1a] font-bold rounded-lg hover:bg-[#7bc4b5] transition-colors text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 font-sans"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar por WhatsApp
              </motion.button>
            </form>

            {/* Alternative: Direct WhatsApp */}
            <motion.div 
              className="mt-8 pt-8 border-t-2 border-black text-center relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[#4a4a4a] mb-4 font-sans">O contáctanos directamente:</p>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#87d0c3] font-bold hover:text-[#7bc4b5] transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
