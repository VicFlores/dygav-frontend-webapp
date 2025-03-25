import { crmApi } from '@/app/config';
import { Category } from '../interfaces';

export const getCategories = async () => {
  try {
    const response = await crmApi.get<Category[]>('/categories');

    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
