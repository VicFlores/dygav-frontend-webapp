import axios from 'axios';

export const crmFinanzas = axios.create({
  baseURL: 'https://dygav-backend-crm-me7xd.ondigitalocean.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_CRM_API_KEY,
  },
});
