/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Pages stored locally in /public/pages - no remote optimization needed
    unoptimized: false,
  },
};

export default nextConfig;
