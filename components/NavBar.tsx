import { TMenuItem } from '@/types';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const menuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Propietarios', path: '/' },
  { title: 'Licencias VUT', path: '/' },
];

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1691366906/Dygav/DYGAV_lce25q.svg';

export const NavBar = () => {
  return (
    <nav className='w-full h-32 hidden lg:flex p-4 justify-between items-center static'>
      <div className='h-auto w-auto relative'>
        <Image
          src={imageUrl}
          alt='DyGav Log'
          width={100}
          height={100}
          priority
        />
      </div>

      <div className='space-x-8'>
        {menuItem.map((item, index) => (
          <Link
            key={index}
            className=' text-[20px] text-white'
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className='space-x-6'>
        <button id='toggle' className='bg-white text-p600 w-36 h-10'>
          Crear Cuenta
        </button>

        <button id='toggle' className='bg-p600 text-white w-36 h-10'>
          Iniciar Sesion
        </button>
      </div>
    </nav>
  );
};
