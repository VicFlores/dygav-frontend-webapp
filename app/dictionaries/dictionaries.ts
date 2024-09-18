import { Locale, PageKeys } from '../types';

type DictionaryContent = Record<string, any>;

const dictionaries: Record<
  Locale,
  Record<PageKeys, () => Promise<DictionaryContent>>
> = {
  es: {
    home: () => import('./es/home.json').then((module) => module.default),
    navbar: () => import('./es/navbar.json').then((module) => module.default),
    accommodations: () =>
      import('./es/accommodations.json').then((module) => module.default),
    owners: () => import('./es/owners.json').then((module) => module.default),
    licenses: () =>
      import('./es/licenses.json').then((module) => module.default),
    blog: () => import('./es/blog.json').then((module) => module.default),
    ownersAccount: () =>
      import('./es/ownersAccount.json').then((module) => module.default),
    finances: () =>
      import('./es/finances.json').then((module) => module.default),
    calendar: () =>
      import('./es/calendar.json').then((module) => module.default),
    favorites: () =>
      import('./es/favorites.json').then((module) => module.default),
  },
  en: {
    home: () => import('./en/home.json').then((module) => module.default),
    navbar: () => import('./en/navbar.json').then((module) => module.default),
    accommodations: () =>
      import('./en/accommodations.json').then((module) => module.default),
    owners: () => import('./en/owners.json').then((module) => module.default),
    licenses: () =>
      import('./en/licenses.json').then((module) => module.default),
    blog: () => import('./en/blog.json').then((module) => module.default),
    ownersAccount: () =>
      import('./en/ownersAccount.json').then((module) => module.default),
    finances: () =>
      import('./en/finances.json').then((module) => module.default),
    calendar: () =>
      import('./en/calendar.json').then((module) => module.default),
    favorites: () =>
      import('./en/favorites.json').then((module) => module.default),
  },
};

export const getDictionary = async (
  locale: Locale,
  page: PageKeys
): Promise<DictionaryContent> => {
  return dictionaries[locale][page]();
};
