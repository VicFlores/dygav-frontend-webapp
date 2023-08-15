import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Button } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CallIcon from '@mui/icons-material/Call';

export const ContactYou = () => {
  return (
    <section className='grid justify-center items-center gap-4 mb-24 '>
      <p className='text-center text-[34px] text-black700 border-b-4 border-b-p600 pb-2'>
        Nos Ponemos en Contacto Contigo
      </p>

      <div className='w-[450px] self-center justify-self-center pt-5 text-black900'>
        <form className='grid gap-8 px-6 py-6 pt-4 border-2 border-gray300'>
          <p className='text-xl text-center'>Completa tu información</p>

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
              placeholder='Escribe tu correo electronico'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Cuentanos un poco mas'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <Button
            type='submit'
            endIcon={<ContactMailIcon />}
            className='bg-p600 hover:bg-p800 py-2 px-4 w-[300px] justify-self-center text-white'
          >
            Contacta con nosotros
          </Button>
        </form>
      </div>

      <div className='grid grid-cols-2 mt-10'>
        <Button
          type='submit'
          endIcon={<CallIcon />}
          className='bg-p600 hover:bg-p800 py-2 px-4 w-auto text-xl justify-self-center text-white'
        >
          +34 614 165 736
        </Button>

        <Button
          type='submit'
          endIcon={<CallIcon />}
          className='bg-p600 hover:bg-p800 py-2 px-4 w-auto text-xl justify-self-center text-white'
        >
          +34 614 214 250
        </Button>
      </div>
    </section>
  );
};
