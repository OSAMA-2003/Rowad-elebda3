import React from 'react';
import { companyInfo, servicesData } from '../data';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AdvertisingAgency', 'LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.rowad-elebdaa.com/#business',
        name: 'رواد الإبداع - شركة دعاية وإعلان وتصنيع لوحات',
        alternateName: [
          'شركة دعاية واعلان رواد الإبداع',
          'وكالة دعاية واعلان رواد الإبداع',
          'رواد الابداع للدعاية والاعلان',
          'مؤسسة رواد الإبداع للإنتاج الإعلاني',
          'Rowad Al Ebda Advertising Agency',
          'Rowad Elebdaa Signage & Advertising'
        ],
        url: 'https://www.rowad-elebdaa.com',
        logo: 'https://www.rowad-elebdaa.com/logo2.png',
        image: [
          'https://www.rowad-elebdaa.com/hero1.png',
          'https://www.rowad-elebdaa.com/logo2.png'
        ],
        description:
          'شركة دعاية وإعلان ووكالة إنتاج إعلاني متكاملة في السعودية - تصنيع وتركيب اللوحات الإعلانية للمحلات والشركات، حروف بارزة ومضيئة 3D، واجهات كلادينج، طباعة UV رقمية، بوثات معارض وتغليف السيارات في جدة والرياض.',
        telephone: companyInfo.phone,
        email: companyInfo.email,
        priceRange: '$$',
        currenciesAccepted: 'SAR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        knowsAbout: [
          'دعاية واعلان',
          'شركة دعاية واعلان',
          'وكالة دعاية واعلان',
          'تصنيع لوحات اعلانية',
          'لوحات محلات تجارية',
          'حروف بارزة مضيئة',
          'تكسية كلادينج',
          'طباعة رقمية UV',
          'اشتراطات بلدي للوحات'
        ],
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
          name: 'خدمات شركة دعاية وإعلان وتصنيع لوحات محلات',
          itemListElement: servicesData.map((svc, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc.title,
              serviceType: 'Advertising & Signage Service',
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
        name: 'شركة دعاية وإعلان - رواد الإبداع',
        alternateName: 'وكالة دعاية وإعلان رواد الإبداع',
        description: 'أفضل شركة دعاية وإعلان وتصنيع لوحات محلات وتكسية كلادينج في السعودية',
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
