'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { localImages, companyInfo } from '../../data';
import SplitText from '../../components/SplitText';
import { Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PortfolioClient() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { setSelectedProject } = useApp();

  const categories = [
    { key: 'all', label: 'الكل' },
    { key: 'signs', label: 'لوحات إعلانية' },
    { key: '3d-letters', label: 'حروف بارزة ومضيئة' },
    { key: 'displays', label: 'منصات وستاندات عرض' },
    { key: 'booths', label: 'أجنحة ومعارض' },
    { key: 'acrylic', label: 'منتجات أكريليك' },
    { key: 'awards', label: 'دروع وتكريم' },
    { key: 'digital-screens', label: 'شاشات تفاعلية' }
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? localImages
      : localImages.filter((img) => img.category === selectedFilter);

  return (
    <div className="flex flex-col w-full text-right overflow-hidden bg-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-inverse-surface text-white pt-36 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
            <span className="text-xs font-black text-primary-fixed uppercase tracking-wider">
              معرض أعمال رواد الإبداع
            </span>
          </div>

          <SplitText
            text="سجل حافل بالإبداع والمشاريع المنفذة"
            className="text-3xl sm:text-5xl font-black mb-6 leading-tight text-white justify-center md:pb-3"
            tag="h1"
            delay={50}
            duration={0.6}
            textAlign="center"
          />

          <p className="text-base sm:text-lg text-surface-container-low max-w-2xl mx-auto leading-relaxed">
            استكشف مجموعة من أبرز المشاريع واللوحات الإعلانية التي قمنا بتصميمها وتصنيعها وتركيبها لكبرى العلامات التجارية في المملكة العربية السعودية.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SECTION */}
      <section className="py-16 sm:py-24 max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 w-full">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedFilter(category.key)}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedFilter === category.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer bg-surface-container-lowest border border-surface-variant flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-inverse-surface">
                <Image
                  src={project.file}
                  alt={`${project.title} - مشروع منفذ بواسطة رواد الإبداع`}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    {project.client || 'مشروع منفذ في السعودية'}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="p-5 flex items-center justify-between border-t border-surface-variant bg-surface">
                <div>
                  <h4 className="text-sm font-bold text-on-surface line-clamp-1">
                    {project.title}
                  </h4>
                  <span className="text-xs text-on-surface-variant">
                    {project.categoryName}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-high group-hover:bg-primary group-hover:text-white flex items-center justify-center text-on-surface-variant transition-colors shrink-0">
                  <Eye className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-20 bg-inverse-surface text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <SplitText
            text="هل ترغب بتنفيذ مشروع مشابه لعلامتك التجارية مع رواد الإبداع؟"
            className="text-2xl sm:text-4xl font-black mb-4 text-white justify-center md:pb-3"
            tag="h2"
            delay={50}
            duration={0.6}
            textAlign="center"
          />
          <p className="text-surface-container-low text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            تواصل معنا الآن لمناقشة أفكار مشروعك والحصول على دراسة فنية وعرض سعر مخصص من خبراء رواد الإبداع.
          </p>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، شاهدت معرض أعمال رواد الإبداع وأود طلب عرض سعر لتنفيذ مشروع مشابه.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl shadow-[#25D366]/30 inline-flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>اطلب عرض سعر لمشروعك عبر واتساب</span>
          </a>
        </div>
      </section>
    </div>
  );
}
