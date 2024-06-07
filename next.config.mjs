/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // domains: ['ae01.alicdn.com', 'wp.edgeshop.ai'], // 使用的图片来源域名
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "img.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "wp.edgeshop.ai",
      },
      {
        protocol: "https",
        hostname: "*.wp.com",
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
      {
        protocol: "https",
        hostname:
          "t-selection-algorithms-image.oss-ap-southeast-1.aliyuncs.com",
      },
    ],
  },
};

export default nextConfig;
