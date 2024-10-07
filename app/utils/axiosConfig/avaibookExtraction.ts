import axios from 'axios';

export const avaibookExtraction = axios.create({
  baseURL: 'https://avaibook-data-extraction-production.up.railway.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
