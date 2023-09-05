import { TMenuItem } from '@/types';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const publicMenuItem: TMenuItem[] = [
  { title: 'Viaja', path: '/' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Propietarios', path: '/' },
  { title: 'Licencias VUT', path: '/' },
];

const accountMenuItem: TMenuItem[] = [
  { title: 'Reservaciones', path: '/' },
  { title: 'Apartamentos', path: '/' },
  { title: 'Mi perfil', path: '/' },
];

const imageUrl =
  'https://res.cloudinary.com/vicflores11/image/upload/v1691366906/Dygav/DYGAV_lce25q.svg';

interface Props {
  session: Session | null;
}

export const NavBar: FC<Props> = ({ session }) => {
  const router = useRouter();

  return (
    <>
      {session?.user ? (
        <nav className='w-full h-32 hidden lg:flex p-4 justify-between items-center static bg-p600'>
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
            {accountMenuItem.map((item, index) => (
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
            <Image
              src={imageUrl}
              alt='DyGav Log'
              width={100}
              height={100}
              priority
            />
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
        </nav>
      )}
    </>
  );
};
