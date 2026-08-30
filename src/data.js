/**
 * ============================================================================
 * Saudi Signage Solutions OS - Brand Data & Asset Registry
 * ============================================================================
 * Contains structured metadata for all local images, services, portfolio items,
 * statistics, process workflows, industries, client testimonials, and company details.
 */

// Brand Logo & Hero Images
export const brandLogo = '/logo2.png';
export const heroDesktop = '/hero1.png';
export const heroMobile = '/hero2.png';

// Local Image Registry (All 43 local projects & products)
export const localImages = [
  {
    id: 1,
    file: '/images/1.jpg',
    title: 'صناديق أكريليك شفافة ومقفلة',
    category: 'acrylic',
    categoryName: 'منتجات أكريليك',
    description: 'تصنيع وتشكيل صناديق أكريليك عالية الشفافية بقفل أمان، مخصصة للاقتراحات والسحوبات وتنظيم الفعاليات.',
    client: 'جهات تنظيمية وفعاليات',
    aspect: 'square',
    featured: false
  },
  {
    id: 2,
    file: '/images/2.jpg',
    title: 'ستاندات عرض منتجات التجميل (POS Display)',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصميم وتنفيذ وحدات عرض رأسية مخصصة لمستحضرات التجميل مع تقسيمات دقيقة وهوية تجارية مضيئة.',
    client: 'علامة Evilynn لمستحضرات التجميل',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 3,
    file: '/images/3.jpg',
    title: 'دروع تكريم وجوائز أكريليك فاخرة',
    category: 'awards',
    categoryName: 'دروع وهدايا',
    description: 'تصنيع دروع تذكارية مميزة من الأكريليك الأسود والشفاف مع طباعة ليزر ونقوش هندسية حديثة.',
    client: 'عبد اللطيف جميل - لكزس',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 4,
    file: '/images/4.jpg',
    title: 'لوحات إرشادية وجدارية للأبواب والمكاتب',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'طباعة وتركيب لوحات إرشادية أكريليك مع مسامير استيل بارزة وكود تفاعلي QR للمكاتب والشركات.',
    client: 'شركة أغذية الكون للتجارة',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 5,
    file: '/images/5.jpg',
    title: 'علب وصناديق خشبية بنقوش ليزر',
    category: 'cnc-laser',
    categoryName: 'قص وتفريغ ليزر',
    description: 'تفريغ ونقش الخشب بتقنية CNC والليزر بزخارف إسلامية راقية مخصصة لباقات العود والهدايا الفاخرة.',
    client: 'علامة هاوي عود (Hawy Oud)',
    aspect: 'square',
    featured: false
  },
  {
    id: 6,
    file: '/images/6.jpg',
    title: 'عربات عرض وترويج متنقلة (Event Carts)',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تصنيع عربات ترويجية تفاعلية للفعاليات والمولات بإضاءة داخلية وتفاصيل مستوحاة من الهوية التجارية.',
    client: 'لوكر (Loacker)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 7,
    file: '/images/7.jpg',
    title: 'دروع تفوق وتكريم أكريليك مقصوص بالليزر',
    category: 'awards',
    categoryName: 'دروع وهدايا',
    description: 'تفصيل دروع تكريم وتفوق مدمجة بالخط العربي واللونين الأسود والذهبي بجودة وقص عالي الدقة.',
    client: 'جامعة أم القرى',
    aspect: 'landscape',
    featured: false
  },
  {
    id: 8,
    file: '/images/8.jpg',
    title: 'تجهيز ديكورات وأرفف المتاجر والمعارض',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصميم وتنفيذ أجنحة وأرفف عرض تجارية داخلية (Gondola Units) مع إضاءات مدمجة لمنتجات التجميل.',
    client: 'معارض لوفيرا (Lovera & Forever52)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 9,
    file: '/images/9.jpg',
    title: 'ستاندات مكاتب واستقبال رسمية',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'قواعد مكتبية فاخرة من الأكريليك المقوى بطباعة UV واضحة للهيئات والمؤسسات الحكومية والخاصة.',
    client: 'رئاسة الشؤون الدينية بالمسجد الحرام والمسجد النبوي',
    aspect: 'square',
    featured: false
  },
  {
    id: 10,
    file: '/images/10.jpg',
    title: 'تصميم وتنفيذ بوثات المعارض الكبرى',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'بناء وتجهيز أجنحة معارض متكاملة بمسارات إضاءة نيون LED مخصصة، كاونترات استقبال، وشاشات عرض تفاعلية.',
    client: 'شركة Novo Nordisk (Wegovy)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 11,
    file: '/images/11.jpg',
    title: 'شاشات ومنصات تفاعلية ذكية (Interactive Kiosk)',
    category: 'digital-screens',
    categoryName: 'شاشات ومنصات ذكية',
    description: 'تصميم وهندسة منصات العرض الرقمية التفاعلية مع شاشات لمس عالية الاستجابة وهيكل خشبي ومعدني مخصص.',
    client: 'شركة Novo Nordisk',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 12,
    file: '/images/12.jpg',
    title: 'مجسمات ثلاثية الأبعاد وأجنحة عرض إبداعية',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تنفيذ هياكل مجسمة ثلاثية الأبعاد وعناصر دعائية بارزة لجذب الزوار في الفعاليات والمؤتمرات الطبية.',
    client: 'شركة فايزر (Pfizer)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 13,
    file: '/images/13.jpg',
    title: 'تجهيز أجنحة المعارض الطبية المتكاملة',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'بناء منصات عرض واسعة النطاق تشمل حروفاً بارزة مضيئة، فاترينات أكريليك لعرض المنتجات، وشاشات مدمجة.',
    client: 'قصر الطب (SHOFU INC.)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 14,
    file: '/images/14.jpg',
    title: 'بوثات عرض متخصصة لمنتجات التجميل',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تصميم منصات تفاعلية بألوان باستيل هادئة مع كاونترات مضيئة ومرايا LED وعجلة حظ تفاعلية للزوار.',
    client: 'علامة Natinda',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 15,
    file: '/images/15.jpg',
    title: 'أجنحة مؤتمرات VIP مع شاشات عملاقة',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تنفيذ بوث متكامل يدمج شاشات LED جدارية ضخمة مع ديكورات نباتية، كاونترات أكريليك، ومناطق جلوس فاخرة.',
    client: 'شركة Amgen (Evenity & Prolia)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 16,
    file: '/images/16.jpg',
    title: 'منصات ومنابر إلقاء مضيئة (Podiums)',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع منبر إلقاء وتدشين مخصص بأكريليك مشكل مع شعار ثلاثي الأبعاد وإضاءة LED مدمجة للفعاليات.',
    client: 'شركة Novo Nordisk',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 17,
    file: '/images/17.jpg',
    title: 'أجنحة معارض كبرى بتشطيبات خشبية فاخرة',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'بناء أجنحة معارض مفتوحة بتصميم معماري حديث يدمج الديكورات الخشبية مع الإنارة الأرضية والشاشات التفاعلية.',
    client: 'موانئ دبي العالمية (DP World)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 18,
    file: '/images/18.jpg',
    title: 'أجنحة تفاعلية مع مجسمات منتجات ثلاثية الأبعاد',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تصميم جناح عرض تفاعلي يشمل مجسماً ضخماً للمنتج داخل إطار مضيء مع شاشات جدارية وكاونتر استقبال عصري.',
    client: 'شركة Novo Nordisk (Wegovy)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 19,
    file: '/images/19.jpg',
    title: 'ستاند عرض منتجات جونسون المضيء',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصميم وتنفيذ ستاند عرض تفاعلي مخصص على شكل قطرة لمنتجات جونسون للأطفال مع أرفف أكريليك وإضاءة LED داخلية مبهرة.',
    client: 'جونسون (Johnson’s)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 20,
    file: '/images/20.jpg',
    title: 'منصات عرض كاونترات ترويجية مضيئة',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع كاونترات عرض ترويجية مضيئة بألوان تفاعلية وإضاءة LED كاملة لصيدليات النهدي (Nahdi Specials).',
    client: 'صيدليات النهدي (Nahdi)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 21,
    file: '/images/21.jpg',
    title: 'لوحة بارزة دائرية مضيئة وجهين (Blade Sign)',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'تصنيع لوحات بروز دائرية مضيئة وجهين للمحلات والمقاهي بهيكل ألومنيوم معالج وأكريليك ناصع البياض ومحول معزول.',
    client: 'مقاهي ومحلات تجارية',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 22,
    file: '/images/22.jpg',
    title: 'وحدة أرفف وجندولا عرض مستحضرات التجميل',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع جندولا عرض خشبية وأكريليك متعددة الطوابق بتقسيمات مخصصة وأدراج تخزين سفلية لعلامة EVILYNN.',
    client: 'علامة EVILYNN لمستحضرات التجميل',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 23,
    file: '/images/23.jpg',
    title: 'درع تكريم اليوبيل الذهبي (50 عاماً)',
    category: 'awards',
    categoryName: 'دروع وهدايا',
    description: 'تصميم وقص ليزر لدرع تكريم أكريليك شفاف فاخر برقم 50 مفرغ مع قاعدة بيضاء وطباعة UV عالية الدقة.',
    client: 'شركة السحيلي (Alsuhaili - telergon)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 24,
    file: '/images/24.jpg',
    title: 'مجسم شعار النادي الأهلي السعودي طبقات أكريليك',
    category: 'acrylic',
    categoryName: 'منتجات أكريليك',
    description: 'تنفيذ درع وشعار النادي الأهلي السعودي بأكريليك مقصوص بالليزر بنظام الطبقات ثلاثية الأبعاد والألوان الأصلية.',
    client: 'النادي الأهلي السعودي (Al-Ahli FC)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 25,
    file: '/images/25.jpg',
    title: 'لوحة درع مضيئة (وعبر الزمان سنمضي معاً)',
    category: '3d-letters',
    categoryName: 'حروف بارزة ومضيئة',
    description: 'لوحة جدارية درع النادي الأهلي مع إضاءة نيون LED محيطية وأكريليك معتم وشفاف عالي الفخامة.',
    client: 'النادي الأهلي السعودي',
    aspect: 'square',
    featured: true
  },
  {
    id: 26,
    file: '/images/26.jpg',
    title: 'لوحة مكتبية أكريليك أسود مطفي وشعار محفور',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'تصنيع لوحات مكاتب فخمة من الأكريليك الأسود المطفي (Matte Black) مع حفر ليزر غائر وبروز بلون أحمر شفاف.',
    client: 'شركة DAM COMx',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 27,
    file: '/images/27.jpg',
    title: 'كشك ومنصة شاشة تفاعلية ذكية (Toyota Kiosk)',
    category: 'digital-screens',
    categoryName: 'شاشات ومنصات ذكية',
    description: 'تصميم وتصنيع كشك شاشة تفاعلية ذكي من الأكريليك الأبيض اللامع بإطار انسيابي أحمر وشعار تويوتا.',
    client: 'شركة عبد اللطيف جميل - تويوتا (Toyota)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 28,
    file: '/images/28.jpg',
    title: 'كاونتر استقبال فاخر ومضلع لمعارض لكزس',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع وتركيب كاونتر استقبال رخامي أسود بتكسيات بيضاء مضلعة وشعارات بارزة لكزس ومؤسسة بينالي الدرعية.',
    client: 'لكزس (Lexus) & بينالي الدرعية',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 29,
    file: '/images/29.jpg',
    title: 'لوحة وهيكل معلق كافيه (Tomorrow Cafe)',
    category: '3d-letters',
    categoryName: 'حروف بارزة ومضيئة',
    description: 'تصنيع لوحة علوية معلقة وهيكل معدني واستيل بحروف بارزة مضيئة وإضاءة محيطية لمقهى Tomorrow Cafe.',
    client: 'مقهى تومورو (Tomorrow Cafe)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 30,
    file: '/images/30.jpg',
    title: 'كاونتر استقبال رئيسي ضخم لمعارض تويوتا',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تنفيذ كاونتر استقبال واستعلامات رئيسي لمعارض تويوتا بشعار ثلاثي الأبعاد مضيء وهوية #غدك_اليوم وشاشة تفاعلية.',
    client: 'شركة عبد اللطيف جميل - تويوتا (Toyota)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 31,
    file: '/images/31.jpg',
    title: 'جناح ومجسمات عطور شانيل (CHANEL N°5)',
    category: 'booths',
    categoryName: 'أجنحة ومعارض',
    description: 'تنفيذ منصة عرض ترويجية عملاقة لمول عطور شانيل N°5 تشمل مجسم زجاجة عطر ضخم، علب هدايا، وشعار شانيل مضيء كريستالي.',
    client: 'شانيل (CHANEL)',
    aspect: 'landscape',
    featured: true
  },
  {
    id: 32,
    file: '/images/32.jpg',
    title: 'لوحة جدارية إرشادية أكريليك بمسامير استيل',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'تصنيع لوحات جدارية واستقبال أكريليك شفاف بمقاسات مخصصة ومسامير تباعد استيل فضية وطباعة رقمية واضحة.',
    client: 'مركز GLO Thai Massage',
    aspect: 'landscape',
    featured: false
  },
  {
    id: 33,
    file: '/images/33.jpg',
    title: 'ستاند كاونتر صيدليات لقطرات العيون Systane',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع ستاندات كاونتر ونقاط بيع أكريليك وبلاستيك مقوى مع تفريغ ليزر وطباعة ملونة لمنتجات العيون Systane من ألكون.',
    client: 'شركة ألكون (Alcon - Novartis)',
    aspect: 'square',
    featured: false
  },
  {
    id: 34,
    file: '/images/34.jpg',
    title: 'درع شكر وتقدير مرايا فضي مع علبة مخملية',
    category: 'awards',
    categoryName: 'دروع وهدايا',
    description: 'تفصيل دروع تكريم فاخرة من الأكريليك المرايا الفضي بتصميم خط عربي وشعار رؤية 2030 داخل علبة قطيفة مخملية رمادية.',
    client: 'مكتب التعليم الأهلي بجدة - وزارة التعليم',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 35,
    file: '/images/35.jpg',
    title: 'برج إعلاني وتوتم مضيء (Pylon Totem Sign)',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'تصنيع وتركيب توتم إعلاني مضيء عملاق بارتفاع شاهق داخل المراكز التجارية لجمعية خيركم لتحفيظ القرآن الكريم.',
    client: 'جمعية خيركم لتحفيظ القرآن الكريم',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 36,
    file: '/images/36.jpg',
    title: 'ستاند عرض مستحضرات تجميل ومكياج LOVERA',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع ستاند عرض أسود فاخر لمستحضرات التجميل مع خانات أكريليك منظمة لأقلام ومحددات التجميل وإضاءة مخفية.',
    client: 'علامة لوفيرا (LOVERA)',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 37,
    file: '/images/37.jpg',
    title: 'لوحة استقبال حروف بارزة وإضاءة خفية The One Clinics',
    category: '3d-letters',
    categoryName: 'حروف بارزة ومضيئة',
    description: 'تصنيع وتركيب لوحة استقبال جدارية راقية بحروف بارزة سوداء مدمجة في الرخام مع إضاءة خفية دافئة Warm White.',
    client: 'عيادات The One Clinics',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 38,
    file: '/images/38.jpg',
    title: 'ستاندات عرض أرضية FSDU لمنتجات نوتيلا (Nutella)',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصميم وهندسة ستاندات عرض أرضية FSDU متينة لمنتجات نوتيلا في السوبرماركت ومراكز التسوق الكبرى بهيكل أحمر وأبيض.',
    client: 'فيريرو - نوتيلا (Ferrero Nutella)',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 39,
    file: '/images/39.jpg',
    title: 'ستاند كاونتر دوار متعدد الأوجه لمنتجات العناية',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع ستاند عرض كاونتر دوار 360 درجة متعدد الأوجه لأقسام ثريا وحواء لمنتجات Pure Beauty مع حامل بروشورات أكريليك.',
    client: 'علامة Pure Beauty - أنتي نجمة',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 40,
    file: '/images/40.jpg',
    title: 'إنتاج كميات تجارية من ستاندات جلسرين كريم',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع وإنتاج دفعات تجارية ضخمة من ستاندات العرض الأرضية الخشبية والأكريليك لمنتجات جلسرين كريم الأصلي.',
    client: 'جلسرين كريم الأصلي (Pure Glycerin Cream)',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 41,
    file: '/images/41.jpg',
    title: 'ستاند كاونتر أكريليك لمنتجات Fresh Toung',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع ستاند كاونتر نقاط بيع أكريليك أبيض وأسود لمنتجات العناية بالفم Fresh Toung مع طباعة ديجيتال زاهية.',
    client: 'علامة Fresh Toung',
    aspect: 'portrait',
    featured: false
  },
  {
    id: 42,
    file: '/images/42.jpg',
    title: 'وحدة جندولا جدارية فاخرة بإطار نيون EVILYNN',
    category: 'displays',
    categoryName: 'منصات عرض',
    description: 'تصنيع وحدة جندولا وعرض جدارية وردية لمستحضرات التجميل مع إطار نيون LED أبيض متصل وإنارة مدمجة بكل رف.',
    client: 'علامة EVILYNN لمستحضرات التجميل',
    aspect: 'portrait',
    featured: true
  },
  {
    id: 43,
    file: '/images/43.jpg',
    title: 'ستاندات كاونتر ذكية بأكواد QR وقاعدة مرايا ذهبية',
    category: 'signs',
    categoryName: 'لوحات إعلانية',
    description: 'تصنيع ستاندات كاونتر أكريليك بيضاء ثمانية الأضلاع مع قاعدة مرايا ذهبية وأكواد QR تفاعلية لـ Instagram و Google لعلامة CARTTEL.',
    client: 'علامة CARTTEL',
    aspect: 'square',
    featured: true
  }
];

