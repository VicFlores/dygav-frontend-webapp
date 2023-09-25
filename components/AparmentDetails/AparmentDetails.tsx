/* eslint-disable react-hooks/exhaustive-deps */
import { TSearcherCard, searcherCard } from '@/utils';
import React, { FC, useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { Carousel } from './Carousel';

export const AparmentDetails: FC<{ id: string }> = ({ id }) => {
  const [accomodation, setAccomodation] = useState<TSearcherCard[]>([]);
  const infoAparment = searcherCard.filter((item) => item.id === Number(id));

  useEffect(() => {
    setAccomodation(infoAparment);
  }, [id]);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Conoce a mas detalle tu futuro alojamiento
      </p>

      <Carousel accomodation={accomodation} />

      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        ¿Que encontraras en tu alojamiento?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
        {accomodation[0]?.services.map((item, index) => (
          <div key={index} className='relative'>
            <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
            <h3 className='pl-10 md:pl-12'>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
