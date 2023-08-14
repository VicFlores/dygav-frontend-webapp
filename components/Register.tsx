import ExtensionIcon from '@mui/icons-material/Extension';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

export const Register = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white px-6 py-5 space-y-5 w-[450px]'>
        <div className='space-y-3'>
          <p className='font-semibold text-3xl'>¡Bienvenido!</p>
          <p className='text-xl'>Registrate en DYGAV</p>
        </div>

        <form className='grid items-center justify-center gap-8 pt-4'>
          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu email'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='password'
              placeholder='Escribe tu contraseña'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </form>

        <div className='grid gap-y-4 justify-center items-center pt-5 pb-5'>
          <Button
            type='submit'
            endIcon={<CheckCircleIcon />}
            className='bg-p600 hover:bg-p800 py-2 px-4 w-[300px] justify-self-center text-white'
          >
            Crear nueva cuenta
          </Button>

          <Button
            type='submit'
            endIcon={<GoogleIcon />}
            className='bg-white py-2 px-4 w-[300px] text-p600 border-solid border-2 border-p600'
          >
            Crear cuenta con Google
          </Button>
        </div>
      </div>
    </div>
  );
};
