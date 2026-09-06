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
import LucideIcon from '../components/LucideIcon';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HomeClient() {
  const router = useRouter();
  const { setSelectedProject } = useApp();
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');

  const portfolioCategories = [
    { key: 'all', label: 'الكل' },
    { key: 'signs', label: 'لوحات إعلانية' },
    { key: '3d-letters', label: 'حروف بارزة' },
    { key: 'displays', label: 'منصات وستاندات' },
    { key: 'booths', label: 'أجنحة معارض' },
    { key: 'awards', label: 'دروع وهدايا' },
    { key: 'acrylic', label: 'أكريليك' }
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
              alt="شركة دعاية وإعلان وتصنيع لوحات محلات وحروف بارزة مضيئة بالسعودية - رواد الإبداع"
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
              alt="وكالة دعاية وإعلان وتصنيع لوحات اعلانية بالرياض وجدة - رواد الإبداع"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </div>

        {/* Primary Semantic H1 Heading for Search Engines & Accessibility */}
        <h1 className="sr-only">
          شركة دعاية وإعلان ووكالة إنتاج إعلاني وتصنيع لوحات المحلات بالسعودية | رواد الإبداع
        </h1>
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
                  <LucideIcon name={stat.icon} className="w-6 h-6" />
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
              <ArrowLeft className="w-4.5 h-4.5 transform group-hover:-translate-x-1.5 transition-transform" />
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
                      <LucideIcon name={service.icon} className="w-7 h-7" />
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
                  <ArrowLeft className="w-4.5 h-4.5 transform group-hover:-translate-x-1.5 transition-transform" />
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
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-4/3 group">
                <Image
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold text-primary-fixed bg-primary-container/80 backdrop-blur-md px-3 py-1 rounded-full w-max mb-2">
                    مشروع مميز
                  </span>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {featuredCaseStudy.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="w-full bg-[#071325] text-white py-20 lg:py-28 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-primary-fixed font-black text-xs uppercase mb-2">
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
              <span>معرض المشاريع الواقعية</span>
              <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
            </div>
            <SplitText
              text="شاهد نماذج حية من إبداعاتنا في المملكة"
              className="text-2xl sm:text-4xl font-black text-white md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              مئات المشاريع الناجحة التي نفذناها لكبرى الماركات والمحلات والشركات.
            </p>
          </div>

          {/* Portfolio Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActivePortfolioFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activePortfolioFilter === cat.key
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(item)}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 bg-slate-900 cursor-pointer shadow-xl border border-white/10"
              >
                <Image
                  src={item.file}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6 text-white text-right">
                  <span className="text-[11px] font-bold text-primary-fixed mb-1.5">
                    {item.categoryName || item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-primary-fixed transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border-2 border-primary-fixed text-primary-fixed font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm bg-white/5"
            >
              <span>استعراض كافة أعمال رواد الإبداع</span>
              <ArrowLeft className="mr-2 w-4.5 h-4.5" />
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
                  <LucideIcon name={item.icon} className="w-8 h-8" />
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
                  <LucideIcon name={ind.icon} className="w-6 h-6" />
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

      {/* 8.5 SEO INFORMATION & BRAND CONTENT */}
      <section className="w-full bg-white py-16 border-t border-slate-200">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 text-right">
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-r-4 border-primary pr-3">
              أفضل شركة دعاية وإعلان ووكالة إنتاج إعلاني في جدة والرياض
            </h2>
            <p>
              تعتبر <strong className="text-primary font-bold">شركة رواد الإبداع للدعاية والإعلان</strong> واحدة من أبرز وأفضل شركات الدعاية والإعلان والإنتاج الإعلاني في المملكة العربية السعودية. نقدم حلولاً هندسية متكاملة تشمل تصنيع وتنفيذ اللوحات الإعلانية للمحلات، واجهات الكلادينج الحديثة، الحروف البارزة والمضيئة 3D، والطباعة الرقمية UV بكافة أنواعها وفق أعلى معايير الجودة وااشتراطات منصة بلدي.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2 text-base">تصنيع لوحات محلات وتكسية كلادينج</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تصنيع وتركيب لوحات الحروف البارزة (زنكور، استيل، أكريليك مضيء) وتكسية واجهات المباني والمحلات بأجود أنواع الكلادينج المقاوم للحريق.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2 text-base">خدمات وكالة دعاية وإعلان متكاملة</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تجهيز أجنحة المعارض والمؤتمرات، تغليف أساطيل سيارات الشركات، وتصنيع الهدايا والدروع التذكارية من الأكريليك الفاخر.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2 text-base">تغطية شاملة في جدة والرياض والمملكة</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  فريقنا الهندسي والفني يغطي جدة، الرياض، مكة، المدينة المنورة، والمنطقة الشرقية بشبكة تركيبات سريعة وضمان شامل يمتد حتى 5 سنوات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GOOGLE MAPS & PHYSICAL LOCATION */}
      <LocationMap theme="dark" />
    </div>
  );
}
