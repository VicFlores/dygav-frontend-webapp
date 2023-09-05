import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Dashboard = () => {
  return (
    <div className='px-8 space-y-12'>
      <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Mis Reservaciones
      </p>

      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
          <p className=' text-black900/[.7] lg:text-3xl'>
            ¡Aún no tienes reservaciones!
          </p>

          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 text-white' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 py-2 px-4 w-[250px] text-left text-white justify-self-center self-center'
            >
              Realizar una reservación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
