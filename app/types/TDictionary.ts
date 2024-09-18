export type Dictionary = {
  [key: string]: {
    [key: string]: string;
  };
};

export type PageKeys =
  | 'home'
  | 'navbar'
  | 'accommodations'
  | 'owners'
  | 'licenses'
  | 'blog'
  | 'ownersAccount'
  | 'finances'
  | 'calendar'
  | 'favorites';

export type Locale = 'en' | 'es';

export type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};
