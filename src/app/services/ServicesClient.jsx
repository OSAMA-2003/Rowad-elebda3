'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { servicesData, qualityStandards, localImages, companyInfo } from '../../data';
import SplitText from '../../components/SplitText';
import LucideIcon from '../../components/LucideIcon';
import { Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ServicesClient() {
  const { openQuoteModal } = useApp();

  return (
    <div className="flex flex-col w-full text-right overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-inverse-surface pt-32 pb-20 overflow-hidden">
        {/* Background Image with Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.28 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full relative"
          >
            <Image
              src="/service.png"
              alt="خدمات شركة دعاية وإعلان وتصنيع لوحات محلات وتكسية كلادينج - رواد الإبداع"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/85 to-transparent"></div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-fixed text-xs font-bold mb-6 backdrop-blur-md">
            <Cpu className="w-4 h-4" />
            <span>خدمات وكالة دعاية وإعلان متكاملة بالسعودية</span>
          </div>

          <SplitText
            text="خدمات شركة دعاية وإعلان وتصنيع لوحات محلات وكلادينج"
            className="text-3xl sm:text-5xl font-black mb-6 leading-tight text-white justify-center md:pb-3"
            tag="h1"
            delay={50}
            duration={0.6}
            textAlign="center"
          />

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-surface-container-low max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            نقدم في رواد الإبداع مجموعة شاملة من خدمات الإنتاج الإعلاني والتصنيع، من اللوحات الخارجية العملاقة إلى التفاصيل الدقيقة للحروف البارزة، معتمدين على أحدث تقنيات التصنيع وأجود الخامات العالمية.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openQuoteModal}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-[#25D366]/30 flex items-center gap-2.5 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>اطلب استشارة وعرض سعر عبر واتساب</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. DETAILED 6-SERVICE MODULES GRID */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-black text-primary uppercase tracking-widest mb-2 block">
                دليل خدمات رواد الإبداع المتكامل
              </span>
              <SplitText
                text="خبرات هندسية وفنية في خدمة علامتك التجارية"
                className="text-2xl sm:text-4xl font-black text-on-surface md:pb-3"
                tag="h2"
                delay={50}
                duration={0.6}
                textAlign="right"
              />
              <p className="text-on-surface-variant text-sm sm:text-base mt-2 leading-relaxed">
                نجمع في رواد الإبداع بين دقة التصنيع الهندسي والإبداع الفني لنقدم لك منتجات إعلانية تعكس قيمة علامتك وتصمد أمام كافة التحديات المناخية.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-surface-variant relative"
              >
                {/* Image & Badge */}
                <div>
                  <div className="h-64 overflow-hidden relative bg-inverse-surface">
                    <Image
                      src={service.image}
                      alt={`${service.title} - رواد الإبداع للإنتاج الإعلاني`}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 z-10 bg-surface/90 backdrop-blur-md px-3.5 py-1 rounded-full text-primary font-black text-xs border border-primary/20 shadow-md">
                      {service.num}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                        <LucideIcon name={service.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-on-surface">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {service.longDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6 border-t border-surface-variant pt-5">
                      {service.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface font-medium"
                        >
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8 pt-0">
                  <button
                    onClick={openQuoteModal}
                    className="w-full py-3.5 px-4 rounded-2xl bg-surface hover:bg-[#25D366] hover:text-white border border-outline-variant hover:border-[#25D366] text-primary font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>طلب عرض سعر عبر واتساب</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUALITY STANDARDS & MATERIAL SPECS */}
      <section className="py-20 lg:py-28 bg-inverse-surface text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/15 to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Specs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="text-xs font-black text-primary-fixed mb-2 block tracking-widest uppercase">
                معايير الجودة والصلابة في رواد الإبداع
              </span>
              <SplitText
                text="مواد خام عالمية معتمدة لتصنيع يدوم لسنوات طويلة"
                className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight md:pb-3"
                tag="h2"
                delay={50}
                duration={0.6}
                textAlign="right"
              />
              <p className="text-surface-container-low text-sm sm:text-base mb-10 leading-relaxed">
                في الإنتاج الإعلاني، الجودة تبدأ من المادة الخام. نحن في رواد الإبداع نستورد ونستخدم أفضل المواد المعتمدة عالمياً لضمان مقاومة منتجاتنا للظروف المناخية القاسية في المملكة، من أشعة الشمس الحارقة إلى العواصف الرملية.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {qualityStandards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="border-r-2 border-primary-fixed pr-4 pl-2 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-white/10"
                  >
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Warranty Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={localImages[16].file}
                  alt="ضمان الجودة 5 سنوات - رواد الإبداع"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-surface/95 backdrop-blur-md p-6 rounded-2xl border border-surface-variant shadow-xl text-on-surface">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-on-surface">
                          ضمان شامل حتى ٥ سنوات من رواد الإبداع
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                          يشمل الهياكل المعدنية، ثبات الألوان، والدوائر الكهربائية ووحدات LED.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM PROJECT CTA */}
      <section className="py-20 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SplitText
            text="هل تبحث عن تنفيذ مشروع إعلاني بمواصفات هندسية خاصة؟"
            className="text-2xl sm:text-4xl font-black text-on-surface mb-4 justify-center md:pb-3"
            tag="h2"
            delay={50}
            duration={0.6}
            textAlign="center"
          />
          <p className="text-on-surface-variant text-sm sm:text-base mb-8 leading-relaxed">
            فريقنا الهندسي والفني في رواد الإبداع جاهز لدراسة مخططات مشروعك وتقديم أفضل الحلول التصنيعية التي تناسب ميزانيتك وتتجاوز توقعاتك.
          </p>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود التواصل مع المستشار الهندسي في رواد الإبداع لتنفيذ مشروع إعلاني بمواصفات خاصة.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>تواصل مع المستشار الهندسي عبر واتساب</span>
          </a>
        </div>
      </section>
    </div>
  );
}
