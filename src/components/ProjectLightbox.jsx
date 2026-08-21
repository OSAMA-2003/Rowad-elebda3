import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data';

export default function ProjectLightbox({ project, onClose, onOpenQuote }) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-white/15 text-right z-10"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-inverse-surface/80 hover:bg-inverse-surface text-white flex items-center justify-center transition-all shadow-xl"
              aria-label="إغلاق"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
              {/* Image Column */}
              <div className="lg:col-span-7 bg-inverse-surface flex items-center justify-center min-h-[300px] lg:min-h-[460px] overflow-hidden">
                <motion.img
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  src={project.file}
                  alt={project.title}
                  className="w-full h-full object-cover max-h-[520px]"
                />
              </div>

              {/* Details Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-surface">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    <span className="material-symbols-outlined text-[16px]">folder_special</span>
                    {project.categoryName || project.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-on-surface mb-3 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.client && (
                    <div className="border-t border-b border-surface-variant py-3.5 my-4 space-y-2.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">العميل / القطاع:</span>
                        <span className="text-on-surface font-bold">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">الضمان:</span>
                        <span className="text-primary font-bold">شامل حتى 5 سنوات</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-medium">الموقع:</span>
                        <span className="text-on-surface font-semibold">المملكة العربية السعودية</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أود طلب تنفيذ مشروع إعلاني مماثل لمشروع (${project.title}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>طلب تنفيذ مماثل عبر واتساب</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 px-4 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold"
                  >
                    إغلاق النافذة
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
