'use server';

import { cookies } from 'next/headers';

export const delCookies = () => {
  cookies().delete('access_token');
  cookies().delete('refresh_token');
};
