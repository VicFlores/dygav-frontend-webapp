import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { TSession } from '@/types';
import { UIContext } from '@/context';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/legacy/image';
import {
  accounOwnertMenuItem,
  accounTouristMenuItem,
  publicMenuItem,
} from '@/utils';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1695653645/Dygav/DYGAV_WHITE_izc04w.svg';

export const BurgerMenu: FC<TSession> = ({ session }) => {
  const { sideMenu, isToogleBurgerMenu } = useContext(UIContext);
  const router = useRouter();
  const currentUrl = router.asPath;

  const handlerToogleMenu = () => {
    isToogleBurgerMenu(!sideMenu);
  };

  const bkCurrentUrl =
    currentUrl.startsWith('/private/tourist') ||
    currentUrl.startsWith('/private/owner')
      ? 'bg-p600'
      : 'bg-transparent';

  const menuItems =
    session?.user?.role === 'tourist'
      ? currentUrl.startsWith('/private/tourist')
        ? accounTouristMenuItem
        : publicMenuItem
      : session?.user?.role === 'owner'
      ? currentUrl.startsWith('/private/owner')
        ? accounOwnertMenuItem
        : publicMenuItem
      : publicMenuItem;

  const hoverMenuItems =
    session?.user?.role === 'tourist'
      ? !currentUrl.startsWith('/private/tourist')
        ? accounTouristMenuItem
        : publicMenuItem
      : session?.user?.role === 'owner'
      ? !currentUrl.startsWith('/private/owner')
        ? accounOwnertMenuItem
        : publicMenuItem
      : publicMenuItem;

  return (
    <>
      {session?.user ? (
        <nav className={`w-full h-auto lg:hidden p-4 static ${bkCurrentUrl}`}>
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
              <GiHamburgerMenu className='text-white text-4xl md:text-5xl hover:cursor-pointer' />
            </div>
          </div>

          {sideMenu ? (
            <div className='grid gap-y-8 bg-p400/70 h-auto pt-6 pb-6 mt-6'>
              <ul className='grid justify-center items-center text-center'>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    className='text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
                {hoverMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    className='text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>

              <div className='grid justify-center items-center gap-y-4'>
                <button
                  className='bg-white text-p600 px-5 py-2'
                  onClick={async () => {
                    await signOut();
                    router.push('/login');
                  }}
                >
                  Cerrar Sesion
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      ) : (
        <nav className='w-full h-auto lg:hidden p-4 static'>
          <div className='flex justify-between items-center'>
            <div className='h-auto w-auto'>
              <Link href='/'>
                <Image
                  src={imageUrl}
                  alt='DyGav Log'
                  width={70}
                  height={70}
                  priority
                />
              </Link>
            </div>

            <div onClick={handlerToogleMenu}>
              <GiHamburgerMenu className='text-white text-4xl md:text-5xl hover:cursor-pointer' />
            </div>
          </div>

          {sideMenu ? (
            <div className='grid gap-y-8 bg-p600/50 h-auto pt-6 pb-6 mt-6'>
              <div className='grid justify-center items-center text-center'>
                {publicMenuItem.map((item, index) => (
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
                  href='/register'
                  passHref
                  id='toggle'
                  className='text-sm md:text-base bg-white text-p600 px-5 py-2'
                >
                  Crear Cuenta
                </Link>

                <Link
                  href='/login'
                  passHref
                  id='toggle'
                  className='text-sm md:text-base bg-p600 text-white px-5 py-2'
                >
                  Iniciar Sesion
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      )}
    </>
  );
};
