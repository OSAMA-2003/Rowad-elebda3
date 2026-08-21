import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { localImages, companyInfo } from '../data';
import SplitText from '../components/SplitText';

export default function Portfolio({ onOpenQuote, onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'الكل' },
    { key: 'signs', label: 'لوحات إعلانية' },
    { key: '3d-letters', label: 'حروف بارزة ومضيئة' },
    { key: 'printing', label: 'مطبوعات' },
    { key: 'booths', label: 'أجنحة معارض' },
    { key: 'vehicles', label: 'تغليف سيارات' }
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? localImages
      : localImages.filter((img) => img.category === selectedFilter);

  return (
    <div className="flex flex-col w-full text-right bg-surface overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pb-24 px-4 sm:px-6 lg:px-16  bg-inverse-surface overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96  bg-inverse-surface blur-[120px] rounded-full pointer-events-none"></div>

        <div className=" relative z-10 max-w-container-max mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >

            <SplitText
              text="مشاريع نفخر بها وتصنع الفارق"
              className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight md:pb-3"
              tag="h1"
              delay={50}
              duration={0.6}
              textAlign="right"
            />
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              نستعرض هنا نخبة من أعمالنا المنفذة في مختلف مدن المملكة والتي تجسد دمجنا بين الهندسة الدقيقة والإبداع الفني. كل مشروع هو قصة نجاح وشراكة استراتيجية مع عملائنا.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full md:w-1/3 flex md:justify-end"
          >
            <div className="text-right p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-surface-variant shadow-xl">
              <p className="text-3xl sm:text-4xl font-black text-primary mb-1">+100</p>
              <p className="text-xs font-bold text-on-surface-variant uppercase">
                مشروع منجز بنجاح تام
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER TABS & PROJECT GRID */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-16 max-w-container-max mx-auto w-full">
        {/* Category Filters (Static) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${selectedFilter === cat.key
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'bg-surface-container-lowest text-on-surface border border-outline-variant hover:bg-surface-container'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid (Static) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-surface-container-lowest border border-surface-variant flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-inverse-surface">
                <img
                  src={project.file}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full text-[11px] font-bold border border-white/20 shadow-md">
                    {project.categoryName}
                  </span>
                </div>

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs text-primary-fixed font-bold mb-1">
                    {project.client || 'مشروع منفذ'}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-primary-fixed text-xs font-bold">
                    <span>عرض تفاصيل ومواصفات المشروع</span>
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-5 bg-surface-container-lowest border-t border-surface-variant flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-[11px] text-on-surface-variant">
                    {project.categoryName}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[18px] transform -scale-x-100">
                    arrow_outward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-16 bg-inverse-surface text-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <SplitText
            text="هل أنت مستعد لبدء مشروعك الإعلاني القادم؟"
            className="text-2xl sm:text-4xl font-black mb-4 text-white justify-center md:pb-3"
            tag="h2"
            delay={50}
            duration={0.6}
            textAlign="center"
          />
          <p className="text-sm sm:text-base text-surface-container-low mb-8 leading-relaxed max-w-xl mx-auto">
            دعنا نحول رؤيتك إلى واقع ملموس بدقة هندسية وجودة لا تضاهى. تواصل مع فريق الخبراء لدينا اليوم لمناقشة متطلباتك والحصول على تسعيرة مفصلة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار وطلب عرض سعر لمشروع إعلاني بعد الاطلاع على سابقة الأعمال.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-sm transition-all shadow-xl shadow-[#25D366]/30 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>طلب عرض سعر عبر واتساب</span>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>اتصال مباشر بالمبيعات</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
