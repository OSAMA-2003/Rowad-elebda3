'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { brandLogo, companyInfo, navLinks } from '../data';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { showToast } = useApp();

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    if (showToast) {
      showToast('شكراً لاشتراكك في القائمة البريدية لرواد الإبداع!');
    }
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-inverse-surface text-on-secondary-fixed pt-20 pb-12 border-t border-white/5 text-right">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col items-start">
          <Link href="/" className="cursor-pointer mb-6 inline-block">
            <Image
              src={brandLogo}
              alt="رواد الإبداع"
              width={160}
              height={48}
              className="h-12 w-auto object-contain filter brightness-0 invert"
            />
          </Link>
          <p className="text-white text-sm leading-relaxed mb-6">
            الرائدون في تصنيع وتركيب اللوحات الإعلانية والحلول الدعائية المبتكرة في المملكة العربية السعودية. جودة هندسية وإبداع فني يدوم طويلاً.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">روابط سريعة</h4>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <ul className="space-y-2.5 text-sm text-on-secondary-fixed-variant">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-primary-fixed transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    chevron_left
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours & Address */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">ساعات العمل والمقر</h4>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-3 text-sm text-on-secondary-fixed-variant">
            <p className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                schedule
              </span>
              <span>{companyInfo.workingHours.weekdays}</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                location_on
              </span>
              <span>{companyInfo.address}</span>
            </p>
          </div>
        </div>


      </div>

      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 pt-10 mt-10 border-t border-white/5 text-center text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} رواد الإبداع للإنتاج الإعلاني. جميع الحقوق محفوظة.</p>

        <a
          href="https://osama-ahmd-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary-fixed transition-all flex items-center gap-1.5 group py-1 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
        >
          <span>تطوير وتصميم المواقع بواسطة</span>
          <span className="text-white font-bold group-hover:text-primary-fixed underline decoration-primary-fixed/50 underline-offset-4">
            OSAMA
          </span>
          <span>— للخدمات البرمجية</span>
        </a>


      </div>
    </footer>
  );
}
