'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const prices = ['USD 900', 'USD 3.500', 'USD 6.900', t.pricing.priceCustom];
  const recommended = [false, false, true, false];
  const badges = [null, null, t.pricing.recommended, null];

  return (
    <section
      id="precios"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] text-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-black uppercase tracking-[0.3em] mb-4 sm:mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#87d0c3]" />
              {t.pricing.label}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6"
            >
              {t.pricing.titleStart}
              <span className="italic font-light text-[#87d0c3]">
                {t.pricing.titleAccent}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed"
            >
              {t.pricing.subtitle}
            </motion.p>
          </div>

          {/* Pricing cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.pricing.plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-6 sm:p-8 border-2 transition-all flex flex-col ${
                  recommended[i]
                    ? 'bg-[#0a0a0a] text-white border-black shadow-[0_0_40px_rgba(135,208,195,0.3)] lg:scale-105'
                    : 'bg-white text-black border-black'
                }`}
              >
                {badges[i] && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-[#87d0c3] text-black font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] rounded-full border-2 border-black font-bold whitespace-nowrap">
                    {badges[i]}
                  </div>
                )}

                <div
                  className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 ${
                    recommended[i] ? 'text-[#87d0c3]' : 'text-gray-500'
                  }`}
                >
                  {plan.name}
                </div>
                <p
                  className={`text-sm font-sans mb-5 sm:mb-6 ${
                    recommended[i] ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="mb-5 sm:mb-6">
                  <div
                    className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold ${
                      recommended[i] ? 'text-white' : 'text-black'
                    }`}
                  >
                    {prices[i]}
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 ${
                      recommended[i] ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {plan.priceSub}
                  </div>
                </div>

                <div className={`h-px mb-5 sm:mb-6 ${recommended[i] ? 'bg-white/10' : 'bg-black/10'}`} />

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 text-xs sm:text-sm font-sans ${
                        recommended[i] ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#87d0c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-bold font-sans text-sm sm:text-base transition-colors ${
                    recommended[i]
                      ? 'bg-[#87d0c3] text-black hover:bg-[#7bc4b5]'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <p className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.3em] px-4">
              {t.pricing.footer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
