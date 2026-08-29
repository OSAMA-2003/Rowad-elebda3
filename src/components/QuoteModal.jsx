'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose, initialService = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: initialService || 'اللوحات الإعلانية الخارجية',
    city: 'الرياض',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      if (onShowToast) {
        onShowToast('تم استلام طلب عرض السعر بنجاح! سيقوم فريق المبيعات بالتواصل معك خلال ساعتين عمل.');
      }
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-right z-10"
          >
            {/* Header */}
            <div className="bg-inverse-surface text-on-primary px-8 py-6 flex items-center justify-between border-b border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-primary-fixed text-xs font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
                  استشارة هندسية وعرض سعر فوري
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  اطلب عرض سعر لمشروعك
                </h3>
              </div>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors relative z-10"
                aria-label="إغلاق"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </motion.button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    الاسم الكريم <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: عبدالله الشمري"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    رقم الجوال (واتساب) <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface text-right focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    اسم المنشأة أو المحل
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="مثال: مطعم شذا الرياض"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-2">
                    المدينة / المنطقة <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary text-sm transition-colors"
                  >
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="مكة المكرمة">مكة المكرمة</option>
                    <option value="الدمام والخبر">الدمام والخبر</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="القصيم">القصيم</option>
                    <option value="عسير والجنوب">عسير والجنوب</option>
                    <option value="مدينة أخرى">مدينة أخرى</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-on-surface mb-2">
                  الخدمة المطلوبة <span className="text-primary">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary text-sm transition-colors font-bold text-primary"
                >
                  <option value="اللوحات الإعلانية الخارجية">اللوحات الإعلانية الخارجية</option>
                  <option value="الحروف البارزة والمضيئة 3D">الحروف البارزة والمضيئة 3D</option>
                  <option value="تكسية الواجهات (الكلادينج)">تكسية الواجهات (الكلادينج)</option>
                  <option value="الطباعة الرقمية العريضة">الطباعة الرقمية العريضة</option>
                  <option value="تغليف أساطيل السيارات">تغليف أساطيل السيارات</option>
                  <option value="تصنيع أجنحة المعارض والبوثات">تصنيع أجنحة المعارض والبوثات</option>
                  <option value="لوحات إرشادية واستقبال داخلية">لوحات إرشادية واستقبال داخلية</option>
                  <option value="مشروع متكامل متعدد الخدمات">مشروع متكامل متعدد الخدمات</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-on-surface mb-2">
                  المقاسات التقريبية أو تفاصيل المشروع
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="مثال: لوحة واجهة بطول 12 متر وارتفاع مترين، مع حروف بارزة زنكور مضيئة..."
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary text-white py-3.5 px-6 rounded-xl font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
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
                      <span>إرسال طلب عرض السعر</span>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    </>
                  )}
                </motion.button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-sm font-semibold"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
