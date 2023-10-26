/* eslint-disable react-hooks/exhaustive-deps */
import { TSearcherCard, searcherCard } from '@/utils';
import React, { FC, useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { Carousel } from './Carousel';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const AparmentDetails: FC<{ id: string }> = ({ id }) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [accomodation, setAccomodation] = useState<TSearcherCard[]>([]);
  const [price, setPrice] = useState(0);
  const infoAparment = searcherCard.filter((item) => item.id === Number(id));

  useEffect(() => {
    setAccomodation(infoAparment);
  }, [id]);

  useEffect(() => {
    const dailyRate = accomodation[0]?.price || 0;

    const startDate = selectedStartDate || new Date();
    const endDate = selectedEndDate || new Date();

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    const totalPrice = numDays * dailyRate;

    setPrice(totalPrice);
  }, [selectedEndDate]);

  const handleDateClick = (date: Date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (!selectedEndDate) {
      if (date >= selectedStartDate) {
        setSelectedEndDate(date);
      } else {
        setSelectedStartDate(date);
        setSelectedEndDate(selectedStartDate);
      }
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate || !selectedEndDate) {
      return false;
    }
    return date >= selectedStartDate && date <= selectedEndDate;
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

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Conoce a mas detalle tu futuro alojamiento
      </p>

      <Carousel accomodation={accomodation} />

      <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl border-b-[1px]'>
        Nuestras tarifas y calendario
      </p>

      <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-evenly lg:items-center lg:space-x-8'>
        <div className='items-center justify-center overflow-x-auto pb-6'>
          <table className='table-auto text-center text-[9.8px] md:text-base'>
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
                  {selectedStartDate
                    ? selectedStartDate.toISOString().substring(0, 10)
                    : 'septiembre 30, 2023'}
                </td>
                <td className='border px-6 py-4'>
                  {selectedEndDate
                    ? selectedEndDate.toISOString().substring(0, 10)
                    : 'septiembre 30, 2023'}
                </td>
                {accomodation?.map((item) => (
                  <td key={item.id} className='border px-6 py-4'>
                    ${item.cleanup}
                  </td>
                ))}

                {accomodation?.map((item) => (
                  <td key={item.id} className='border px-6 py-4'>
                    ${price !== 0 ? price + item.cleanup : 0}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <div className='flex justify-center items-center mt-10'>
            <button className='bg-p600 hover:bg-p800 text-[13px] md:text-sm lg:text-base p-2 w-[220px] md:w-[240px] lg:w-[260px] text-white mt-10'>
              <span className='flex justify-center items-center space-x-4'>
                <span>Pagar alojamiento</span>
                <AiOutlineCheckCircle className='w-4 h-4 md:h-5 md:w-5 text-white' />
              </span>
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
            {days.map((day) => {
              const date = new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                day
              );
              const isInRange = isDateInRange(date);
              const isSelectedStart =
                selectedStartDate &&
                date.getTime() === selectedStartDate.getTime();
              const isSelectedEnd =
                selectedEndDate && date.getTime() === selectedEndDate.getTime();
              const isSelectable = !selectedEndDate || date <= selectedEndDate;
              const className = `text-center font-bold ${
                isInRange
                  ? 'bg-blue-500 text-p800'
                  : isSelectedStart || isSelectedEnd
                  ? 'bg-blue-300 text-p800'
                  : 'text-gray-600'
              } ${
                isSelectable
                  ? 'cursor-pointer hover:bg-blue-100'
                  : 'text-gray-400'
              }`;
              return (
                <div
                  key={day}
                  className={className}
                  onClick={() => isSelectable && handleDateClick(date)}
                >
                  {day}
                </div>
              );
            })}
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
