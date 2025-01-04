/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // добавьте домены для изображений
  },
  async redirects() {
    return [
      {
        source: '/return',
        destination: '/Return',
        permanent: true,
      },
      // ...другие редиректы
    ];
  },
}

module.exports = nextConfig 