import useDictionary from '@/app/hooks/useDictionary';
import Image from 'next/legacy/image';
import { FC } from 'react';
import { BiPhoneCall } from 'react-icons/bi';

export const Llamanos: FC<{ paddingX?: string }> = ({ paddingX = 'px-16' }) => {
  const dictionary: any = useDictionary('licenses');

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`flex flex-col md:flex-row justify-center items-center  bg-gray300/40 border border-p600 rounded-xl px-9 md:px-10 ${paddingX} py-10 md:py-5`}
      >
        <figure className='relative w-52 h-52 md:w-64 md:h-64'>
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_personal_email_re_4lx7_c7oydo.svg'
            }
            alt='Contact Us Image'
            layout='fill'
          />
        </figure>

        <div className='flex-col space-y-4 justify-center md:justify-evenly items-center'>
          <p className='text-center text-2xl px-14 md:text-3xl text-black700'>
            {dictionary.licenseAditionalInfo?.callUs}
          </p>

          <div className='relative'>
            <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
            <a href='tel:+34614165736'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-full md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 124 863
              </button>
            </a>
          </div>

          <div className='relative'>
            <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
            <a href='tel:+34614214250'>
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-full md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 214 250
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
