import { Accommodation } from '@/app/apartamentos/interfaces';
import { crmApi } from '@/app/config';

export const getAccommodation = async (slug: string) => {
  try {
    const response = await crmApi.get<Accommodation>(
      `/accommodations/details/${slug}`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    // Return empty array instead of throwing error
    return null;
  }
};
