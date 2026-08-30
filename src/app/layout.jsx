import './globals.css';
import { AppProvider } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientShell from '../components/ClientShell';
import JsonLd from '../components/JsonLd';

export const metadata = {
  metadataBase: new URL('https://rowad-elebda3.sa'),
  title: {
    default: 'رواد الإبداع | أفضل شركة دعاية وإعلان وتصنيع لوحات في السعودية',
    template: '%s | رواد الإبداع للإنتاج الإعلاني والدعاية',
  },
  description:
    'شركة رواد الإبداع للإنتاج الإعلاني - رواد تصنيع وتركيب اللوحات الإعلانية، الحروف البارزة والمضيئة 3D، واجهات الكلادينج، والطباعة الرقمية UV في جدة والرياض وكافة مناطق المملكة العربية السعودية بأعلى معايير الجودة والضمان.',
  keywords: [
    // Brand Variations
    'رواد الإبداع',
    'رواد الابداع',
    'شركة رواد الإبداع',
    'مؤسسة رواد الإبداع',
    'رواد الإبداع للإنتاج الإعلاني',
    'رواد الإبداع للدعاية والإعلان',
    'Rowad Al Ebda',
    'Rowad Elebda',
    // Core Advertising & Signage Keywords
    'شركة دعاية واعلان',
    'شركة دعاية وإعلان في جدة',
    'شركة دعاية واعلان بالرياض',
    'تصنيع لوحات اعلانية',
    'لوحات محلات',
    'لوحات حروف بارزة',
    'حروف مضيئة',
    'حروف زنكور',
    'حروف استيل ذهبي',
    'حروف اكريليك مضيئة',
    'لوحات نيون',
    'تكسية كلادينج',
    'واجهات كلادينج محلات',
    'طباعة رقمية UV',
    'طباعة بنر وفليكس',
    'تجهيز بوثات معارض ومؤتمرات',
    'تغليف سيارات تجارية',
    'تغليف باصات وشاحنات',
    'دروع تذكارية واكريليك',
    'لوحات إرشادية للمباني',
    'لوحات طرق ويونيبول',
    'اشتراطات بلدي للوحات المحلات',
    'لوحات اعلانية السعودية',
    'مصنع لوحات اعلانية جدة',
  ],
  authors: [{ name: 'رواد الإبداع للإنتاج الإعلاني', url: 'https://rowad-elebda3.sa' }],
  creator: 'رواد الإبداع للإنتاج الإعلاني',
  publisher: 'رواد الإبداع للإنتاج الإعلاني',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
    },
  },
  openGraph: {
    title: 'رواد الإبداع | أفضل شركة دعاية وإعلان وتصنيع لوحات في السعودية',
    description:
      'حلول متكاملة لتصنيع وتركيب اللوحات الإعلانية، الحروف البارزة والمضيئة، الكلادينج والطباعة الرقمية في المملكة العربية السعودية بمعايير هندسية دقيقة.',
    url: 'https://rowad-elebda3.sa',
    siteName: 'رواد الإبداع للإنتاج الإعلاني',
    images: [
      {
        url: '/hero1.png',
        width: 1200,
        height: 630,
        alt: 'رواد الإبداع للإنتاج الإعلاني والدعاية - المملكة العربية السعودية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رواد الإبداع | أفضل شركة دعاية وإعلان وتصنيع لوحات في السعودية',
    description:
      'رواد تصنيع اللوحات الإعلانية، الحروف البارزة، الكلادينج والطباعة الرقمية بالمملكة.',
    images: ['/hero1.png'],
    creator: '@rowad_elebda',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Advertising, Marketing & Signage Production',
  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0070d8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <JsonLd />
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="Jeddah" />
        <meta name="geo.position" content="21.52493;39.17931" />
        <meta name="ICBM" content="21.52493, 39.17931" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background antialiased selection:bg-primary/20 selection:text-primary">
        <AppProvider>
          <ClientShell>
            <Navbar />
            <main className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </ClientShell>
        </AppProvider>
      </body>
    </html>
  );
}
