import { Accommodation } from '@/app/apartamentos/interfaces';

interface ProcessedAccommodation {
  id: number | string;
  images: { url: string }[];
  alt: string;
  title: string;
  description: string;
  pricePerNight: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  maxGuests: number;
  slug: string;
  introductions: {
    en: string;
    es: string;
  };
}

export const getAccommodationsByCategory = (
  accommodations: Accommodation[],
  categoryId: number
): ProcessedAccommodation[] => {
  return accommodations
    .filter((accommodation) =>
      accommodation.categories.some((cat) => cat.category_id === categoryId)
    )
    .map((acc) => ({
      id: acc.accommodationid,
      slug: acc.slug,
      images: acc.images,
      alt: acc.accommodation,
      title: acc.accommodation,
      introductions: {
        es: acc.introductions.es || '',
        en: acc.introductions.en || '',
      },
      description: acc.introductions.es || acc.introductions.en,
      pricePerNight: 'Consultar precio',
      bedrooms:
        acc.main_features.find((f) => f.DYGAV_SPANISH === 'Habitaciones')
          ?.VALUE || 0,
      bathrooms:
        acc.main_features.find((f) => f.DYGAV_SPANISH === 'Baños')?.VALUE || 0,
      size: `${
        acc.main_features.find((f) => f.DYGAV_SPANISH === 'Superficie')
          ?.VALUE || 0
      }m`,
      maxGuests: acc.capacity,
    }));
};
