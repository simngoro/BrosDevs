'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PeopleTalkingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Logos de medios/plataformas donde DevBros ha sido mencionado
  const logos = [
    { name: 'Product Hunt', color: 'bg-orange-500', borderColor: 'border-orange-600' },
    { name: 'Hacker News', color: 'bg-orange-600', borderColor: 'border-orange-700' },
    { name: 'GitHub', color: 'bg-gray-800', borderColor: 'border-gray-900' },
    { name: 'Dev.to', color: 'bg-black', borderColor: 'border-gray-900' },
    { name: 'Medium', color: 'bg-gray-700', borderColor: 'border-gray-800' },
    { name: 'LinkedIn', color: 'bg-blue-600', borderColor: 'border-blue-700' },
    { name: 'Twitter', color: 'bg-blue-400', borderColor: 'border-blue-500' },
  ];

  return (
    <section className="py-8 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-serif italic text-[#1a1a1a] mb-6">
            La gente está hablando
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {logos.map((logo, index) => (
            <motion.a
              key={index}
              href="#"
              className={`w-28 h-14 sm:w-32 sm:h-16 ${logo.color} border-2 ${logo.borderColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white text-xs sm:text-sm font-bold px-2 text-center">{logo.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