// Featured Case Study Data
export const featuredCaseStudy = {
  title: 'مجوهرات المملكة',
  subtitle: 'تصميم وتصنيع واجهة خارجية وحروف بارزة مضيئة',
  image: localImages[1].file, // photo_3
  description: 'نحول رؤيتك إلى واقع ملموس من خلال دراسة متأنية وتصميم مبتكر وتنفيذ دقيق. شاهد كيف قمنا بتحويل هوية أحد عملائنا إلى واجهة تجارية مبهرة.',
  highlights: [
    {
      title: 'تصميم الهوية البصرية واللوحات',
      desc: 'دراسة المساحات واختيار الخامات المناسبة والزوايا البصرية.'
    },
    {
      title: 'تصنيع دقيق بورش العمل',
      desc: 'باستخدام أحدث آلات القص بالليزر وتشكيل المعادن CNC.'
    },
    {
      title: 'تركيب احترافي بموقع العميل',
      desc: 'فريق هندسي متخصص لضمان المتانة والسلامة وأعلى معايير الأمان.'
    }
  ]
};

// Company Statistics
export const statsData = [
  { value: 10, suffix: '+', label: 'سنوات خبرة', icon: 'verified_user' },
  { value: 100, suffix: '+', label: 'مشروع منجز', icon: 'task_alt' },
  { value: 50, suffix: '+', label: 'عميل سعيد', icon: 'sentiment_satisfied' },
  { value: 20, suffix: '+', label: 'خدمة إعلانية', icon: 'category' },
  { value: 30, suffix: '+', label: 'خبير وفني', icon: 'engineering' }
];

