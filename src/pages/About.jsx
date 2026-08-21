import React from 'react';
import { motion } from 'framer-motion';
import { localImages, statsData, workshopCapabilities, companyInfo } from '../data';
import StatsCounter from '../components/StatsCounter';
import SplitText from '../components/SplitText';
import LocationMap from '../components/LocationMap';
import img from '../../public/about.png'
import img2 from '../../public/about2.jfif'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function About({ onOpenQuote, setActivePage }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full text-right overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen  flex items-center justify-center bg-inverse-surface pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.28 }}
            transition={{ duration: 1.2 }}
            src={img} // photo_4
            alt="من نحن - رواد الإبداع"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/85 to-transparent"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
            <span className="text-xs  font-black text-primary-fixed uppercase tracking-wider">
              من نحن | رواد الإبداع
            </span>
          </motion.div>

          <SplitText
            text="هندسة الإبداع، بصمة لا تُنسى"
            className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white justify-center md:pb-3"
            tag="h1"
            delay={50}
            duration={0.6}
            textAlign="center"
          />

          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-surface-container-low max-w-2xl mx-auto leading-relaxed">
            نحن رواد الإبداع، نصوغ هوية العلامات التجارية بدقة متناهية وحرفية عالية، لنترك أثراً بصرياً راسخاً في قلب السوق السعودي منذ أكثر من عقد من الزمان.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OUR STORY (قصتنا) */}
      <section className="py-20 lg:py-28 w-full bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-3 bg-primary/10 rounded-3xl -z-10"></div>
            <img
              src={img2} // photo_2
              alt="ورشة تصنيع اللوحات الإعلانية"
              className="w-full h-[460px] object-cover rounded-3xl shadow-2xl border border-surface-variant"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-black text-primary uppercase tracking-widest mb-2 block">
              قصتنا ومسيرتنا
            </span>
            <SplitText
              text="أكثر من عشر سنوات من الريادة في صناعة اللوحات الإعلانية"
              className="text-2xl sm:text-4xl font-black text-on-surface mb-6 leading-snug md:pb-3"
              tag="h2"
              delay={45}
              duration={0.6}
              textAlign="right"
            />
            <div className="space-y-4 text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <p>
                بدأت رحلتنا برؤية واضحة: الارتقاء بمستوى صناعة اللوحات الإعلانية في المملكة العربية السعودية من مجرد أدوات تعريفية إلى تحف فنية هندسية تعكس جوهر العلامة التجارية وتخاطب الجمهور بجاذبية لا تقاوم.
              </p>
              <p>
                على مدار السنوات، طورنا قدراتنا الإنتاجية واستثمرنا في أحدث التقنيات العالمية من مكائن الليزر والـ CNC والطباعة الرقمية UV، لنصبح الشريك الموثوق لكبرى الشركات والكيانات في المملكة، حيث نمزج بين الإبداع الفني والصلابة الهندسية.
              </p>
              <p>
                نلتزم بتطبيق أحدث المعايير واشتراطات الجهات المعنية (بلدي، الأمانة، والدفاع المدني) لنمنح عملاءنا راحة البال التامة وسرعة الترخيص والتشغيل.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION DUAL CARDS */}
      <section className="py-20 lg:py-28 w-full bg-surface-container-lowest border-y border-surface-variant">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="p-8 sm:p-12 border border-surface-variant bg-surface rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div className="mb-6 w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-[32px]">flag</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-on-surface mb-4">رسالتنا</h3>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              تقديم حلول إعلانية متكاملة ومبتكرة تلبي تطلعات عملائنا، من خلال دمج التكنولوجيا المتقدمة مع الحرفية العالية، لضمان أعلى معايير الجودة والاستدامة والصلابة في كل مشروع ننفذه.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="p-8 sm:p-12 border border-white/10 bg-inverse-surface text-white rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-tr-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
            <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white/10 text-primary-fixed rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-[32px]">visibility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4">رؤيتنا</h3>
            <p className="text-surface-container-low text-sm sm:text-base leading-relaxed">
              أن نكون الخيار الأول والرائد في مجال الإنتاج الإعلاني وتصنيع اللوحات على مستوى المملكة والشرق الأوسط، والمساهمة الفاعلة في تشكيل المشهد البصري والمعماري للمدن الحديثة وفق رؤية 2030.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. STATISTICS */}
      <section className="py-16 w-full bg-surface">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 text-center">
            {statsData.slice(0, 4).map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-variant shadow-sm"
              >
                <div className="text-3xl sm:text-5xl font-black text-primary mb-2">
                  +<StatsCounter target={stat.value} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-on-surface-variant uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKSHOP & CAPABILITIES (إمكانياتنا) */}
      <section className="py-20 lg:py-28 w-full bg-surface-container-high">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-primary uppercase tracking-widest mb-2 block">
              إمكانيات المصنع
            </span>
            <SplitText
              text="ورشة عمل متكاملة بأحدث التقنيات العالمية"
              className="text-2xl sm:text-4xl font-black text-on-surface mb-4 md:pb-3"
              tag="h2"
              delay={50}
              duration={0.6}
              textAlign="center"
            />
            <p className="text-on-surface-variant text-sm sm:text-base">
              نفخر بامتلاكنا لواحدة من أحدث منشآت الإنتاج الإعلاني في الرياض، مجهزة بمكائن القص بالليزر، وطابعات عريضة، وأنظمة تشكيل المعادن الدقيقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopCapabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-surface rounded-3xl border border-surface-variant overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-surface/90 backdrop-blur-md flex items-center justify-center text-primary shadow-md">
                    <span className="material-symbols-outlined text-[24px]">
                      {cap.icon}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h4 className="text-lg font-bold text-on-surface mb-2">
                    {cap.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOOGLE MAPS & FACTORY LOCATION */}
      <LocationMap theme="light" />

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <SplitText
            text="هل ترغب بزيارة مصنعنا أو مناقشة مشروعك؟"
            className="text-2xl sm:text-4xl font-black mb-4 text-white justify-center md:pb-3"
            tag="h2"
            delay={50}
            duration={0.6}
            textAlign="center"
          />
          <p className="text-white/90 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            أبوابنا مفتوحة لزيارة ورش العمل والاطلاع على عينات الخامات ونماذج الإنتاج المباشرة والتشاور مع مهندسينا.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود طلب عرض سعر ومناقشة تفاصيل مشروعي بعد الاطلاع على صفحة من نحن.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-surface-container-low px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>اطلب عرض سعر عبر واتساب</span>
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود التواصل مع الفريق الهندسي لمناقشة تفاصيل مشروعي.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition-all inline-flex items-center justify-center gap-2"
            >
              <span>تواصل مع الفريق الهندسي</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
