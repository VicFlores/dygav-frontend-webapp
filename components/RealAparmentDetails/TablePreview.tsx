import React, { useEffect, useState } from 'react';
import { PagarAlojamiento } from '../CTA/PagarAlojamiento';
import { ReservationInfoContext } from '@/context';
import axios from 'axios';

export const TablePreview = () => {
  const [accomodation, setAccomodation] = useState([]);
  const { reservationInfo, setReservationInfo } = React.useContext(
    ReservationInfoContext
  );

  useEffect(() => {
    const getAccomodationById = async () => {
      const res = await axios.get(
        `https://api.avaibook.com/api/owner/accommodations/377390/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      setAccomodation(res.data);
    };

    getAccomodationById();
  }, []);

  let totalAmount = 0;
  let cleanService = 0;

  return (
    <div className='items-center justify-center overflow-x-auto pb-6'>
      <table className='table-auto text-center text-[9.2px] md:text-base'>
        <thead className='bg-p600 text-white'>
          <tr>
            <th className='px-4 py-2'>Desde</th>
            <th className='px-4 py-2'>Hasta</th>
            <th className='px-4 py-2'>Precio limpieza</th>
            <th className='px-4 py-2'>Precio total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-6 py-4'>
              {reservationInfo.startDate
                ? reservationInfo.startDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : 'Esperando fecha'}
            </td>
            <td className='border px-6 py-4'>
              {reservationInfo.endDate
                ? reservationInfo.endDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : 'Esperando fecha'}
            </td>

            <td className='border px-6 py-4'>€{cleanService}</td>

            <td className='border px-6 py-4'>
              {totalAmount !== 0 ? totalAmount : 'Esperando precio total'}
            </td>
          </tr>
        </tbody>
      </table>

      <PagarAlojamiento />
    </div>
  );
};
