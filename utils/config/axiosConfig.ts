import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://www.dygav.es',
});