// Core Services (6 In-depth Service Modules)
export const servicesData = [
  {
    id: 'exhibition-booths',
    num: '٠١',
    title: 'تصميم وتنفيذ أجنحة المعارض',
    shortDesc: 'بناء وتجهيز أجنحة وبوثات تفاعلية متكاملة تلفت أنظار الزوار وتعزز حضورك في المؤتمرات والفعاليات.',
    longDesc: 'حلول متكاملة لهندسة وبناء أجنحة المعارض (Custom Booths) بأحدث الخامات الخشبية والمعدنية والأكريليك، مع دمج إضاءات LED وشاشات رقمية تفاعلية ومناطق استقبال VIP.',
    icon: 'festival',
    image: localImages[9].file, // 10.jpg (بوث Wegovy المضيء) أو localImages[16].file (17.jpg DP World)
    features: [
      'تصميم 3D ثلاثي الأبعاد واقعي قبل البدء بالتنفيذ',
      'دمج شاشات LED تفاعلية وإضاءات نيون حديثة',
      'تصنيع كاونترات استقبال وديكورات خشبية ومعدنية مخصصة',
      'فريق متخصص للتسليم في الموقع والتركيب والإشراف والتفكيك'
    ]
  },
  {
    id: 'displays-kiosks',
    num: '٠٢',
    title: 'منصات العرض والشاشات الذكية',
    shortDesc: 'تصنيع ستاندات نقاط البيع (POS) ووحدات العرض الترويجية والشاشات التفاعلية للمتاجر والمراكز التجارية.',
    longDesc: 'تصميم حلول عرض ذكية وعصرية تشمل ستاندات المكياج، منابر الفعاليات (Podiums)، وأجهزة الكشك التفاعلي (Interactive Kiosks) لجذب العملاء وتسهيل استعراض المنتجات.',
    icon: 'storefront',
    image: localImages[1].file, // 2.jpg (ستاند Evilynn) أو localImages[10].file (11.jpg Kiosk)
    features: [
      'وحدات عرض جدارية ورأسية (Gondola Units) للمتاجر',
      'أجهزة كشك وشاشات تفاعلية مدمجة للفعاليات',
      'عربات ترويجية متنقلة (Carts) بتصاميم هوية مبتكرة',
      'منابر إلقاء وتدشين رسمية مضيئة للمؤتمرات'
    ]
  },
  {
    id: 'acrylic-products',
    num: '٠٣',
    title: 'تشكيل وتصنيع منتجات الأكريليك',
    shortDesc: 'حلول أكريليك مخصصة وعالية الدقة من صناديق الفعاليات، وحوامل الشعارات، والستاندات المكتبية.',
    longDesc: 'تشكيل وقص الأكريليك الشفاف والملون لإنتاج استاندات مكاتب رسمية، وصناديق سحوبات آمنة بقفل، وفاترينات حماية واستعراض للمنتجات الفاخرة.',
    icon: 'layers',
    image: localImages[0].file, // 1.jpg (صندوق الأكريليك الشفاف) أو localImages[8].file (9.jpg ستاند الشؤون الدينية)
    features: [
      'أكريليك عالي الشفافية والنقاء مقاوم للكسر والاصفرار',
      'صناديق سحوبات واقتراحات مخصصة مع أقفال حماية',
      'ستاندات وهوية مكتبية فاخرة بطباعة UV مباشرة',
      'تشكيل وثني حراري دقيق لجميع الأحجام والمقاسات'
    ]
  },
  {
    id: 'awards-gifts',
    num: '٠٤',
    title: 'الدروع التذكارية والهدايا الفاخرة',
    shortDesc: 'تصميم وتنفيذ دروع التكريم والجوائز والعلب الخشبية الفاخرة المخصصة لكبرى الجهات والمناسبات.',
    longDesc: 'ابتكار دروع تذكارية فريدة تدمج الأكريليك الأسود والشفاف مع طباعة الألوان والتطريز بالليزر، بالإضافة إلى الصناديق الخشبية المشغولة يدوياً للهدايا الراقية.',
    icon: 'workspace_premium',
    image: localImages[2].file, // 3.jpg (درع لكزس) أو localImages[6].file (7.jpg درع أم القرى)
    features: [
      'دروع تكريم وتفوق بتصاميم عصرية وزخارف عربية',
      'دمج الأكريليك بالستانلس ستيل التيتانيوم الذهبي والفضي',
      'صناديق خشبية مفرغة بالليزر بزخارف إسلامية ونقوش فاخرة',
      'طباعة وحفر ليزر بدقة متناهية للشعارات والنصوص'
    ]
  },
  {
    id: 'cnc-laser',
    num: '٠٥',
    title: 'القص والتفريغ بالليزر و CNC',
    shortDesc: 'قص ونقش عالي الدقة للمعادن، والأخشاب، والأكريليك لتنفيذ الزخارف والديكورات الهندسية.',
    longDesc: 'خدمات القص والتشكيل الميكانيكي المتقدمة لمختلف الخامات الصناعية، بما يضمن حوافاً انسيابية ونقوشاً هندسية معقدة مناسبة للواجهات واللوحات والعلب الفاخرة.',
    icon: 'format_shapes',
    image: localImages[4].file, // 5.jpg (صندوق هاوي عود المنقوش بالليزر)
    features: [
      'تفريغ ونقش زخارف هندسية وإسلامية دقيقة',
      'قص الليزر للستانلس ستيل والألمنيوم والألواح الخشبية',
      'تشكيل فني للديكورات الداخلية والواجهات المعمارية',
      'تنفيذ النماذج المخصصة والشعارات المركبة'
    ]
  },
  {
    id: 'wayfinding-signs',
    num: '٠٦',
    title: 'اللوحات الإرشادية وأنظمة التوجيه',
    shortDesc: 'لوحات إرشادية جدارية وتوجيهية للمباني والمراكز الطبية بتصاميم حديثة وتقنيات ذكية.',
    longDesc: 'تجهيز مساحات العمل والمباني الإدارية بلوحات تعريفية للأبواب والمكاتب مصنوعة من الأكريليك والستانلس، مع دمج مسامير التثبيت الفاخرة وأكواد QR التفاعلية.',
    icon: 'signpost',
    image: localImages[3].file, // 4.jpg (لوحة Food Planet الإرشادية)
    features: [
      'لوحات جدارية بمقاسات مخصصة وقواعد ستيل ستاند أوف',
      'دمج أكواد QR التفاعلية لتقييم وتوجيه الزوار',
      'طباعة UV مشبعة ومقاومة للحرارة والرطوبة',
      'مطابقة لاشتراطات السلامة والوضوح البصري للمباني'
    ]
  }
];
// Why Choose Us (Core Advantages)
export const whyUsData = [
  {
    icon: 'diamond',
    title: 'جودة الخامات العالمية',
    desc: 'نستورد ونستخدم أفضل خامات الأكريليك، الستانلس ستيل، ووحدات الإضاءة المعتمدة المقاومة للعوامل الجوية القاسية.'
  },
  {
    icon: 'architecture',
    title: 'دقة التنفيذ الهندسي',
    desc: 'نهتم بأدق التفاصيل في التصنيع والتركيب بفضل ماكينات CNC والليزر المتطورة بإشراف مهندسين مختصين.'
  },
  {
    icon: 'timer',
    title: 'سرعة الإنجاز والالتزام',
    desc: 'نلتزم بالمواعيد الزمنية المحددة ونسلم المشاريع في وقت قياسي دون أي مساومة على معايير الجودة.'
  },
  {
    icon: 'design_services',
    title: 'تصميم مخصص حسب الطلب',
    desc: 'نبتكر حلولاً بصرية فريدة تناسب هوية علامتك التجارية وتعزز مكانتها التنافسية في السوق.'
  },
  {
    icon: 'precision_manufacturing',
    title: 'خدمة شاملة من المصنع للموقع',
    desc: 'نتولى دورة المشروع كاملة: من دراسة الموقع والتصميم إلى التصنيع في مصانعنا والتركيب والتسليم النهائي.'
  },
  {
    icon: 'public',
    title: 'خبرة عريقة بالسوق السعودي',
    desc: 'فهم دقيق لكافة متطلبات واشتراطات منصة بلدي، الأمانة، والدفاع المدني لضمان ترخيص لوحتك بسلاسة.'
  }
];

