/* eslint-disable react-hooks/exhaustive-deps */
import { TSearcherCard, searcherCard } from '@/utils';
import React, { FC, useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { Carousel } from './Carousel';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const AparmentDetails: FC<{ id: string }> = ({ id }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [accomodation, setAccomodation] = useState<TSearcherCard[]>([]);
  const infoAparment = searcherCard.filter((item) => item.id === Number(id));

  useEffect(() => {
    setAccomodation(infoAparment);
  }, [id]);

  const daysInMonth = (month: any, year: any) => {
    return new Date(year, month, 0).getDate();
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = [];

  const daysCount = daysInMonth(
    selectedDate.getMonth() + 1,
    selectedDate.getFullYear()
  );
  for (let i = 1; i <= daysCount; i++) {
    days.push(i);
  }

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Conoce a mas detalle tu futuro alojamiento
      </p>

      <Carousel accomodation={accomodation} />

      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Nuestras tarifas y calendario
      </p>

      <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-evenly items-center lg:space-x-8'>
        <div>
          <table className='table-auto text-center'>
            <thead className='bg-p600 text-white'>
              <tr>
                <th className='px-4 py-2'>Desde</th>
                <th className='px-4 py-2'>Hasta</th>
                <th className='px-4 py-2'>Precio/Dia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-6 py-4'>septiembre 1, 2023</td>
                <td className='border px-6 py-4'>septiembre 30, 2023</td>
                <td className='border px-6 py-4'>${accomodation[0]?.price}</td>
              </tr>
            </tbody>
          </table>
          <div className='relative flex justify-center items-center mt-10'>
            <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-28 md:right-40 lg:right-[150px]' />
            <button className='bg-p600 hover:bg-p800 text-[13px] md:text-sm lg:text-base p-2 w-[220px] md:w-[240px] lg:w-[260px] text-white'>
              Pagar alojamiento
            </button>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-10 md:py-8 md:px-12'>
          <div className='flex justify-between items-center mb-4'>
            <button
              className='bg-gray-200 hover:bg-gray-300 rounded-lg px-2 py-1'
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1,
                    1
                  )
                )
              }
            >
              Prev
            </button>
            <h2 className='text-lg font-bold'>
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </h2>
            <button
              className='bg-gray-200 hover:bg-gray-300 rounded-lg px-2 py-1'
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1,
                    1
                  )
                )
              }
            >
              Next
            </button>
          </div>
          <div className='grid grid-cols-7 gap-y-6 gap-x-4'>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className='text-center font-bold text-gray-600'>
                {day}
              </div>
            ))}
            {Array(selectedDate.getDay())
              .fill(null)
              .map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className='text-center text-gray-400'
                >
                  -
                </div>
              ))}
            {days.map((day) => (
              <div
                key={day}
                className={`text-center font-bold ${
                  day === selectedDate.getDate()
                    ? 'bg-blue-500 text-p800 rounded-full'
                    : 'text-gray-600'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className=' text-black900/[.7] pt-12 text-2xl text-center md:text-left md:text-3xl lg:text-4xl border-b-[1px]'>
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
