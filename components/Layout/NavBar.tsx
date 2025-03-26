'use client';

import LanguageSwitcher from '@/app/components/shared/LanguageSwitcher/LanguageSwitcher';
import useDictionary from '@/app/hooks/useDictionary';
import { TSession } from '@/types';
import {
  useAccountAdminMenuItems,
  useAccountOwnerMenuItems,
  useAccountTouristMenuItems,
  usePublicMenuItems,
} from '@/utils';
import { signOut } from 'next-auth/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC } from 'react';

const imageUrl =
  'https://multimedia.dygav.es/wp-content/uploads/2024/04/1.Dygav_Blanco_Vertical_z64ijw.svg';

export const NavBar: FC<{ user: TSession }> = ({ user }) => {
  const pathname = usePathname();
  const router = useRouter();

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
          className={`w-full h-28 hidden lg:grid lg:grid-cols-4 justify-between items-center static ${bkCurrentUrl} ${isSpecialRoute}`}
        >
          <div className='h-auto w-auto relative'>
            <Link href={'/'}>
              <Image
                src={imageUrl}
                alt='DyGav Log'
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>

          <div className='lg:col-start-2 lg:col-end-4'>
            <ul className='flex justify-evenly items-center space-x-4'>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className='group relative flex justify-center items-center'
                >
                  <Link className='text-[20px] text-white' href={item.path}>
                    {item.title}
                  </Link>

                  {item.submenu && (
                    <ul className='absolute top-[29px] text-center space-y-2 z-10 w-max bg-p400/80 text-white p-4 rounded-md shadow-lg hidden group-hover:block'>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.path}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className='group relative flex flex-col items-center'>
            <figure className='h-12 w-12 relative '>
              <Image
                src={
                  'https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/undraw_pic-profile_nr49.svg'
                }
                alt={'Profile picture'}
                layout='fill'
                className='rounded-full'
                priority
              />
            </figure>

            <div className='z-20 absolute hidden group-hover:block bg-p400/80 p-4 space-y-4 rounded-lg shadow-lg text-center mt-[58px]'>
              <h4 className='text-[20px] text-white'>
                {dictionary.nav?.welcome}: {user.username}
              </h4>

              <ul className='flex flex-col items-center justify-center'>
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

              <LanguageSwitcher />

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
        </nav>
      ) : (
        <nav
          className={`w-full h-32 hidden lg:flex p-4 justify-between items-center static ${isSpecialRoute}}`}
        >
          <div className='h-auto w-auto relative'>
            <Link href='/'>
              <Image
                src={imageUrl}
                alt='DyGav Log'
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>

          <div className='space-x-8'>
            {publicMenuItems.map((item, index) => (
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
            <Link
              href='/register'
              passHref
              id='toggle'
              className='bg-white text-p600 px-5 py-2'
            >
              {dictionary.nav?.createAccount}
            </Link>

            <Link
              href='/login'
              passHref
              id='toggle'
              className='bg-p600 text-white px-5 py-2'
            >
              {dictionary.nav?.login}
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