// 5-Step Production Workflow Process
export const processData = [
  {
    step: '1',
    title: 'استلام الطلب والاستشارة',
    desc: 'نستمع لاحتياجاتك ونحدد المتطلبات الفنية والميزانية المقترحة بدقة.'
  },
  {
    step: '2',
    title: 'المعاينة والرفع المساحي',
    desc: 'زيارة موقعك لأخذ القياسات الدقيقة ودراسة زوايا الرؤية والأحمال الإنشائية.'
  },
  {
    step: '3',
    title: 'التصميم الهندسي وعرض السعر',
    desc: 'تقديم مخططات 3D تفصيلية توضح المظهر النهائي وعرض سعر شفاف.'
  },
  {
    step: '4',
    title: 'التصنيع والطباعة بالمصنع',
    desc: 'بدء عمليات القص والتجميع والتشكيل بأحدث الماكينات وأعلى معايير الجودة.'
  },
  {
    step: '5',
    title: 'التركيب الميداني والتسليم',
    desc: 'تثبيت اللوحات بأمان عبر فريقنا الفني المتخصص مع تقديم شهادة الضمان.'
  }
];

// Industries / Sectors Served
export const industriesData = [
  { title: 'المطاعم والمقاهي', icon: 'restaurant', desc: 'لوحات واجهات وحروف مضيئة داخلية وخارجية' },
  { title: 'المتاجر والمعارض', icon: 'storefront', desc: 'واجهات كلادينج وستاندات عرض منتجات' },
  { title: 'الشركات والمؤسسات', icon: 'business', desc: 'لوحات استقبال ومكاتب وشاشات تعريفية' },
  { title: 'العقارات والمجمعات', icon: 'location_city', desc: 'لوحات يوني بول وإعلانات المشاريع الكبرى' },
  { title: 'الفنادق والضيافة', icon: 'hotel', desc: 'لوحات إرشادية وحروف تيتانيوم راقية' },
  { title: 'المراكز الطبية', icon: 'local_hospital', desc: 'لوحات واضحة ومطابقة لاشتراطات وزارة الصحة' },
  { title: 'المولات التجارية', icon: 'local_mall', desc: 'شاشات تفاعلية وبوثات ومطبوعات ضخمة' },
  { title: 'الفعاليات والمؤتمرات', icon: 'event', desc: 'أجنحة معارض ومنصات تصوير وهياكل ثلاثية الأبعاد' }
];

