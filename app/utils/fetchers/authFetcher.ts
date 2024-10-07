const BASE_URL =
  'https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1/auth';
const API_KEY = '&FGYK?IJ$hCw$zUpzpSf';

export const validateAccessToken = async (accessToken: string) => {
  try {
    const res = await fetch(`${BASE_URL}/verify-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({ token: accessToken }),
    });

    return res;
  } catch (error) {
    console.error('Error fetching validateAccessToken', error);
    throw error;
  }
};

export const validateRefreshToken = async (refreshToken: string) => {
  try {
    const res = await fetch(`${BASE_URL}/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    return res;
  } catch (error) {
    console.error('Error fetching refreshAccessToken', error);
    throw error;
  }
};

export const validateUserRole = async (email: string, accessToken: string) => {
  try {
    const res = await fetch(`${BASE_URL}/user?email_username=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json,',
        'x-api-key': API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res;
  } catch (error) {
    console.error('Error fetching validateUserRole', error);
    throw error;
  }
};
