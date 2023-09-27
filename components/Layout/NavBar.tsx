import { TSession } from '@/types';
import {
  accounOwnertMenuItem,
  accounTouristMenuItem,
  publicMenuItem,
} from '@/utils';
import { signOut } from 'next-auth/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1695653645/Dygav/DYGAV_WHITE_izc04w.svg';

export const NavBar: FC<TSession> = ({ session }) => {
  const router = useRouter();

  return (
    <>
      {session?.user ? (
        <nav className='w-full h-28 hidden lg:flex p-4 justify-between items-center static bg-p600'>
          <div className='h-auto w-auto relative'>
            <Image
              src={imageUrl}
              alt='DyGav Log'
              width={100}
              height={100}
              priority
            />
          </div>

          <div className='flex justify-evenly items-center grow'>
            {session?.user?.role === 'tourist'
              ? accounTouristMenuItem.map((item, index) => (
                  <Link
                    key={index}
                    className=' text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))
              : session?.user?.role === 'owner'
              ? accounOwnertMenuItem.map((item, index) => (
                  <Link
                    key={index}
                    className=' text-[20px] text-white'
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))
              : null}

            <div className='h-14 w-14 relative'>
              {session?.user.image ? (
                <Image
                  src={session.user.image}
                  alt={'Profile picture'}
                  layout='fill'
                  className='rounded-full'
                />
              ) : (
                <Image
                  src={
                    'https://res.cloudinary.com/vicflores11/image/upload/v1695077734/Dygav/undraw_Pic_profile_re_7g2h_o0irqa.WebP'
                  }
                  alt={'Profile picture'}
                  layout='fill'
                  className='rounded-full'
                />
              )}
            </div>
          </div>

          <div className='space-x-6'>
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
