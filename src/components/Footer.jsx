import React, { useState } from 'react';
import { brandLogo, companyInfo, navLinks } from '../data';

export default function Footer({ setActivePage, onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    if (onShowToast) {
      onShowToast('شكراً لاشتراكك في القائمة البريدية لرواد الإبداع!');
    }
    setNewsletterEmail('');
  };

  const handleNav = (path) => {
    setActivePage(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full t bg-inverse-surface text-on-secondary-fixed pt-20 pb-12 border-t border-white/5 text-right">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col items-start">
          <div
            onClick={() => handleNav('home')}
            className="cursor-pointer mb-6 inline-block"
          >
            <img
              src={brandLogo}
              alt="رواد الإبداع"
              className="h-12 w-auto object-contain filter brightness-0 invert"
            />
          </div>
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
                <button
                  onClick={() => handleNav(link.path)}
                  className="hover:text-primary-fixed transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    chevron_left
                  </span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">تواصل معنا</h4>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-3.5 text-sm text-on-secondary-fixed-variant">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات رواد الإبداع.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#25D366] hover:text-[#20ba5a] font-bold transition-colors"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>واتساب: <span dir="ltr">{companyInfo.phoneDisplay}</span></span>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">
                call
              </span>
              <span dir="ltr" className="text-left font-sans">{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-3 hover:text-white transition-colors"
            >

            </a>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0 mt-0.5">
                location_on
              </span>
              <span>{companyInfo.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0 mt-0.5">
                schedule
              </span>
              <span>{companyInfo.workingHours.weekdays}</span>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-secondary-fixed-variant">
        <p>© {new Date().getFullYear()} {companyInfo.name}. جميع الحقوق محفوظة.</p>
        <p className="flex items-center gap-2">
          <span>صُنع بفخر في المملكة العربية السعودية</span>
          <span className="material-symbols-outlined text-primary-fixed text-[18px]">
            verified
          </span>
        </p>
      </div>
    </footer>
  );
}
