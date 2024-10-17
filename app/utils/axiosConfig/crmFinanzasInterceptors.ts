import { cookies } from 'next/headers';
import { crmFinanzas } from './crmFinanzas';
import { validateAccessToken } from '../fetchers/authFetcher';

export function verifyTokens() {
  crmFinanzas.interceptors.request.use(
    async function (config) {
      const access_token = cookies().get('access_token');
      const refresh_token = cookies().get('refresh_token');

      const verifyAccessToken = await validateAccessToken(
        access_token?.value as string
      );

      if (
        verifyAccessToken.status === 401 ||
        verifyAccessToken.status === 422
      ) {
        const verifyRefreshToken = await validateAccessToken(
          refresh_token?.value as string
        );

        if (
          verifyRefreshToken.status === 401 ||
          verifyRefreshToken.status === 422
        ) {
          throw new Error('Invalid refresh token');
        }

        const verifiedRefreshToken = await verifyRefreshToken.json();

        cookies().set('access_token', verifiedRefreshToken.data.access_token);

        config.headers.Authorization = `Bearer ${verifiedRefreshToken.data.access_token}`;
      }

      config.headers.Authorization = `Bearer ${access_token?.value}`;

      return config;
    },
    function (error) {
      // Do something with the request error
      return Promise.reject(error);
    }
  );
}
