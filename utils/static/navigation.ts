import { TMenuItem } from '@/types';

export const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/searcher' },
  { title: 'Propietarios', path: '/owners' },
  { title: 'Licencias VUT', path: '/license' },
];

export const accounOwnertMenuItem: TMenuItem[] = [
  { title: 'Alojamiento', path: '/private/owner/dashboard' },
  { title: 'Mi perfil', path: '/' },
];

export const accounTouristMenuItem: TMenuItem[] = [
  { title: 'Alojamiento', path: '/private/tourist/dashboard' },
  { title: 'Mi perfil', path: '/' },
];
