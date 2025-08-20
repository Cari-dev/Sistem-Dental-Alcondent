import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // tu configuración normal

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@shared': path.resolve(__dirname, '../../shared'),
    };
    return config;
  },
};

export default nextConfig;
