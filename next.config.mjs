/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    QUIZ_API_KEY: process.env.QUIZ_API_KEY,
  },
};

export default nextConfig;
