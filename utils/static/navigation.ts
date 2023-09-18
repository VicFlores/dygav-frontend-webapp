import { TMenuItem } from '@/types';

export const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/searcher' },
  { title: 'Propietarios', path: '/owners' },
  { title: 'Licencias VUT', path: '/license' },
];

export const accountMenuItem: TMenuItem[] = [
  { title: 'Reservaciones', path: '/private/dashboard' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Mi perfil', path: '/' },
];
