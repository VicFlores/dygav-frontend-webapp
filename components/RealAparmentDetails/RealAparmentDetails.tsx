/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { BsCheckCircle } from 'react-icons/bs';
import axios from 'axios';
import { ReservationCalendar } from './ReservationCalendar';
import { TablePreview } from './TablePreview';
import { ReservationInfoProvider } from '@/context';

interface IRealAparmentDetails {
  depositAmount: number;
  id: string;
  name: string;
  location: {
    city: string;
  };
  description: {
    es: string;
  };
  images: {
    ORIGINAL: string;
  }[];
  features: {
    n_hab: number;
    n_banos: number;
    superficie: number;
  };
  units: Unit[];
}

type Unit = {
  weekPrice: number;
  weekendPrice: number;
  capacity: number;
  unitSeasons: {
    dateIni: string;
    dateEnd: string;
    weekPrice: number;
    weekendPrice: number;
  }[];
  additionalCapacity: number;
};

export interface TAccomodation {
  unit: string;
  startDate: Date;
  endDate: Date;
  type: string;
  booking: string;
}

const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

const RealAparmentDetails: FC<{ id: string }> = ({ id }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [accomodation, setAccomodation] = useState<IRealAparmentDetails>({
    depositAmount: 0,
    id: '',
    name: '',
    location: {
      city: '',
    },
    description: {
      es: '',
    },
    images: [
      {
        ORIGINAL: '',
      },
    ],
    features: {
      n_hab: 0,
      n_banos: 0,
      superficie: 0,
    },
    units: [
      {
        weekPrice: 0,
        weekendPrice: 0,
        capacity: 0,
        additionalCapacity: 0,
        unitSeasons: [
          {
            dateIni: new Date().toISOString(),
            dateEnd: new Date().toISOString(),
            weekPrice: 0,
            weekendPrice: 0,
          },
        ],
      },
    ],
  });
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const getAllAccomodations = async () => {
      if (id) {
        const { data } = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${id}/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );
        setAccomodation(data);
      }
    };

    getAllAccomodations();
  }, [id]);

  const cleanUp =
    Number(accomodation.features.n_hab) === 1
      ? 65
      : Number(accomodation.features.n_hab) === 2
      ? 75
      : Number(accomodation.features.n_hab) === 3
      ? 120
      : 0;

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Conoce los detalles de tu futuro alojamiento
      </p>

      <Carousel accomodation={accomodation} />

      <p className=' text-black900/[.7] mt-10 text-2xl text-center md:text-left md:text-3xl lg:pt-16 lg:text-4xl border-b-[1px]'>
        Nuestras tarifas y disponibilidad
      </p>

      {isMobile ? (
        <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-evenly lg:items-center lg:space-x-8'>
          <ReservationInfoProvider>
            <TablePreview />

            <ReservationCalendar />
          </ReservationInfoProvider>
        </div>
      ) : (
        <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-evenly lg:items-center lg:space-x-8'>
          <ReservationInfoProvider>
            <TablePreview />

            <ReservationCalendar />
          </ReservationInfoProvider>
        </div>
      )}

      <p className=' text-black900/[.7] pt-12 text-2xl text-center md:text-left md:text-3xl lg:text-4xl border-b-[1px]'>
        ¿Qué encontrarás en tu alojamiento?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>balcon</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>cafetera</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>congelador</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>cocina</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>frigorifico</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>microondas</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>tostadora</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>comedor</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>armario</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>internet</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>plancha</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>sofa</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>Tv pantalla plana</h3>
        </div>
        <div className='relative'>
          <BsCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 md:left-3 text-p600' />
          <h3 className='pl-10 md:pl-12'>hervidor</h3>
        </div>
      </div>
    </div>
  );
};

export default RealAparmentDetails;
