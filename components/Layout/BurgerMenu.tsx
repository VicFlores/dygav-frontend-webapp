'use client';

import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { TSession } from '@/types';
import { UIContext } from '@/context';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/legacy/image';
import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import {
  publicMenuItem,
  useAccountAdminMenuItems,
  useAccountOwnerMenuItems,
  useAccountTouristMenuItems,
  usePublicMenuItems,
} from '@/utils';
import useDictionary from '@/app/hooks/useDictionary';
import LanguageSwitcher from '@/app/components/shared/LanguageSwitcher/LanguageSwitcher';

const imageUrl =
  'https://multimedia.dygav.es/wp-content/uploads/2024/04/1.Dygav_Blanco_Vertical_z64ijw.svg';

export const BurgerMenu: FC<{ user: TSession }> = ({ user }) => {
  const { sideMenu, isToogleBurgerMenu } = useContext(UIContext);
  const pathname = usePathname();
  const router = useRouter();

  const handlerToogleMenu = () => {
    isToogleBurgerMenu(!sideMenu);
  };

  const bkCurrentUrl =
    pathname?.startsWith('/private/tourist') ||
    pathname?.startsWith('/private/owners') ||
    pathname?.startsWith('/private/admin')
      ? 'bg-p600'
      : 'bg-transparent';

  const isSpecialRoute = pathname?.startsWith('/apartamentos')
    ? 'absolute z-50 bg-transparent'
    : '';

  const publicMenuItems = usePublicMenuItems();
  const ownerMenuItems = useAccountOwnerMenuItems();
  const touristMenuItems = useAccountTouristMenuItems();
  const adminMenuItems = useAccountAdminMenuItems();

  const menuItems =
    user?.role === 'tourist'
      ? pathname?.startsWith('/private/tourist')
        ? touristMenuItems
        : publicMenuItems
      : user?.role === 'OWNER'
      ? pathname?.startsWith('/private/owners') ||
        pathname?.startsWith('/private/tourist')
        ? ownerMenuItems
        : publicMenuItems
      : user?.role === 'admin'
      ? pathname?.startsWith('/private/admin')
        ? adminMenuItems
        : publicMenuItems
      : publicMenuItems;

  const hoverMenuItems =
    user?.role === 'tourist'
      ? !pathname?.startsWith('/private/tourist')
        ? touristMenuItems
        : publicMenuItems
      : user?.role === 'admin'
      ? !pathname?.startsWith('/private/admin')
        ? adminMenuItems
        : publicMenuItems
      : user?.role === 'OWNER'
      ? !pathname?.startsWith('/private/owners') &&
        !pathname?.startsWith('/private/tourist')
        ? ownerMenuItems
        : publicMenuItems
      : publicMenuItems;

  const dictionary: any = useDictionary('home');

  return (
    <>
      {user ? (
        <nav
          className={`w-full h-auto lg:hidden p-4 static ${bkCurrentUrl} ${isSpecialRoute}`}
        >
          <div className='flex justify-between items-center'>
            <div className='h-auto w-auto'>
              <Link href={'/'}>
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
            <div className='grid gap-y-8 bg-p400/70 h-auto pt-6 pb-6 mt-6'>
              <ul className='grid justify-center items-center text-center gap-y-2'>
                <p className='text-[20px] text-white font-semibold'>
                  ¡{dictionary.nav?.hello} {user.username}!
                </p>

                <figure className='h-16 w-16 relative justify-self-center self-center mb-4'>
                  <Image
                    src={
                      'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Pic_profile_re_7g2h_o0irqa-1.png'
                    }
                    alt={'Profile picture'}
                    layout='fill'
                    className='rounded-full'
                  />
                </figure>

                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    className='text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}

                <div className='border-t border-white border' />

                {hoverMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    className='text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}

                <LanguageSwitcher />
              </ul>

              <div className='grid justify-center items-center gap-y-4'>
                <button
                  className='bg-white text-p600 px-5 py-2'
                  onClick={async () => {
                    await signOut();
                    router.push('/login');
                  }}
                >
                  {dictionary.nav?.logout}
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      ) : (
        <nav
          className={`w-full h-auto lg:hidden p-4 static ${isSpecialRoute}}`}
        >
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
