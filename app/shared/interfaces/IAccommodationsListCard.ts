export interface AccommodationsList {
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
