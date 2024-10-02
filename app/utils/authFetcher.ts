const BASE_URL = 'https://dygav-crm-backend.onrender.com/api/v1/auth';
const API_KEY = '&FGYK?IJ$hCw$zUpzpSf';

export const authFetcher = async (url: string, tokenType: string) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({ token: tokenType }),
    });

    return res;
  } catch (error) {
    console.error('Error fetching auth', error);
    throw error;
  }
};
