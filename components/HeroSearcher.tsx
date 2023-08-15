import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';

export const HeroSearcher = () => {
  return (
    <section className='w-full text-white px-[66px] py-[70px]'>
      <p className='lg:text-[45px] md:text-[40px]'>¿A Donde Te Apetece Ir?</p>

      <form className='lg:flex lg:space-x-8 lg:space-y-0 md:block md:space-y-8 p-[30px] mt-5 bg-p600/70'>
        <div className='grid lg:grid-cols-3 lg:gap-5 md:gap-8'>
          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
              <input
                type='text'
                placeholder='Tipo de propiedad'
                className='pl-10 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
              <input
                type='text'
                placeholder='Servicios'
                className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
              <input
                type='text'
                placeholder='Prestaciones'
                className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center md:justify-center lg:justify-normal relative lg:col-start-1 lg:col-end-3'>
            <label className='relative'>
              <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
              <input
                type='text'
                placeholder='Servicios basicos'
                className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
              <input
                type='text'
                placeholder='Huespedes'
                className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>
        </div>

        <div className='grid md:justify-center md:items-center'>
          <Button
            type='submit'
            endIcon={<CheckCircleIcon />}
            className='bg-p600 hover:bg-p800 py-2 px-4 w-[180px] text-white'
          >
            Buscar ahora
          </Button>
        </div>
      </form>
    </section>
  );
};
