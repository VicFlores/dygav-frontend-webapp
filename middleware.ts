import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  validateAccessToken,
  validateRefreshToken,
  validateUserRole,
} from './app/utils';

const LOGIN_URL = '/login';

async function handleInvalidAccessToken(
  request: NextRequest,
  refreshToken: string | undefined
) {
  if (!refreshToken) {
    return redirectToLogin(request);
  }

  const verifyRefreshToken = await validateRefreshToken(refreshToken);

  if (verifyRefreshToken.status === 401 || verifyRefreshToken.status === 422) {
    return redirectToLogin(request, true);
  }

  const refreshedToken = await verifyRefreshToken.json();
  const response = NextResponse.next();
  response.cookies.set('access_token', refreshedToken.data.access_token);

  return response;
}

function redirectToLogin(
  request: NextRequest,
  deleteRefreshToken: boolean = false
) {
  const response = NextResponse.redirect(new URL(LOGIN_URL, request.url));
  response.cookies.delete('access_token');
  if (deleteRefreshToken) {
    response.cookies.delete('refresh_token');
  }
  return response;
}

async function verifyTokenAndRole(
  request: NextRequest,
  accessToken: string,
  refreshToken: string | undefined,
  expectedRole: string
) {
  const verifyAccessToken = await validateAccessToken(accessToken);

  if (verifyAccessToken.status === 401 || verifyAccessToken.status === 422) {
    return handleInvalidAccessToken(request, refreshToken);
  }

  const verifiedAccessToken = await verifyAccessToken.json();

  const verifyUserRole = await validateUserRole(
    verifiedAccessToken.data.email,
    accessToken
  );

  if (verifyUserRole.status === 404 || verifyUserRole.status === 422) {
    return handleInvalidAccessToken(request, refreshToken);
  }

  const verifiedUserRole = await verifyUserRole.json();

  if (verifiedUserRole.data.ROLE !== expectedRole) {
    return redirectToLogin(request, true);
  }

  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value;
  const refreshToken = request.cookies.get('refresh_token')?.value;

  if (accessToken) {
    const verifyAccessToken = await validateAccessToken(accessToken);

    if (verifyAccessToken.status === 401 || verifyAccessToken.status === 422) {
      return handleInvalidAccessToken(request, refreshToken);
    }
  }

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/private/owners')) {
    if (!accessToken || !refreshToken) {
      return redirectToLogin(request);
    }
    return verifyTokenAndRole(request, accessToken, refreshToken, 'OWNER');
  }

  if (pathname.startsWith('/private/toursits')) {
    if (!accessToken || !refreshToken) {
      return redirectToLogin(request);
    }
    return verifyTokenAndRole(request, accessToken, refreshToken, 'TOURIST');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
