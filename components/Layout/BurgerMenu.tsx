import React, { useContext } from 'react';
import Link from 'next/link';
import { TMenuItem } from '@/types';
import { UIContext } from '@/context';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/legacy/image';

const menuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Propietarios', path: '/' },
  { title: 'Licencias VUT', path: '/' },
];

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1691366906/Dygav/DYGAV_lce25q.svg';

export const BurgerMenu = () => {
  const { sideMenu, isToogleBurgerMenu } = useContext(UIContext);

  const handlerToogleMenu = () => {
    isToogleBurgerMenu(!sideMenu);
  };

  return (
    <nav className='w-full h-auto lg:hidden p-4 static'>
      <div className='flex justify-between items-center'>
        <div className='h-auto w-auto'>
          <Image
            src={imageUrl}
            alt='DyGav Log'
            width={70}
            height={70}
            priority
          />
        </div>

        <div onClick={handlerToogleMenu}>
          <GiHamburgerMenu className='text-white text-4xl md:text-5xl' />
        </div>
      </div>

      {sideMenu ? (
        <div className='grid gap-y-8 bg-p600/50 h-auto pt-6 pb-6 mt-6'>
          <div className='grid justify-center items-center text-center'>
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
          <div className='grid justify-center items-center gap-y-4'>
            <Link
              href='register'
              passHref
              id='toggle'
              className='bg-white text-p600 px-5 py-2'
            >
              Crear Cuenta
            </Link>

            <Link
              href='login'
              passHref
              id='toggle'
              className='bg-p600 text-white px-5 py-2'
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