// Client Testimonials
export const testimonialsData = [
  {
    id: 1,
    name: 'محمد أحمد',
    role: 'المدير التنفيذي - سلسلة مطاعم الضيافة',
    initials: 'م.أ',
    quote: 'تعامل احترافي ودقة متناهية في المواعيد. اللوحات التي تم تنفيذها لفروعنا كانت بجودة استثنائية ولفتت أنظار الزبائن وزادت من وضوح العلامة التجارية بشكل ملحوظ.'
  },
  {
    id: 2,
    name: 'عبدالله سعد',
    role: 'رئيس مجلس الإدارة - شركة الأفق للمقاولات',
    initials: 'ع.س',
    quote: 'أشكر فريق رواد الإبداع على سرعة الإنجاز وجودة العمل في تنفيذ واجهة المقر الرئيسي للشركة. التكسية بالكلادينج مع الحروف المضيئة فاقت جميع توقعاتنا.'
  },
  {
    id: 3,
    name: 'د. فهد الشمري',
    role: 'مدير عام مجمع العناية الطبية',
    initials: 'د.ف',
    quote: 'خدمة متكاملة من التصميم للتركيب. الحروف المضيئة والإرشادية أضافت فخامة ووضوحاً كبيراً لمدخل المجمع. الدقة والالتزام بالضمان يجعلهم خيارنا الدائم.'
  }
];

