export default function manifest() {
  return {
    name: 'رواد الإبداع للإنتاج الإعلاني والدعاية',
    short_name: 'رواد الإبداع',
    description: 'رواد الإبداع للإنتاج الإعلاني - حلول متكاملة لتصنيع وتركيب اللوحات الإعلانية، الحروف البارزة والمضيئة، الكلادينج والطباعة الرقمية في المملكة العربية السعودية.',
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
