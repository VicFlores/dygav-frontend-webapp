export interface Accommodation {
  accommodationid: number | string;
  slug: string;
  accommodation: string;
  introductions: {
    en: string;
    es: string;
  };
  images: { url: string; orientation: 'portrait' | 'landscape' }[];
  main_features: {
    VALUE: number;
    DYGAV_SPANISH: string;
  }[];
  capacity: number;
  categories: {
    category_id: number;
  }[];
  aviabookid: number;
  public_cleaning_price: number;
  descriptions: {
    en: string;
    es: string;
  };
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  features: {
    CATEGORY_EN: string;
    CATEGORY_ES: string;
    DYGAV_ENGLISH: string;
    DYGAV_SPANISH: string;
  }[];
}
