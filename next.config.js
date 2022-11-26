/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb://tpanel:Is2232551!@localhost:27017/tpanel?authSource=admin",
    NEXTAUTH_SECRET: "123456789",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_JWT_SECRET: "123456789",
}
}
