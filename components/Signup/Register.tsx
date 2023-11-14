import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import axios, { AxiosError } from 'axios';
import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineMail,
  MdOutlinePassword,
} from 'react-icons/md';
import Link from 'next/link';

export const Register = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const [infoState, setInfoState] = useState({
    fullname: '',
    email: '',
    password: '',
    marketingPermissions: 'default',
    acceptancePrivacyPolicies: 'default',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleRegister = async () => {
    const {
      fullname,
      email,
      password,
      marketingPermissions,
      acceptancePrivacyPolicies,
    } = infoState;

    try {
      const signupResponse = await axios.post('/api/auth/signup/route', {
        fullname,
        email,
        password,
        marketingPermissions,
        acceptancePrivacyPolicies,
      });

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password,
        redirect: false,
      });

      if (res?.error) return setError(res.error);

      if (res?.ok) return router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className='flex items-center justify-center mt-4 md:mt-8 lg:mt-0 pb-4'>
      <div className='bg-white px-6 py-4 md:py-6 lg:py-4 lg:px-10  space-y-5 w-[350px] md:w-[480px] lg:w-[600px]'>
        <div className='space-y-3 lg:mt-6'>
          <p className='font-semibold text-lg md:text-xl lg:text-3xl'>
            ¡Bienvenido!
          </p>
          <p className='text-base md:text-lg lg:text-xl'>
            Crear tu cuenta en{' '}
            <span className='font-semibold text-p600'>DYGAV</span>
          </p>
        </div>

        <form className='grid items-center justify-center gap-8 pt-4'>
          <label className='relative'>
            <MdOutlineDriveFileRenameOutline className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              name='fullname'
              value={infoState.fullname}
              onChange={handleChange}
              placeholder='Escribe tu nombre completo'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <MdOutlineMail className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              name='email'
              value={infoState.email}
              onChange={handleChange}
              placeholder='Escribe tu email'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <MdOutlinePassword className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='password'
              name='password'
              value={infoState.password}
              onChange={handleChange}
              placeholder='Escribe tu contraseña'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <div className=''>
            <label>
              <input
                type='checkbox'
                name='acceptancePrivacyPolicies'
                value='true'
                checked={infoState.acceptancePrivacyPolicies === 'true'}
                onChange={handleChange}
                className='mr-2'
              />
              He leído y acepto la {''}
              <span>
                <Link
                  href={'/policies/privacyPolicy'}
                  className='underline  text-p600'
                  target='_blanck'
                >
                  política de privacidad
                </Link>
              </span>
            </label>
          </div>

          <div className=''>
            <label className='mr-4'>
              <input
                type='checkbox'
                name='marketingPermissions'
                value='true'
                checked={infoState.marketingPermissions === 'true'}
                onChange={handleChange}
                className='mr-2'
              />
              Me gustaría recibir ofertas especiales y notificaciones sobre
              alquileres vacacionales y promociones relacionadas.
            </label>
          </div>
        </form>

        <div className='grid gap-y-4 justify-center items-center pt-4 md:pt-6'>
          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-5 lg:right-7' />
            <button
              type='submit'
              onClick={handleRegister}
              className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Registrarse
            </button>
          </div>

          <div className='relative'>
            <FcGoogle className='w-5 md:h-5 absolute text-white top-1/2 -translate-y-1/2 right-4 md:right-4 lg:right-8' />
            <button
              onClick={async () =>
                await signIn('google', { callbackUrl: '/login' })
              }
              className='bg-p600 hover:bg-p800 text-left text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Registrarse con Google
            </button>
          </div>

          {error && (
            <div className='text-center'>
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
