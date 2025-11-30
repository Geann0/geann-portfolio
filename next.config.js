/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'github.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
