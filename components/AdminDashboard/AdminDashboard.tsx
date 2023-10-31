/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { axiosConfig } from '@/utils';

interface PropsAvaibook {
  id: number;
  name: string;
}

interface PropsDygav {
  userId: string;
  accomodationId: number;
}

export const AdminDashboard = () => {
  const [accomodations, setAccomodations] = useState<PropsAvaibook[]>([
    { id: 0, name: '' },
  ]);
  const [accomodationsDygav, setAccomodationsDygav] = useState<PropsDygav[]>([
    {
      accomodationId: 0,
      userId: '',
    },
  ]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAccomodations = async () => {
      const { data } = await axios.get(
        'https://api.avaibook.com/api/owner/accommodations/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      setAccomodations(data);
    };

    const getAccomodationsDygav = async () => {
      const { data } = await axiosConfig.get('api/accomodations/route', {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
        },
      });

      setAccomodationsDygav(data);
    };

    getAccomodations();
    getAccomodationsDygav();
  }, []);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <div className='border-b-[1px]'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Gestion de alojamientos
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <table className='w-auto rounded-xl'>
          <tr className='bg-gray300'>
            <th className='p-6'>Nombre de alojamiento</th>
            <th className='p-6'>Asignar usuario</th>
          </tr>
          {accomodations.map((accomodation, index) => {
            const isAssigned = accomodationsDygav.some(
              (item) => Number(item.accomodationId) === accomodation.id
            );

            return (
              <tr
                key={index}
                className={`text-center ${
                  index % 2 === 0 ? 'bg-gray300/70' : 'bg-gray300/80'
                }`}
              >
                <td className='py-4 px-8'>{accomodation?.name}</td>
                <td className='py-4 px-8'>
                  <Link
                    href={`/private/admin/addAccomodation/${accomodation.id}`}
                  >
                    {isAssigned ? 'Asignado' : 'No asignado'}
                  </Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>

      {/* <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes alojamientos!
            </p>

            <div className='relative'>
              <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 text-white' />
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 py-2 px-4 w-[250px] text-left text-white justify-self-center self-center'
              >
                Crear un alojamiento
              </button>
            </div>
          </div>
        </div> */}
    </div>
  );
};
