import React, { useContext } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { TMenuItem } from '@/types';
import { UIContext } from '@/context';
import { IconButton } from '@mui/material';

const menuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Propietarios', path: '/' },
  { title: 'Licencias VUT', path: '/' },
];

export const BurgerMenu = () => {
  const { sideMenu, isToogleBurgerMenu } = useContext(UIContext);

  const handlerToogleMenu = () => {
    isToogleBurgerMenu(!sideMenu);
  };

  return (
    <nav className='w-full h-auto lg:hidden p-4 static'>
      <div onClick={handlerToogleMenu}>
        <IconButton>
          <MenuIcon sx={{ color: 'white', fontSize: '40px' }} />
        </IconButton>
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
            <button id='toggle' className='bg-white text-p600 w-36 h-10'>
              Crear Cuenta
            </button>

            <button id='toggle' className='bg-p600 text-white w-36 h-10'>
              Iniciar Sesion
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
