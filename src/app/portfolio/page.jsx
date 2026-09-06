import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'معرض الأعمال | مشاريع شركة دعاية وإعلان وتصنيع لوحات محلات - رواد الإبداع',
  description:
    'تصفح معرض مشاريع شركة دعاية وإعلان ووكالة إنتاج إعلاني بالسعودية: تصنيع وتركيب لوحات محلات، حروف بارزة مضيئة 3D، واجهات كلادينج، وبوثات معارض.',
  keywords: [
    'معرض أعمال شركة دعاية واعلان',
    'مشاريع وكالة دعاية واعلان',
    'صور لوحات محلات',
    'نماذج حروف بارزة مضيئة',
    'مشاريع كلادينج جدة والرياض',
    'تصنيع لوحات اعلانية'
  ],
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
