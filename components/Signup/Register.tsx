import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

export const Register = () => {
  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='bg-white px-6 py-4 md:py-6 lg:py-10 space-y-5 w-[350px] md:w-[450px]'>
        <div className='space-y-3'>
          <p className='font-semibold text-lg md:text-xl lg:text-3xl'>
            ¡Bienvenido!
          </p>
          <p className='text-base md:text-lg lg:text-xl'>
            Inicia sesión en DYGAV
          </p>
        </div>

        <form className='grid items-center justify-center gap-8 pt-4'>
          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu email'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='password'
              placeholder='Escribe tu contraseña'
              className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </form>

        <div className='grid gap-y-4 justify-center items-center pt-6 md:pt-8'>
          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-5 lg:right-7' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Iniciar sesión
            </button>
          </div>

          <div className='relative'>
            <FcGoogle className='w-5 md:h-5 absolute text-white top-1/2 -translate-y-1/2 right-4 md:right-4 lg:right-8' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-left text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
