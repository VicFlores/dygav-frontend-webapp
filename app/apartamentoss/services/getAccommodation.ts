import { crmApi } from '@/app/config';
import { Accommodation } from '../interfaces';

export const getAccommodation = async (slug: string) => {
  try {
    const response = await crmApi.get<Accommodation>(
      `/accommodations/details/${slug}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
