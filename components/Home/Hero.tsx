import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';

export const Hero = () => {
  return (
    <section className='w-full  text-white px-[66px] py-[70px]'>
      <div>
        <p className='lg:text-[45px] md:text-[40px]'>Bienvenidos a DYGAV</p>
        <p className='lg:text-[27px] md:text-[22px]'>
          Donde la excelencia en la gestión de apartamentos <br /> turísticos
          cobra vida respaldada por la experiencia y el renombre del Grupo
          Pacitel.
        </p>
      </div>

      <form className='grid lg:grid-cols-4 gap-4 p-[30px] mt-16 bg-p600/50'>
        <div className='grid items-center justify-center relative'>
          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='text'
              placeholder='Ubicacion'
              className='pl-10 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='grid items-center justify-center relative'>
          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='date'
              className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='grid items-center justify-center relative'>
          <label className='relative'>
            <ExtensionIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='number'
              placeholder='Huespedes'
              className='pl-10 pr-4 bg-transparent shadow appearance-none border border-white placeholder:text-white rounded w-full py-2 text-white leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='grid justify-center items-center'>
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
