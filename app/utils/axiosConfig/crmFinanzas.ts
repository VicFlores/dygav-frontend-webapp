import axios from 'axios';

export const crmFinanzas = axios.create({
  baseURL: 'https://dygav-crm-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '&FGYK?IJ$hCw$zUpzpSf',
  },
});