// Success Partners / Clients
export const partnersData = [
  'شركة الإسكان والتطوير',
  'مجموعة الصافي الغذائية',
  'أبراج الرياض للاستثمار',
  'شركة النقل السريع',
  'مستشفيات النخبة',
  'سلسلة مقاهي أروما'
];

// FAQ Data
export const faqData = [
  {
    q: 'هل تقدمون خدمات التصميم بالإضافة للتصنيع والتركيب؟',
    a: 'نعم، لدينا فريق تصميم هندسي وفني متكامل يمكنه ابتكار وتصميم هويتك البصرية واللوحات الإعلانية بتقنية 3D قبل البدء في مرحلة التصنيع، لترى النتيجة الواقعية مسبقاً.'
  },
  {
    q: 'كم يستغرق تنفيذ وتركيب لوحة إعلانية تجارية؟',
    a: 'تختلف المدة حسب حجم وتفاصيل المشروع، ولكن في المتوسط تستغرق اللوحات النمطية من 5 إلى 7 أيام عمل من تاريخ اعتماد التصاميم والمقاسات.'
  },
  {
    q: 'هل أعمالكم ومنتجاتكم تشمل الضمان المعتمد؟',
    a: 'نعم بكل تأكيد، نقدم ضماناً شاملاً يصل حتى 5 سنوات على الهياكل المعدنية، ومقاومة الكلادينج، وأنظمة الإضاءة LED والمحولات المعتمدة ضد العوامل الجوية.'
  },
  {
    q: 'هل تساعدون في استخراج تصاريح البلدية والدفاع المدني؟',
    a: 'نحن نصمم وننفذ كافة اللوحات مطابقة لاشتراطات منصة بلدي والدفاع المدني المعتمدة، ونوفر لك كافة المخططات الهندسية والرسومات المعتمدة لتقديمها للجهات المعنية.'
  },
  {
    q: 'ما هي المواد المستخدمة في تصنيع الحروف البارزة؟',
    a: 'نستخدم خامات متعددة حسب طلب العميل ومكان التركيب: زنكور معالج، ستانلس ستيل (ذهبي/فضي/تيتانيوم)، أكريليك كوري نقي، ألمنيوم، مع إضاءات LED سامسونج عالية الكفاءة.'
  },
  {
    q: 'هل تنفذون المشاريع خارج مدينة الرياض؟',
    a: 'نعم، لدينا فرق عمل متنقلة وشبكة لوجستية تغطي كافة مناطق ومحافظات المملكة العربية السعودية (المنطقة الوسطى، الغربية، الشرقية، والجنوبية).'
  }
];

