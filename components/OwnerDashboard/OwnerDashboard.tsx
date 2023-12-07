/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { axiosConfig } from '@/utils';
import axios from 'axios';

export const OwnerDashboard: FC<{ session: Session }> = ({ session }) => {
  const [data, setData] = useState<any[]>();
  const [error, setError] = useState('');

  useEffect(() => {
    const accomodations = async () => {
      const { data } = await axiosConfig.get(
        `/api/accomodations/findByUserId/${session.user?._id}`
      );

      const dataArray = [];

      for (const item of data) {
        const { data: dataAvaibook } = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${item.accomodationId}/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        dataArray.push(dataAvaibook);
      }

      setData(dataArray);
    };

    accomodations();
  }, []);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Mis Alojamientos
        </p>
      </div>

      {data !== undefined && data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3'
          >
            <div className='h-fit rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[300px] md:w-[330px]'>
              <figure className='text-center'>
                <Image
                  src={`${item.images[0].ORIGINAL}`}
                  alt={''}
                  height={176}
                  width={267}
                  priority
                  className='rounded-[20px]'
                />
              </figure>

              <div className='space-y-2'>
                <p className='text-lg md:text-xl'>{`${item.name}`}</p>
                <p className='text-xs md:text-sm'>{`${item.introduction.es}`}</p>
              </div>

              <div className='flex justify-center items-center relative'>
                <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                <Link
                  href={`/private/owner/accomodation/${item.id}`}
                  passHref
                  className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                >
                  Ver Reservas
                </Link>
              </div>

              <div className='flex justify-center items-center relative'>
                <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                <Link
                  href={`/private/owner/accomodationCallender/${item.id}`}
                  passHref
                  className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                >
                  Ver Calendario
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes alojamientos!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
