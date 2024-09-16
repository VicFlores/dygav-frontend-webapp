import { TMenuItem } from '@/types';

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
  { title: 'Panel General', path: '/private/owner/dashboard' },
  { title: 'Reservaciones', path: '/private/owner/reservations' },
  { title: 'Mis Finanzas', path: '/private/owner/finanzas' },
  { title: 'Calendario', path: '/private/owner/calendar' },
  { title: 'Favoritos', path: '/private/tourist/favorites' },
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
