import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'أعمالنا | معرض مشاريع اللوحات والإنتاج الإعلاني - رواد الإبداع',
  description:
    'تصفح معرض مشاريع رواد الإبداع: تصنيع وتركيب لوحات محلات، حروف بارزة مضيئة، واجهات كلادينج، مطبوعات ديجيتال، وبوثات معارض منفذة في مختلف مدن السعودية.',
  keywords: [
    'مشاريع رواد الإبداع',
    'أعمال رواد الابداع',
    'صور لوحات محلات',
    'نماذج حروف بارزة',
    'مشاريع كلادينج جدة',
    'معرض أعمال دعاية واعلان'
  ],
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
