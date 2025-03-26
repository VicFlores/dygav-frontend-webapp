import { crmApi } from '@/app/config';
import { Accommodation } from '../interfaces';

export const getAccommodations = async () => {
  try {
    const response = await crmApi.get<Accommodation[]>('/accommodations');
    return response.data;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    // Return empty array instead of throwing error
    return [];
  }
};
