/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['flowbite.s3.amazonaws.com', "flowbite.com", "mdbcdn.b-cdn.net", "flowbite.s3.amazonaws.com", "placeimg.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig