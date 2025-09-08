/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['bcryptjs']
  },
  images: {
    domains: ['localhost', 'naf-contabil.netlify.app'],
    unoptimized: true
  },
  trailingSlash: false,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://naf-contabil.netlify.app',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'naf-production-secret-2024'
  }
};

module.exports = nextConfig;
