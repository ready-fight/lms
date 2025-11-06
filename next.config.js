/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io', 'img.clerk.com'],
    },
    experimental: {
      reactCompiler: false,
    },
    output: 'standalone',
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;
  