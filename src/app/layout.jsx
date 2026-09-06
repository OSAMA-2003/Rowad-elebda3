import './globals.css';
import { AppProvider } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientShell from '../components/ClientShell';
import JsonLd from '../components/JsonLd';

export const metadata = {
  metadataBase: new URL('https://www.rowad-elebdaa.com'),
  title: {
    default: 'شركة دعاية وإعلان بجدة والرياض | وكالة دعاية وإعلان وتصنيع لوحات - رواد الإبداع',
    template: '%s | شركة دعاية وإعلان - رواد الإبداع',
  },
  description:
    'شركة دعاية وإعلان ووكالة إنتاج إعلاني متكاملة في السعودية - رواد تصنيع وتنفيذ اللوحات الإعلانية للمحلات والشركات، حروف بارزة مضيئة 3D، واجهات كلادينج، وطباعة رقمية UV في جدة والرياض بضمان وجودة عالية.',
  keywords: [
    // Core High-Volume Search Keywords
    'شركة دعاية واعلان',
    'وكالة دعاية واعلان',
    'دعاية واعلان',
    'شركة دعاية واعلان جدة',
    'شركة دعاية واعلان بالرياض',
    'افضل شركة دعاية واعلان في السعودية',
    'مؤسسة دعاية واعلان',
    'شركات دعاية واعلان جدة',
    'مكاتب دعاية واعلان',
    'تصنيع لوحات اعلانية',
    'لوحات محلات تجارية',
    'لوحات حروف بارزة',
    'حروف مضيئة 3D',
    'حروف زنكور واستيل',
    'حروف اكريليك مضيئة',
    'تكسية كلادينج',
    'واجهات كلادينج محلات',
    'طباعة رقمية UV',
    'طباعة بنر وفليكس',
    'تجهيز بوثات معارض ومؤتمرات',
    'تغليف سيارات تجارية',
    'دروع تذكارية واكريليك',
    'اشتراطات بلدي للوحات المحلات',
    'مصنع لوحات اعلانية جدة والرياض',
    // Brand Variations
    'رواد الإبداع',
    'رواد الابداع',
    'شركة رواد الإبداع',
    'مؤسسة رواد الإبداع',
    'رواد الإبداع للإنتاج الإعلاني',
    'رواد الإبداع للدعاية والإعلان',
    'Rowad Al Ebda',
    'Rowad Elebdaa'
  ],
  authors: [{ name: 'رواد الإبداع للإنتاج الإعلاني والدعاية', url: 'https://www.rowad-elebdaa.com' }],
  creator: 'شركة رواد الإبداع للدعاية والإعلان',
  publisher: 'شركة رواد الإبداع للدعاية والإعلان',
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
    title: 'شركة دعاية وإعلان بجدة والرياض | وكالة دعاية وإعلان وتصنيع لوحات - رواد الإبداع',
    description:
      'حلول وكالة دعاية وإعلان متكاملة لتصنيع وتركيب اللوحات الإعلانية للمحلات، الحروف البارزة والمضيئة، الكلادينج والطباعة الرقمية بالمملكة.',
    url: 'https://www.rowad-elebdaa.com',
    siteName: 'رواد الإبداع - شركة دعاية وإعلان وتصنيع لوحات',
    images: [
      {
        url: '/hero1.png',
        width: 1200,
        height: 630,
        alt: 'شركة دعاية وإعلان وتصنيع لوحات محلات وحروف بارزة مضيئة - رواد الإبداع بالسعودية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة دعاية وإعلان بجدة والرياض | وكالة دعاية وإعلان وتصنيع لوحات',
    description:
      'أفضل شركة دعاية وإعلان وتصنيع لوحات المحلات والكلادينج والحروف المضيئة بالسعودية.',
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
  verification: {
    google: 'kb_YUFGuH7rCuqkoDM_WHAFKLWLmIQGkRR8zBi9v-uw',
  },
  category: 'Advertising Agency, Signage Production & Marketing',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo2.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo2.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo2.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <meta name="google-site-verification" content="kb_YUFGuH7rCuqkoDM_WHAFKLWLmIQGkRR8zBi9v-uw" />
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="Jeddah" />
        <meta name="geo.position" content="21.52493;39.17931" />
        <meta name="ICBM" content="21.52493, 39.17931" />
        
        {/* Favicons for Google Search Results & All Browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo2.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo2.png" />
        
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
