/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com']
  },
  env: {
    AVAIBOOK_API_TOKEN: '7fd52cc3b7e215ac8e5173cd1a0d176eabe0ced50fdf1dd346676fd36d051920'
  }
}

module.exports = nextConfig
