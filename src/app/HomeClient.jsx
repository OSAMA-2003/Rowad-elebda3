'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  localImages,
  heroDesktop,
  heroMobile,
  featuredCaseStudy,
  statsData,
  servicesData,
  whyUsData,
  processData,
  industriesData,
  companyInfo
} from '../data';
import StatsCounter from '../components/StatsCounter';
import SplitText from '../components/SplitText';
import LocationMap from '../components/LocationMap';
import { useApp } from '../context/AppContext';

export default function HomeClient() {
  const router = useRouter();
  const { setSelectedProject } = useApp();
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');

  const portfolioCategories = [
    { key: 'all', label: 'الكل' },
    { key: 'signs', label: 'لوحات إعلانية' },
    { key: '3d-letters', label: 'حروف مضيئة' },
    { key: 'printing', label: 'مطبوعات' },
    { key: 'booths', label: 'أجنحة معارض' },
    { key: 'vehicles', label: 'تغليف سيارات' }
  ];

  const filteredPortfolio =
    activePortfolioFilter === 'all'
      ? localImages.slice(0, 6)
      : localImages.filter((img) => img.category === activePortfolioFilter).slice(0, 6);

  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden text-right">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Desktop View Image */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden md:block w-full h-full relative"
          >
            <Image
              src={heroDesktop}
              alt="رواد الإبداع للإنتاج الإعلاني - واجهة متجر وتصنيع لوحات إعلانية"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          {/* Mobile View Image */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="block md:hidden w-full h-full relative"
          >
            <Image
              src={heroMobile}
              alt="رواد الإبداع للدعاية والإعلان - واجهة المتجر على الجوال"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS COUNTER BAR */}
      <section className="w-full bg-white text-slate-900 py-12 relative z-30 border-y border-slate-200 shadow-md">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-sm"
          >
            {statsData.slice(0, 4).map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 border-b md:border-b-0 md:border-l last:border-0 border-slate-200 pb-4 md:pb-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-1 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                </div>
                <span className="text-3xl sm:text-4xl lg:text-5xl text-primary font-black tracking-tight">
                  +<StatsCounter target={stat.value} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="w-full bg-[#071325] text-white py-20 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary-fixed font-black text-xs uppercase mb-2">
                <span className="w-8 h-0.5 bg-primary-fixed rounded-full"></span>
                <span>خدمات رواد الإبداع المتميزة</span>
              </div>
              <SplitText
                text="حلول إعلانية وهندسية متكاملة لعلامتك التجارية"
                className="text-2xl sm:text-4xl font-black text-white md:pb-3"
                tag="h2"
                delay={50}
                duration={0.6}
                textAlign="right"
              />
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                نقدم في رواد الإبداع مجموعة شاملة من الخدمات الإعلانية لتلبية كافة احتياجات المحلات والشركات بأعلى معايير الجودة واشتراطات منصة بلدي.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-fixed hover:text-white font-black text-sm group"
            >
              <span>تصفح كافة الخدمات</span>
              <span className="material-symbols-outlined transform group-hover:-translate-x-1.5 transition-transform">
                arrow_back
              </span>
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => router.push('/services')}
                className="group bg-white/5 hover:bg-white/10 rounded-3xl border border-white/10 p-8 shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-fixed group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-primary/30">
                      <span className="material-symbols-outlined text-[28px]">
                        {service.icon}
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-400">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-fixed transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/10 text-primary-fixed text-xs font-bold">
                  <span>اكتشف التفاصيل الهندسية</span>
                  <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1.5 transition-transform">
                    arrow_back
                  </span>
                </div>

                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-primary-fixed scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDY */}
      <section className="w-full bg-white py-20 lg:py-28 border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text & Steps */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-2 text-primary font-black text-xs uppercase mb-2">
                <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                <span>دراسة حالة واقعية | رواد الإبداع</span>
              </div>

              <SplitText
                text="من الفكرة الهندسية إلى التنفيذ الواقعي المتقن"
                className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 md:pb-3"
                tag="h2"
                delay={50}
                duration={0.6}
                textAlign="right"
              />

              <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
                {featuredCaseStudy.description}
              </p>

              <div className="space-y-3.5 mb-8">
                {featuredCaseStudy.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 relative group h-[420px]">
                <Image
                  src={localImages[1].file}
                  alt="تنفيذ منصات عرض ولوحات إعلانية - رواد الإبداع"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold text-primary-fixed mb-1">
                    {featuredCaseStudy.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">
                    {featuredCaseStudy.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <span>العميل: {featuredCaseStudy.client}</span>
                    <span>•</span>
                    <span>المدينة: {featuredCaseStudy.city}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="w-full bg-[#0a192f] text-white py-20 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-primary-fixed font-black text-xs uppercase mb-2">
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
              <span>معرض أعمال رواد الإبداع</span>
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
            </div>
            <SplitText
              text="نماذج من مشاريع اللوحات والدعاية المنفذة"
              className="text-2xl sm:text-4xl font-black text-white md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              نفخر في رواد الإبداع بتنفيذ مشاريع مميزة لعملائنا في مختلف القطاعات التجارية والصناعية بالسعودية.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActivePortfolioFilter(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  activePortfolioFilter === cat.key
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/5 border border-white/10"
              >
                <div className="relative h-72 overflow-hidden bg-black/40">
                  <Image
                    src={item.file}
                    alt={`${item.title} - رواد الإبداع للإنتاج الإعلاني`}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-xs text-primary-fixed font-bold mb-1">
                      {item.categoryName}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border-2 border-primary-fixed text-primary-fixed font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm bg-white/5"
            >
              <span>استعراض كافة أعمال رواد الإبداع</span>
              <span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="w-full bg-gradient-to-b from-[#f0f6ff] via-white to-[#f0f6ff] py-20 lg:py-28 border-y border-blue-100">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase mb-2">
              <span className="w-6 h-0.5 bg-primary rounded-full"></span>
              <span>مميزات رواد الإبداع التنافسية</span>
              <span className="w-6 h-0.5 bg-primary rounded-full"></span>
            </div>
            <SplitText
              text="لماذا يختار عملاؤنا رواد الإبداع؟"
              className="text-2xl sm:text-4xl font-black text-slate-900 md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              نجمع في رواد الإبداع بين الدقة الهندسية والخبرة العريقة لتقديم تجربة إنتاج إعلاني استثنائية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 border border-blue-100 text-center flex flex-col items-center hover:shadow-2xl hover:border-primary/40 transition-all group shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION WORKFLOW */}
      <section className="w-full bg-[#071325] text-white py-20 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-primary-fixed font-black text-xs uppercase mb-2">
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
              <span>خطوات التنفيذ في رواد الإبداع</span>
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
            </div>
            <SplitText
              text="آلية عمل هندسية مدروسة تضمن الجودة"
              className="text-2xl sm:text-4xl font-black text-white md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              ٥ خطوات واضحة تضمن تسليم مشروعك الإعلاني بأعلى درجات الاحترافية والالتزام.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processData.map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-primary/30">
                  {proc.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES SERVED */}
      <section className="w-full bg-[#f8fafc] py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase mb-2">
              <span className="w-6 h-0.5 bg-primary rounded-full"></span>
              <span>القطاعات التي نخدمها</span>
              <span className="w-6 h-0.5 bg-primary rounded-full"></span>
            </div>
            <SplitText
              text="نخدم كبرى الشركات والأنشطة التجارية في السعودية"
              className="text-2xl sm:text-4xl font-black text-slate-900 md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {industriesData.map((ind, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/40 transition-all border border-slate-200/80 flex flex-col items-center group cursor-default shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">
                    {ind.icon}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {ind.title}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GOOGLE MAPS & PHYSICAL LOCATION */}
      <LocationMap theme="dark" />
    </div>
  );
}
