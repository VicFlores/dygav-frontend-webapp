import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { TUserToken } from './types';

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl;
    const { role } = req.nextauth.token?.user as TUserToken;

    if (pathname.startsWith('/private/owner/dashboard') && role !== 'owner') {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }

    if (pathname.startsWith('/private/dashboard') && role !== 'tourist') {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/private/:path*'],
};
