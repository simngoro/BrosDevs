'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function ContactSection() {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const f = t.contact.formFields;
    const message = `${f.name}: ${formData.name}\n${f.email}: ${formData.email}\n${f.phone}: ${formData.phone}\n${f.need}: ${selectedQuestion}\n${f.message}: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`,
      '_blank'
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#fcf8f3] text-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 rounded-full bg-[#87d0c3]" />
              <span className="font-mono text-xs sm:text-sm text-black uppercase tracking-[0.3em]">
                {t.contact.label}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4 sm:mb-6">
              {t.contact.titleStart}
              <span className="italic font-light text-[#87d0c3]">{t.contact.titleAccent}</span>
              {t.contact.titleEnd}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto font-sans leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border-2 border-black relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-700 mb-2"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans text-sm sm:text-base"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-700 mb-2"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans text-sm sm:text-base"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-700 mb-2"
                  >
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans text-sm sm:text-base"
                    placeholder={t.contact.phonePlaceholder}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-700 mb-2"
                >
                  {t.contact.need}
                </label>
                <select
                  id="question"
                  value={selectedQuestion}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all bg-white font-sans text-sm sm:text-base"
                >
                  <option value="">{t.contact.needPlaceholder}</option>
                  {t.contact.questions.map((question, index) => (
                    <option key={index} value={question}>
                      {question}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gray-700 mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#87d0c3] focus:border-[#87d0c3] transition-all resize-none bg-white font-sans text-sm sm:text-base"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 sm:px-8 py-3.5 sm:py-4 bg-[#87d0c3] border-2 border-black text-black font-bold rounded-lg hover:bg-[#7bc4b5] transition-colors text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 font-sans shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.contact.submit}
              </motion.button>
            </form>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-black/10 text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-sans">
                {t.contact.orCall}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black font-bold hover:text-[#87d0c3] transition-colors font-sans text-xs sm:text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.contact.whatsappLink}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
