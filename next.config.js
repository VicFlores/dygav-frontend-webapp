/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com', 'www.avaibook.com', 'dygav-wordpress.app.bigital.es']
  },
  env: {
    AVAIBOOK_API_TOKEN: 'e8f0d39c83dff242a8e47744d1d0fc5f76e4e2363752f6fe117f7d7e2924144d'
  }
}

module.exports = nextConfig