// Workshop Capabilities & Tech Specs
export const workshopCapabilities = [
  {
    title: 'قص وتشكيل دقيق بـ CNC والليزر',
    desc: 'معدات متطورة لحفر وتفريغ الأخشاب والأكريليك والمعادن بدقة متناهية، لإنتاج الدروع الفاخرة والنقوش الهندسية المعقدة.',
    image: localImages[4].file, // 5.jpg (النقش والحفر الدقيق على الخشب)
    icon: 'precision_manufacturing'
  },
  {
    title: 'طباعة UV مسطحة وعالية الدقة',
    desc: 'تقنيات طباعة UV مباشرة على الأكريليك واللوحات الجدارية تضمن دقة الألوان وتفاصيل نصوص فائقة الوضوح ومقاومة للظروف البيئية.',
    image: localImages[3].file, // 4.jpg (طباعة لوحات الأكريليك والإرشادات)
    icon: 'print'
  },
  {
    title: 'هندسة وبناء أجنحة المعارض والديكورات',
    desc: 'فريق متكامل لتنفيذ الهياكل الخشبية والمعدنية المخصصة، ودمج أنظمة الإضاءة الذكية والشاشات التفاعلية بمطابقة تامة للمخططات ثلاثية الأبعاد.',
    image: localImages[12].file, // 13.jpg أو localImages[9].file (10.jpg لتجهيز البوثات)
    icon: 'engineering'
  }
];

