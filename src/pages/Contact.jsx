import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo, localImages } from '../data';
import SplitText from '../components/SplitText';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    services: ['لوحات إعلانية'],
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'لوحات إعلانية',
    'أجنحة معارض',
    'طباعة رقمية',
    'قص وحفر CNC',
    'تكسية كلادينج',
    'تغليف سيارات',
    'أخرى'
  ];

  const handleServiceToggle = (svc) => {
    if (formData.services.includes(svc)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== svc)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, svc]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast('تم إرسال رسالتك بنجاح! سنتواصل معك عبر الواتساب أو الهاتف في أقرب وقت.');
      }
      setFormData({
        name: '',
        phone: '',
        company: '',
        email: '',
        services: ['لوحات إعلانية'],
        details: ''
      });
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full text-right pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 lg:pb-24 bg-surface flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-surface-container-low transform rotate-12 origin-center"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[30%] h-[100%] bg-surface-container transform -rotate-6 origin-center"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-primary rounded-full"></div>
            <span className="text-xs font-black text-primary uppercase tracking-widest">
              تواصل معنا
            </span>
          </div>

          <SplitText
            text="لنبني معاً مستقبل علامتك التجارية"
            className="text-3xl sm:text-5xl font-black text-on-surface leading-tight md:pb-3"
            tag="h1"
            delay={50}
            duration={0.6}
            textAlign="right"
          />

          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
            نحن هنا لتحويل رؤيتك إلى واقع ملموس. فريقنا من المهندسين والخبراء مستعد لمناقشة تفاصيل مشروعك القادم وتقديم الحلول الإعلانية والهندسية الأمثل.
          </p>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT SPLIT */}
      <section className="w-full relative z-20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-10 rounded-3xl shadow-xl border border-outline-variant relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>

              <SplitText
                text="ابدأ مشروعك الآن"
                className="text-2xl font-black text-on-surface mb-6 md:pb-3"
                tag="h2"
                delay={40}
                duration={0.5}
                textAlign="right"
              />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 bg-primary/10 border border-primary/20 rounded-3xl text-center space-y-4 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[54px] text-primary">
                      check_circle
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      تم استلام طلبك بنجاح!
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      شكراً لتواصلك مع رواد الإبداع. سيقوم مستشارنا الفني بالتواصل معك عبر الواتساب أو الاتصال خلال ساعات العمل الرسمية.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-md"
                    >
                      إرسال استفسار آخر
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-on-surface">
                          الاسم الكامل <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="الاسم الكريم"
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-sm transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-on-surface">
                          رقم الجوال (واتساب) <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="05XXXXXXXX"
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant text-right focus:outline-none focus:border-primary text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Company & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-on-surface">اسم الشركة / المتجر</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="مثال: شركة الأفق"
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-sm transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-on-surface">
                          البريد الإلكتروني <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant text-right focus:outline-none focus:border-primary text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Multi-Select Checkboxes */}
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-on-surface">
                        نوع الخدمة المطلوبة
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map((svc) => {
                          const isChecked = formData.services.includes(svc);
                          return (
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              key={svc}
                              onClick={() => handleServiceToggle(svc)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                                isChecked
                                  ? 'bg-primary text-white shadow-md'
                                  : 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container'
                              }`}
                            >
                              {isChecked ? '✓ ' : ''}{svc}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-on-surface">تفاصيل المشروع والمقاسات</label>
                      <textarea
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="اذكر نوع اللوحة، المقاسات التقريبية، مكان التركيب، وأي مواصفات خاصة..."
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-white py-4 px-10 rounded-2xl font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/25 disabled:opacity-70 self-start"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-[20px]">
                            progress_activity
                          </span>
                          <span>جاري إرسال الطلب...</span>
                        </>
                      ) : (
                        <>
                          <span>إرسال الطلب</span>
                          <span className="material-symbols-outlined text-[20px]">
                            arrow_back
                          </span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Direct Contact Channels Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* WhatsApp Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant hover:border-primary transition-all flex items-start gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant mb-0.5">
                    محادثة واتساب مباشرة
                  </span>
                  <span className="text-lg font-black text-on-surface font-sans" dir="ltr">
                    {companyInfo.phoneDisplay}
                  </span>
                  <span className="text-xs text-primary font-bold mt-1 flex items-center gap-1">
                    تواصل فوراً مع المبيعات <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                  </span>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${companyInfo.email}`}
                className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant hover:border-primary transition-all flex items-start gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant mb-0.5">
                    البريد الإلكتروني الرسمي
                  </span>
                  <span className="text-base font-bold text-on-surface font-sans">
                    {companyInfo.email}
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1">
                    نرد على جميع الاستفسارات خلال 24 ساعة
                  </span>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                whileHover={{ y: -3 }}
                href={`tel:${companyInfo.phone}`}
                className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant hover:border-primary transition-all flex items-start gap-4 group shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant mb-0.5">
                    الهاتف الموحد
                  </span>
                  <span className="text-base font-bold text-on-surface font-sans" dir="ltr">
                    {companyInfo.landline}
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1">
                    متاح خلال أوقات العمل الرسمية
                  </span>
                </div>
              </motion.a>

              {/* Working Hours & Office Box */}
              <div className="bg-inverse-surface text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                      <h3 className="text-xs font-black uppercase tracking-widest">ساعات العمل الرسمية</h3>
                    </div>
                    <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2.5">
                      <span>الأحد - الخميس:</span>
                      <span dir="ltr">08:00 AM - 05:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-surface-container-high pt-2">
                      <span>الجمعة - السبت:</span>
                      <span>مغلق (متاح عبر الواتساب)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                      <h3 className="text-xs font-black uppercase tracking-widest">مقر المصنع والإدارة</h3>
                    </div>
                    <p className="text-xs text-surface-container-low leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="w-full mt-20">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-on-surface">موقعنا على الخريطة</h2>
            <div className="h-[1px] bg-outline-variant flex-grow"></div>
          </div>
        </div>

        <div className="w-full h-80 sm:h-96 bg-surface-container-high relative overflow-hidden">
          <img
            src={localImages[1].file} // photo_3
            alt="خريطة الموقع"
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-inverse-surface/40"></div>

          {/* Map Marker Pin Card */}
          <div className="absolute bottom-6 right-6 sm:right-16 bg-surface-container-lowest p-5 rounded-3xl border border-surface-variant shadow-2xl flex items-center gap-4 max-w-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[26px]">pin_drop</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface">المصنع الرئيسي والإدارة</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                المنطقة الصناعية الثانية، طريق الخرج، الرياض
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
