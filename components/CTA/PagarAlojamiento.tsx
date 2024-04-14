import Image from 'next/legacy/image';
import { FaRegCreditCard } from 'react-icons/fa';

export const PagarAlojamiento = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div
        className={`flex flex-col md:flex-row justify-center items-center md:space-x-2 lg:space-x-4 bg-gray300/40 border border-p600 rounded-xl py-10 md:py-5`}
      >
        <figure className='relative w-40 h-40 md:w-64 md:h-64'>
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_online_payments_re_y8f2_m0jqzm.svg'
            }
            alt='Contact Us Image'
            layout='fill'
          />
        </figure>

        <div className='flex-col space-y-4 justify-center md:justify-evenly items-center'>
          <p className='text-center text-sm px-14 md:text-lg lg:text-xl text-black700'>
            Reserva con nosotros!
          </p>

          <div className='relative flex justify-center items-center'>
            <FaRegCreditCard className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-14' />

            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[200px] md:w-[240px] lg:w-[280px] text-white'
            >
              Pagar alojamiento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
