/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    QUIZ_API_KEY: process.env.NEXT_PUBLIC_QUIZ_API_KEY,
  },
};

export default nextConfig;