// Raw Material Quality Standards
export const qualityStandards = [
  {
    title: 'الأكريليك والستانلس ستيل',
    desc: 'نستخدم سماكات هندسية معتمدة لمنع التقوس والتشوه الحراري بمرور الوقت حتى في درجات الحرارة المرتفعة.'
  },
  {
    title: 'أنظمة الإضاءة الذكية LED',
    desc: 'وحدات LED عالية اللومن مع محولات طاقة معزولة ضد الماء والغبار بمعيار IP67 لضمان الاستمرارية.'
  },
  {
    title: 'أحبار الطباعة الأصلية UV',
    desc: 'أحبار كورية وأوروبية أصلية (UV Curable) توفر ألواناً زاهية ومقاومة للبهتان والأشعة فوق البنفسجية.'
  },
  {
    title: 'الهياكل المعدنية المجلفنة',
    desc: 'حديد مجلفن ومعالج ضد الصدأ بأعلى معايير اللحام والسلامة الهيكلية لتحمل أقصى سرعات الرياح.'
  }
];

// Company Contact & Office Details
export const companyInfo = {
  name: 'رواد الإبداع للإنتاج الإعلاني',
  tagline: 'Saudi Signage Solutions OS - حلول الدعاية والإعلان والإنتاج الإعلاني',
  phone: '+966 56 088 7560',
  phoneDisplay: '+966 56 088 7560',
  landline: '+966 56 088 7560',
  email: 'info@itqan-adv.sa',
  whatsapp: '966560887560',
  address: '4775 العباقرة، 8068، حي الرويس، جدة 23215، المملكة العربية السعودية',
  mapUrl: 'https://maps.app.goo.gl/RtRYCgpy8k6Jr2Mr8?g_st=aw',
  mapEmbedUrl: 'https://maps.google.com/maps?q=21.52493,39.17931&hl=ar&z=16&output=embed',
  postalCode: '23215',
  workingHours: {
    weekdays: 'الأحد - الخميس: 08:00 صباحاً - 05:00 مساءً',
    weekend: 'الجمعة - السبت: مغلق (متاح عبر الواتساب)'
  },
  social: {
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    snapchat: 'https://snapchat.com'
  }
};

// Navigation Links
export const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'من نحن' },
  { path: '/services', label: 'خدماتنا' },
  { path: '/portfolio', label: 'أعمالنا' }
];


