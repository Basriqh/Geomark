import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.geomark.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'geomark.so',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname),
  transpilePackages: ['motion'],
};

export default nextConfig;
