import { Accommodation } from '@/app/apartamentos/interfaces';
import { crmApi } from '@/app/config';

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
