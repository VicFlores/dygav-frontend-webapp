import { TMenuItem } from '@/types';

export const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Alojamientos', path: '/apartamentos' },
  { title: 'Propietarios', path: '/propietarios' },
  { title: 'Licencias VUT', path: '/licencias-turisticas' },
];

export const accounOwnertMenuItem: TMenuItem[] = [
  { title: 'Alojamiento', path: '/private/owner/dashboard' },
  { title: 'Mi perfil', path: '/' },
];

export const accounTouristMenuItem: TMenuItem[] = [
  { title: 'Reservas', path: '/private/tourist/dashboard' },
  { title: 'Favoritos', path: '/private/tourist/favoriteAccomodations' },
  { title: 'Mi perfil', path: '/' },
];
