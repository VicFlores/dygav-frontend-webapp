import { TSession } from '@/types';
import {
  accounOwnertMenuItem,
  accounTouristMenuItem,
  accountAdminMenuItem,
  publicMenuItem,
} from '@/utils';
import { signOut } from 'next-auth/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const imageUrl =
  'https://multimedia.dygav.es/wp-content/uploads/2024/04/1.Dygav_Blanco_Vertical_z64ijw.svg';

export const NavBar: FC<TSession> = ({ session }) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  const bkCurrentUrl =
    currentUrl.startsWith('/private/tourist') ||
    currentUrl.startsWith('/private/owner') ||
    currentUrl.startsWith('/private/admin')
      ? 'bg-p600'
      : 'bg-transparent';

  const menuItems =
    session?.user?.role === 'tourist'
      ? currentUrl.startsWith('/private/tourist')
        ? accounTouristMenuItem
        : publicMenuItem
      : session?.user?.role === 'owner'
      ? currentUrl.startsWith('/private/owner') ||
        currentUrl.startsWith('/private/tourist')
        ? accounOwnertMenuItem
        : publicMenuItem
      : session?.user?.role === 'admin'
      ? currentUrl.startsWith('/private/admin')
        ? accountAdminMenuItem
        : publicMenuItem
      : publicMenuItem;

  const hoverMenuItems =
    session?.user?.role === 'tourist'
      ? !currentUrl.startsWith('/private/tourist')
        ? accounTouristMenuItem
        : publicMenuItem
      : session?.user?.role === 'admin'
      ? !currentUrl.startsWith('/private/admin')
        ? accountAdminMenuItem
        : publicMenuItem
      : session?.user?.role === 'owner'
      ? !currentUrl.startsWith('/private/owner') &&
        !currentUrl.startsWith('/private/tourist')
        ? accounOwnertMenuItem
        : publicMenuItem
      : publicMenuItem;

  return (
    <>
      {session?.user ? (
        <nav
          className={`w-full h-28 hidden lg:grid lg:grid-cols-4 justify-between items-center static ${bkCurrentUrl}`}
        >
          <div className='h-auto w-auto relative'>
            <Image
              src={imageUrl}
              alt='DyGav Log'
              width={100}
              height={100}
              priority
            />
          </div>

          <div className='lg:col-start-2 lg:col-end-4'>
            <ul className='flex justify-evenly items-center space-x-4'>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  className='text-[20px] text-white'
                  href={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>

          <div className='group relative flex flex-col items-center'>
            <figure className='h-14 w-14 relative '>
              <Image
                src={
                  session?.user.image ||
                  'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Pic_profile_re_7g2h_o0irqa-1.png'
                }
                alt={'Profile picture'}
                layout='fill'
                className='rounded-full'
              />
            </figure>

            <div className='z-20 absolute hidden group-hover:block bg-p400/80 p-4 space-y-4 rounded-lg shadow-lg text-center mt-[58px]'>
              <h4 className='text-[20px] text-white'>
                Bienvenido: {session.user.name || session.user.fullname}
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
        </nav>
      ) : (
        <nav className='w-full h-32 hidden lg:flex p-4 justify-between items-center static'>
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

          <div className='space-x-6'>
            <Link
              href='/register'
              passHref
              id='toggle'
              className='bg-white text-p600 px-5 py-2'
            >
              Crear Cuenta
            </Link>

            <Link
              href='/login'
              passHref
              id='toggle'
              className='bg-p600 text-white px-5 py-2'
            >
              Iniciar Sesion
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
