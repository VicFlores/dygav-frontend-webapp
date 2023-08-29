export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/license/:path*'],
};
