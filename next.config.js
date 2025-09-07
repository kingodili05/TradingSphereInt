/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  // Disable service worker in development
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
  // Optimize webpack cache
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
