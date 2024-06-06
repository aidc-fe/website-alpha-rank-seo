/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.alicdn.com',
        port: '',
        pathname: '/imgextra/i2/**',
      },
    ],
  }
};

export default nextConfig;
