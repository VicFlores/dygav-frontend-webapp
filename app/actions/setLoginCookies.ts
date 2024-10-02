'use server';

import { cookies } from 'next/headers';

export async function setLoginCookies(
  access_token: string,
  refresh_token: string
) {
  const cookieStore = cookies();

  cookieStore.set('access_token', access_token);
  cookieStore.set('refresh_token', refresh_token);
}
