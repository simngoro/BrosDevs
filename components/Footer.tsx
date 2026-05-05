'use client';

import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const whatsappNumber = '+5492915109116';
  const whatsappMessage = encodeURIComponent(t.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-white/10 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-11 h-11 bg-[#87d0c3] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(135,208,195,0.4)]">
                  <span className="text-black font-black text-lg tracking-tight font-sans">DB</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base tracking-wider leading-tight font-sans">
                    DEVBROS
                  </span>
                  <span className="text-[#87d0c3] font-mono text-[10px] leading-tight uppercase tracking-[0.2em]">
                    {t.header.tagline}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-md mb-5 sm:mb-6">
                {t.footer.tagline}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <LanguageToggle variant="dark" />
              </div>
              <div className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                {t.footer.sysLabel}
              </div>
            </div>

            {/* Producto */}
            <div>
              <h4 className="font-mono text-[10px] sm:text-xs text-[#87d0c3] uppercase tracking-[0.3em] mb-3 sm:mb-4">
                {t.footer.productLabel}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#proceso" className="text-sm hover:text-white transition-colors font-sans">
                    {t.footer.productLinks.process}
                  </a>
                </li>
                <li>
                  <a href="#industrias" className="text-sm hover:text-white transition-colors font-sans">
                    {t.footer.productLinks.industries}
                  </a>
                </li>
                <li>
                  <a href="#precios" className="text-sm hover:text-white transition-colors font-sans">
                    {t.footer.productLinks.pricing}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm hover:text-white transition-colors font-sans">
                    {t.footer.productLinks.faq}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-mono text-[10px] sm:text-xs text-[#87d0c3] uppercase tracking-[0.3em] mb-3 sm:mb-4">
                {t.footer.contactLabel}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors flex items-center gap-2 font-sans"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.footer.whatsapp}
                  </a>
                </li>
                <li className="text-sm font-sans">{t.footer.location}</li>
                <li className="text-sm text-gray-500 font-sans">{t.footer.hours}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-xs text-gray-500 font-sans text-center md:text-left">
                {t.footer.copyright}
              </p>
              <div className="flex gap-6 text-xs font-sans">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {t.footer.terms}
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  {t.footer.privacy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
