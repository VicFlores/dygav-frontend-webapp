import { axiosConfig } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import {
  ApartamentosTuristicosHero,
  Footer,
  Layout,
  MainHero,
  UtilHead,
  SearcherRealCards,
} from '@/components';
import Image from 'next/legacy/image';

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

interface FilterAccomodation {
  accomodationFull: {
    id: string;
    depositAmount: number;
    name: string;

    introduction: {
      es: string;
    };

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
  };
}

const ApartamentosFiltros = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<FilterAccomodation[]>([
    {
      accomodationFull: {
        id: '',
        depositAmount: 0,
        name: '',

        introduction: {
          es: '',
        },

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
            unitSeasons: [
              {
                dateIni: '',
                dateEnd: '',
                weekPrice: 0,
                weekendPrice: 0,
              },
            ],
            additionalCapacity: 0,
          },
        ],
      },
    },
  ]);
  const {
    query: { ubicacion, checkin, checkout, huespedes },
  } = useRouter();

  useEffect(() => {
    const filterAccomodations = async () => {
      if (ubicacion && checkin && checkout && huespedes) {
        const res = await axiosConfig.get(
          `/api/accomodations/filterByLocationPeopleDates?location=${ubicacion}&people=${huespedes}&checkin=${checkin}&checkout=${checkout}`
        );

        setData(res.data);
      }
    };

    filterAccomodations();
  }, [ubicacion, checkin, checkout, huespedes]);

  return (
    <section>
      <UtilHead title={`Dygav Apartamentos en ${ubicacion}`} content='' />

      <MainHero>
        <Layout session={session}>
          <ApartamentosTuristicosHero ubicacion={ubicacion as string} />
        </Layout>
      </MainHero>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 mb-56 gap-y-20'>
        {data.length === 0 ? (
          <div className='col-start-1 col-end-4 flex flex-col justify-center items-center mx-6'>
            <div className='border border-p600 px-14 py-8 flex flex-col justify-center items-center rounded-xl'>
              <figure className='relative h-60 w-60 md:h-80 md:w-80'>
                <Image
                  src='https://res.cloudinary.com/vicflores11/image/upload/v1702396927/Dygav/notfound_t5mgaw.svg'
                  alt=''
                  layout='fill'
                  className=''
                />
              </figure>

              <p className='text-p600 text-base md:text-lg lg:text-xl text-center lg:text-start'>
                No hemos encontrado alojamientos segun tu busqueda
              </p>
            </div>
          </div>
        ) : data[0].accomodationFull.id === '' ? (
          <div className='col-start-1 col-end-4'>
            <div className='border border-p600/30 shadow rounded-md px-6 py-10 max-w-sm w-full mx-auto '>
              <div className='animate-pulse flex space-x-4'>
                <div className='rounded-full bg-p600/60 h-10 w-10'></div>
                <div className='flex-1 space-y-6 py-1'>
                  <div className='h-2 bg-p600/60 rounded'></div>
                  <div className='space-y-3'>
                    <div className='grid grid-cols-3 gap-4'>
                      <div className='h-2 bg-p600/60 rounded col-span-2'></div>
                      <div className='h-2 bg-p600/60 rounded col-span-1'></div>
                    </div>
                    <div className='h-2 bg-p600/60 rounded'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center space-x-4 mt-6'>
              <FaSpinner className='animate-spin h-5 w-5 text-p400' />
              <span className='text-lg font-medium text-p600'>
                Buscando tu alojamiento ideal...
              </span>
            </div>
          </div>
        ) : (
          <>
            {data.map((item, index) => (
              <SearcherRealCards key={index} item={item.accomodationFull} />
            ))}
          </>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default ApartamentosFiltros;
