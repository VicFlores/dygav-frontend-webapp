import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { authFetcher } from './app/utils';

const LOGIN_URL = '/login';
const VERIFY_TOKEN_URL = '/verify-token';
const REFRESH_TOKEN_URL = '/refresh-token';
const USER_ROLE_URL = 'https://dygav-crm-backend.onrender.com/api/v1/auth/user';
const API_KEY = '&FGYK?IJ$hCw$zUpzpSf';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value;
  const refreshToken = request.cookies.get('refresh_token')?.value;

  if (!accessToken || !refreshToken) {
    console.error('No access token or refresh token found');
    return NextResponse.redirect(new URL(LOGIN_URL, request.url));
  }

  try {
    const validateAccessToken = await authFetcher(
      VERIFY_TOKEN_URL,
      accessToken
    );

    if (
      validateAccessToken.status === 401 ||
      validateAccessToken.status === 422
    ) {
      const validateRefreshToken = await authFetcher(
        REFRESH_TOKEN_URL,
        refreshToken
      );

      if (
        validateRefreshToken.status === 401 ||
        validateRefreshToken.status === 422
      ) {
        const response = NextResponse.redirect(new URL(LOGIN_URL, request.url));

        response.cookies.delete('access_token');
        response.cookies.delete('refresh_token');

        console.error('Access token and refresh token are invalid');
        return response;
      }

      const validatedFreshToken = await validateRefreshToken.json();

      const response = NextResponse.next();

      response.cookies.set(
        'access_token',
        validatedFreshToken.data.access_token
      );

      console.info('Access token has been refreshed');

      return response;
    }

    const validatedAccessToken = await validateAccessToken.json();

    const validateRole = await fetch(
      `${USER_ROLE_URL}?email_username=${validatedAccessToken.data.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const validatedRole = await validateRole.json();

    const { pathname } = request.nextUrl;

    if (
      (pathname.startsWith('/private/owners') &&
        validatedRole.data.ROLE !== 'OWNER') ||
      (pathname.startsWith('/private/tourist') &&
        validatedRole.data.ROLE !== 'TOURIST')
    ) {
      return NextResponse.redirect(new URL(LOGIN_URL, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error during token validation', error);
    return NextResponse.redirect(new URL(LOGIN_URL, request.url));
  }
}

export const config = {
  matcher: ['/private/:path*'],
};
