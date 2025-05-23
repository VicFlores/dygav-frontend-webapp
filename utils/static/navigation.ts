import useDictionary from '@/app/hooks/useDictionary';
import { PageKeys } from '@/app/types';
import { TMenuItem } from '@/types';

const getTranslatedMenuItems = (
  dictionary: any,
  menuItems: TMenuItem[]
): TMenuItem[] => {
  return menuItems.map((item) => ({
    ...item,
    title: dictionary[item.title] || item.title,
    submenu: item.submenu
      ? getTranslatedMenuItems(dictionary, item.submenu)
      : undefined,
  }));
};

const useTranslatedMenuItems = (
  page: PageKeys,
  menuItems: TMenuItem[]
): TMenuItem[] => {
  const dictionary = useDictionary(page);

  return getTranslatedMenuItems(dictionary, menuItems);
};

export const usePublicMenuItems = () =>
  useTranslatedMenuItems('navbar', publicMenuItem);

export const useAccountOwnerMenuItems = () =>
  useTranslatedMenuItems('navbar', accounOwnertMenuItem);

export const useAccountTouristMenuItems = () =>
  useTranslatedMenuItems('navbar', accounTouristMenuItem);

export const useAccountAdminMenuItems = () =>
  useTranslatedMenuItems('navbar', accountAdminMenuItem);

export const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Alojamientos', path: '/apartamentos' },
  {
    title: 'Propietarios',
    path: '/gestion-integral-apartamentos-turisticos',
    submenu: [
      {
        title: 'Gestion Viviendas Turísticas Madrid',
        path: '/gestion-viviendas-turisticas/madrid',
      },
      {
        title: 'Gestion Viviendas Turísticas Costa Blanca',
        path: '/gestion-viviendas-turisticas/costa-blanca',
      },
      {
        title: 'Gestion Viviendas Turísticas Pirineo Aragones',
        path: '/gestion-viviendas-turisticas/pirineo-aragones',
      },
    ],
  },
  {
    title: 'Licencias VUT',
    path: '/licencias-turisticas',
    submenu: [
      {
        title: 'Licencias Turísticas Madrid',
        path: '/licencias-turisticas/madrid',
      },
      {
        title: 'Licencias Turísticas Costa Blanca',
        path: '/licencias-turisticas/costa-blanca',
      },
      {
        title: 'Licencias Turísticas Pirineo Aragones',
        path: '/licencias-turisticas/pirineo-aragones',
      },
    ],
  },
  { title: 'Blog', path: '/blog' },
];

export const accounOwnertMenuItem: TMenuItem[] = [
  { title: 'General Panel', path: '/private/owners/dashboard' },
  { title: 'Reservations', path: '/private/owners/reservations' },
  { title: 'My Finances', path: '/private/owners/finanzas' },
  { title: 'Calendar', path: '/private/owners/calendar' },
  { title: 'Favorites', path: '/private/tourist/favorites' },
];

export const accounTouristMenuItem: TMenuItem[] = [
  { title: 'Reservas', path: '/private/tourist/dashboard' },
  { title: 'Favoritos', path: '/private/tourist/favoriteAccomodations' },
  { title: 'Inicio', path: '/' },
];

export const accountAdminMenuItem: TMenuItem[] = [
  { title: 'Reservas admin', path: '/private/admin/dashboard' },
  { title: 'Planning', path: '/private/admin/planning' },
];
