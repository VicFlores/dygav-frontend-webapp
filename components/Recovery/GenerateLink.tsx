import { BiExtension } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { ChangeEvent, FC, useState } from 'react';
import { TSession } from '@/types';
import axios, { AxiosError } from 'axios';

export const GenerateLink: FC<TSession> = ({ session }) => {
  const [error, setError] = useState('');

  const [infoState, setInfoState] = useState({
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleRecovery = async () => {
    const { email } = infoState;

    if (!email) return setError('El correo es requerido');

    setError('Enviando...');

    try {
      await axios.post('/api/recovery/generateLink', { email });

      setError('Correo enviado, revisa tu bandeja de entrada');

      setInfoState({
        email: '',
      });
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
      <div className='flex flex-col justify-evenly items-center rounded-xl bg-white px-6 py-4 md:py-6 lg:py-10  w-[350px] md:w-[500px] h-[350px]  md:h-[450px]'>
        <div className='space-y-4 text-center'>
          <p className='font-semibold text-lg md:text-xl lg:text-3xl'>
            ¡Bienvenido!
          </p>
          <p className='text-sm lg:text-base lg:px-12'>
            {' '}
            Te enviaremos un correo con un enlace para recuperar tu contraseña
          </p>
        </div>

        <form className='w-3/4'>
          <label className='relative w-full'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              name='email'
              value={infoState.email}
              onChange={handleChange}
              placeholder='Escribe tu email'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </form>

        <div className='grid gap-y-4 justify-center items-center lg:pt-6 md:pt-8'>
          <div className='relative'>
            <AiOutlineSend className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-7' />
            <button
              onClick={handleRecovery}
              className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Enviar
            </button>
          </div>
        </div>

        {error && (
          <div className='text-xs lg:text-base text-center'>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
