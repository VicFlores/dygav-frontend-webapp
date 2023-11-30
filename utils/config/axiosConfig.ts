import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://stingray-app-hizoq.ondigitalocean.app/',
});
