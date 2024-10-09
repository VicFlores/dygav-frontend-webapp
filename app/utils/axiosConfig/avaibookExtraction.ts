import axios from 'axios';

export const avaibookExtraction = axios.create({
  baseURL: 'https://aviabook-data-extraction-llv4d.ondigitalocean.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
