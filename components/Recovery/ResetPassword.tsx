import { BiExtension } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { ChangeEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';

export const ResetPassword = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const [infoState, setInfoState] = useState({
    password: '',
    rewritePassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleRecovery = async () => {
    const { password, rewritePassword } = infoState;

    if (!password || !rewritePassword) {
      return setError('Todos los campos son requeridos');
    }

    if (infoState.password !== infoState.rewritePassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('Enviando...');

    try {
      await axios.post('/api/recovery/changePassword', {
        token: router.query.token,
        newPassword: infoState.password,
      });

      setError('Contraseña actualizada, volviendo a inicio de sesión...');

      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      } else {
        setError('Error al enviar el correo');
      }
    }
  };

  return (
    <div className='mt-10 md:mt-8 lg:mt-0'>
      <div className='flex flex-col justify-evenly items-center rounded-xl bg-white px-6 py-4 md:py-6 lg:py-10  w-[350px] md:w-[500px] h-[400px] lg:h-[450px]'>
        <div className='space-y-4 text-center'>
          <p className='font-semibold text-lg md:text-xl lg:text-3xl'>
            ¡Bienvenido!
          </p>
          <p className='text-base md:text-lg'>Recupera tu contraseña</p>
        </div>

        <form className='grid items-center justify-center gap-8 pt-4'>
          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='password'
              name='password'
              value={infoState.password}
              onChange={handleChange}
              placeholder='Escribe tu contraseña'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='password'
              name='rewritePassword'
              value={infoState.rewritePassword}
              onChange={handleChange}
              placeholder='Reescribe tu contraseña'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </form>

        <div className='grid gap-y-4 justify-center items-center pt-6 md:pt-8'>
          <div className='relative'>
            <AiOutlineSend className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-4 lg:right-3' />
            <button
              onClick={handleRecovery}
              className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[250px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Reestablecer contraseña
            </button>
          </div>
        </div>

        {error && (
          <div className='text-xs lg:text-base text-center mt-2'>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
