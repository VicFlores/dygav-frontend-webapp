import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import moment from 'moment';

export const HelpFixedButton = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const currentTime = moment();
  const startTime = moment().set({ hour: 9, minute: 30, second: 0 });
  const endTime = moment().set({ hour: 20, minute: 0, second: 0 });

  return (
    <>
      {currentTime.isBetween(startTime, endTime) && (
        <button
          className='fixed text-xs md:text-sm lg:text-base bottom-4 right-4 px-3 py-2 bg-blue-500 text-white rounded-full bg-p600 z-10'
          onClick={() => setAreOptionsVisible(!areOptionsVisible)}
        >
          ¿Necesitas ayuda?
        </button>
      )}

      {areOptionsVisible && (
        <>
          <div className='fixed bottom-16 right-4 p-2 bg-red-500 text-p600 z-10'>
            <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-6 md:right-5 lg:right-6' />
            <a href='tel:+34614214250'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 rounded-xl text-center text-xs md:text-sm lg:text-base py-2 px-4 w-32 md:w-[140px] lg:w-40 text-white'
              >
                Llamada
              </button>
            </a>
          </div>

          <div className='fixed bottom-28 right-4 p-2 bg-red-500 text-p600 z-10'>
            <BsWhatsapp className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-4 lg:right-5' />
            <Link href='https://wa.me/+34614214250' target='_blanck'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 rounded-xl text-center text-xs md:text-sm lg:text-base py-2 px-4 w-32 md:w-[140px] lg:w-40 text-white'
              >
                WhatsApp
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
