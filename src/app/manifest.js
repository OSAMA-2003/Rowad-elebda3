export default function manifest() {
  return {
    name: 'رواد الإبداع | شركة دعاية وإعلان وتصنيع لوحات',
    short_name: 'شركة دعاية وإعلان',
    description: 'شركة دعاية وإعلان ووكالة إنتاج إعلاني متكاملة في السعودية - تصنيع لوحات محلات، حروف بارزة مضيئة 3D، واجهات كلادينج، وطباعة رقمية.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071325',
    theme_color: '#0070d8',
    icons: [
      {
        src: '/logo2.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo2.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
