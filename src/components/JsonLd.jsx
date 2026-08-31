import React from 'react';
import { companyInfo, servicesData } from '../data';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rowad-elebdaa.com/#business',
        name: 'رواد الإبداع للإنتاج الإعلاني',
        alternateName: [
          'رواد الابداع',
          'رواد الإبداع للدعاية والإعلان',
          'مؤسسة رواد الإبداع',
          'شركة رواد الإبداع',
          'Rowad Al Ebda',
          'Rowad Elebdaa Advertising'
        ],
        url: 'https://www.rowad-elebdaa.com',
        logo: 'https://www.rowad-elebdaa.com/logo2.png',
        image: [
          'https://www.rowad-elebdaa.com/hero1.png',
          'https://www.rowad-elebdaa.com/logo2.png'
        ],
        description:
          'شركة رواد الإبداع للإنتاج الإعلاني والدعاية - تصنيع وتركيب اللوحات الإعلانية الخارجية والداخلية، حروف بارزة ومضيئة 3D، واجهات كلادينج، طباعة UV رقمية، بوثات معارض وتغليف أساطيل السيارات في المملكة العربية السعودية.',
        telephone: companyInfo.phone,
        email: companyInfo.email,
        priceRange: '$$',
        currenciesAccepted: 'SAR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4775 العباقرة، 8068، حي الرويس',
          addressLocality: 'جدة',
          addressRegion: 'منطقة مكة المكرمة',
          postalCode: '23215',
          addressCountry: 'SA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 21.52493,
          longitude: 39.17931
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '17:00'
          }
        ],
        sameAs: [
          companyInfo.social.instagram,
          companyInfo.social.twitter,
          companyInfo.social.linkedin
        ],
        areaServed: [
          { '@type': 'Country', name: 'المملكة العربية السعودية' },
          { '@type': 'City', name: 'جدة' },
          { '@type': 'City', name: 'الرياض' },
          { '@type': 'City', name: 'مكة المكرمة' },
          { '@type': 'City', name: 'المدينة المنورة' },
          { '@type': 'City', name: 'الدمام' },
          { '@type': 'City', name: 'الخبر' }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'خدمات الدعاية والإعلان والإنتاج الإعلاني',
          itemListElement: servicesData.map((svc, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc.title,
              description: svc.longDesc || svc.shortDesc,
            },
            position: index + 1
          }))
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rowad-elebdaa.com/#website',
        url: 'https://www.rowad-elebdaa.com',
        name: 'رواد الإبداع للإنتاج الإعلاني',
        alternateName: 'رواد الابداع',
        description: 'حلول الدعاية والإعلان والإنتاج الإعلاني وتصنيع اللوحات في السعودية',
        inLanguage: 'ar-SA'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
