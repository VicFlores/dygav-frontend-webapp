/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'www.avaibook.com',
      'dygav-wordpress.app.bigital.es',
      'multimedia.dygav.es',
    ],
  },
  env: {
    AVAIBOOK_API_TOKEN:
      'e8f0d39c83dff242a8e47744d1d0fc5f76e4e2363752f6fe117f7d7e2924144d',
  },
  // Enable cors for all domains
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS, POST' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-Requested-With, Content-Type, Accept, Origin, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
