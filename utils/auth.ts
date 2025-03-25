import { GetServerSidePropsContext } from 'next';

export const getUserFromCookies = async (
  context?: GetServerSidePropsContext,
  access_token?: string,
  refresh_token?: string
) => {
  const cookieHeader = context?.req.headers.cookie || '';
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=').map((c) => c.trim());
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  let user;

  if (
    cookies.access_token ||
    (access_token && cookies.refresh_token) ||
    refresh_token
  ) {
    const verifyAccessToken = await fetch(
      'https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth/verify-token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_CRM_API_KEY}`,
        },
        body: JSON.stringify({ token: cookies.access_token || access_token }),
      }
    );

    if (verifyAccessToken.status !== 200) {
      const validateRefreshToken = await fetch(
        `https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth/refresh-token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${process.env.NEXT_PUBLIC_CRM_API_KEY}`,
          },
          body: JSON.stringify({
            token: cookies.refresh_token || refresh_token,
          }),
        }
      );

      if (validateRefreshToken.status === 200) {
        const verifiedRefreshToken = await validateRefreshToken.json();

        const verifyAccessToken = await fetch(
          'https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth/verify-token',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': `${process.env.NEXT_PUBLIC_CRM_API_KEY}`,
            },
            body: JSON.stringify({
              token: verifiedRefreshToken.data.access_token,
            }),
          }
        );

        const verifiedAccessToken = await verifyAccessToken.json();

        const validateUserRole = await fetch(
          `https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth/user?email_username=${verifiedAccessToken.data.email}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json,',
              'x-api-key': `${process.env.NEXT_PUBLIC_CRM_API_KEY}`,
              Authorization: `Bearer ${verifiedRefreshToken.data.access_token}`,
            },
          }
        );

        const userRole = await validateUserRole.json();

        user = {
          username: userRole.data.username,
          role: userRole.data.role,
        };
      }
    } else {
      const verifiedAccessToken = await verifyAccessToken.json();

      const validateUserRole = await fetch(
        `https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth/user?email_username=${verifiedAccessToken?.data.email}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json,',
            'x-api-key': `${process.env.NEXT_PUBLIC_CRM_API_KEY}`,
            Authorization: `Bearer ${cookies.access_token || access_token}`,
          },
        }
      );

      const userRole = await validateUserRole.json();

      user = {
        username: userRole.data.username,
        role: userRole.data.role,
      };
    }
  } else {
    user = null;
  }

  return user;
};
