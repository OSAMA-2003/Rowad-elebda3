'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Map, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data';
import SplitText from './SplitText';

export default function LocationMap({ theme = 'dark', className = '' }) {
  const isDark = theme === 'dark';
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن موقع ومقر رواد الإبداع.')}`;

  return (
    <section className={`w-full py-20 lg:py-28 relative overflow-hidden ${
      isDark 
        ? 'bg-[#071325] text-white border-y border-white/10' 
        : 'bg-[#f8fafc] text-slate-900 border-y border-slate-200'
    } ${className}`}>
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary-fixed font-black text-xs uppercase mb-2">
            <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
            <span className={isDark ? 'text-primary-fixed' : 'text-primary'}>موقعنا ومقرنا الرئيسي</span>
            <span className="w-6 h-0.5 bg-primary-fixed rounded-full"></span>
          </div>
          <SplitText
            text="تفضل بزيارة معرضنا ومصنعنا في جدة"
            className={`text-2xl sm:text-4xl font-black md:pb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
            tag="h2"
            delay={50}
            duration={0.6}
            textAlign="center"
          />
          <p className={`text-sm sm:text-base mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            يسعدنا استقبالكم في مقرنا للاطلاع على النماذج الحية، عينات الخامات، ومناقشة تفاصيل مشاريعكم الإعلانية مباشرة مع فريقنا الهندسي.
          </p>
        </div>

        {/* Map & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details & Actions Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl ${
              isDark 
                ? 'bg-white/5 backdrop-blur-md border border-white/10' 
                : 'bg-white border border-slate-200/80 shadow-md'
            }`}
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-black text-primary uppercase tracking-wider block mb-1">
                  العنوان الوطني المعتمد
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {companyInfo.address}
                    </h3>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      حي الرويس، جدة، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2.5 text-xs font-bold text-primary mb-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>أوقات العمل واستقبال الزوار</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {companyInfo.workingHours.weekdays}
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2">
                {/* Call Button */}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="w-full py-3.5 px-5 rounded-2xl bg-primary hover:bg-primary-container text-white font-bold text-sm transition-all shadow-lg shadow-primary/30 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4.5 h-4.5 shrink-0" />
                    <span>اتصال هاتفي مباشر</span>
                  </div>
                  <span dir="ltr" className="text-xs sm:text-sm font-sans tracking-wide group-hover:underline">
                    {companyInfo.phoneDisplay}
                  </span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>محادثة واتساب فورية</span>
                  </div>
                  <span dir="ltr" className="text-xs sm:text-sm font-sans tracking-wide group-hover:underline">
                    {companyInfo.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Open in Google Maps External App */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={companyInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Map className="w-4.5 h-4.5" />
                <span>فتح الموقع في تطبيق خرائط Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Interactive Google Map Embed (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-7 min-h-[420px] rounded-3xl overflow-hidden shadow-2xl relative border ${
              isDark ? 'border-white/15 bg-slate-950' : 'border-slate-200 bg-slate-100'
            }`}
          >
            <iframe
              title="موقع رواد الإبداع للإنتاج الإعلاني - خرائط جوجل"
              src={companyInfo.mapEmbedUrl}
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Quick Location Badge */}
            <div className="absolute top-4 right-4 z-10 bg-surface/95 backdrop-blur-md py-2 px-4 rounded-2xl border border-surface-variant shadow-lg flex items-center gap-2 text-on-surface">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-on-surface">مقر الشركة والمصنع - جدة</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
