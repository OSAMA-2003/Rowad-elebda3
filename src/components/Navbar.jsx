'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { brandLogo, navLinks, companyInfo } from '../data';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useApp();

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود التواصل والاستفسار عن خدمات رواد الإبداع.')}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 w-full z-40 bg-inverse-surface/10 backdrop-blur-xl border-b border-white/10 text-white shadow-lg"
    >
      <div className="h-20 max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={brandLogo}
              alt="رواد الإبداع للإنتاج الإعلاني"
              width={180}
              height={56}
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation with Animated Active Indicator */}
        <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-8 py-2 text-xs xl:text-sm font-bold transition-colors rounded-full z-10 ${
                  isActive
                    ? 'text-white'
                    : 'text-surface-container-low hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/40"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions & WhatsApp CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#25D366]/30 flex items-center gap-2.5 hover:scale-105 active:scale-95 group"
          >
            <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>تواصل معنا</span>
          </a>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 hover:bg-white/20 text-white flex items-center justify-center transition-colors rounded-xl"
            aria-label="القائمة"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-inverse-surface/98 border-b border-white/10 px-6 py-6 space-y-4 text-right overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`text-right py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-surface-container-low hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[18px] opacity-70">
                        chevron_left
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
