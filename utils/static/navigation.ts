import { TMenuItem } from '@/types';

export const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Alojamientos', path: '/apartamentos' },
  { title: 'Propietarios', path: '/gestion-integral-apartamentos-turisticos' },
  { title: 'Licencias VUT', path: '/licencias-turisticas' },
  { title: 'Blog', path: '/blogs' },
];

export const accounOwnertMenuItem: TMenuItem[] = [
  { title: 'Mis Alojamientos', path: '/private/owner/dashboard' },
  { title: 'Reservas', path: '/private/tourist/dashboard' },
  { title: 'Favoritos', path: '/private/tourist/favoriteAccomodations' },
];

export const accounTouristMenuItem: TMenuItem[] = [
  { title: 'Reservas', path: '/private/tourist/dashboard' },
  { title: 'Favoritos', path: '/private/tourist/favoriteAccomodations' },
  { title: 'Inicio', path: '/' },
];

export const accountAdminMenuItem: TMenuItem[] = [
  { title: 'Reservas admin', path: '/private/admin/dashboard' },
  { title: 'Favoritos', path: '/private/admin/dashboard' },
  { title: 'Inicio', path: '/' },
];
