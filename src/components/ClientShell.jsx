'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { companyInfo } from '../data';
import ProjectLightbox from './ProjectLightbox';
import QuoteModal from './QuoteModal';

export default function ClientShell({ children }) {
  const {
    selectedProject,
    setSelectedProject,
    toastMessage,
    setToastMessage,
    isQuoteOpen,
    quoteService,
    closeQuoteModal,
    showToast,
    showFloatingWhatsApp,
    handleOpenWhatsApp,
  } = useApp();

  return (
    <>
      {/* Toast Notification Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -30, x: '-50%' }}
            className="fixed top-24 left-1/2 z-50 pointer-events-auto"
          >
            <div className="bg-inverse-surface text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/15 text-xs sm:text-sm font-bold backdrop-blur-xl">
              <CheckCircle2 className="w-5 h-5 text-primary-fixed shrink-0" />
              <span>{toastMessage}</span>
              <button
                onClick={() => setToastMessage('')}
                className="mr-2 text-white/60 hover:text-white transition-colors"
                aria-label="إغلاق التنبيه"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col bg-background text-on-background font-sans selection:bg-primary/20 selection:text-primary">
        {children}
      </div>

      {/* Floating WhatsApp Action Button */}
      <AnimatePresence>
        {showFloatingWhatsApp && (
          <motion.a
            initial={{ opacity: 0, scale: 0.4, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات اللوحات الإعلانية والإنتاج الإعلاني.')}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all group"
            aria-label="تواصل عبر الواتساب"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span className="absolute right-16 bg-inverse-surface text-white px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-white/10">
              تواصل واتساب مباشرة
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Project Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={handleOpenWhatsApp}
      />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={closeQuoteModal}
        initialService={quoteService}
        onShowToast={showToast}
      />
    </>
  );
}
