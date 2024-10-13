'use client';

import { axiosConfig } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import moment from 'moment';
import esES from 'rsuite/locales/es_ES';
import 'rsuite/DateRangePicker/styles/index.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CustomProvider } from 'rsuite';
import { DateRangePicker } from 'rsuite';

type BlockDayProps = {
  unit: string;
  startDate: string;
  endDate: string;
  type: string;
  booking: string;
};

type Props = {
  setlistenBlockDate: React.Dispatch<React.SetStateAction<BlockDayProps>>;
  id: string;
};

const BlockCalendarDaysForm: FC<Props> = ({ setlistenBlockDate, id }) => {
  const [error, setError] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [findAccomodationById, setfindAccomodationById] = useState<{
    name: string;
  }>({ name: '' });

  useEffect(() => {
    const findAccomodation = async () => {
      const res = await axios.get(
        `https://api.avaibook.com/api/owner/accommodations/${id}/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      setfindAccomodationById(res.data);
    };

    findAccomodation();
  }, [id]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setError('');

    const formatStartDate = moment(startDate).format('YYYY-MM-DD');
    const formatEndDate = moment(endDate)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');

    const res = await axios.post(
      `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/`,
      {
        startDate: formatStartDate,
        endDate: formatEndDate,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
        },
      }
    );

    setlistenBlockDate(res.data);

    // const response = await axiosConfig.post('/api/mailing/blockDays', {
    //   fullname: 'Jose Llaneza',
    //   owner: session?.user?.fullname,
    //   email: session?.user?.email,
    //   startDate: moment(startDate).format('dddd D [de] MMMM [de] YYYY'),
    //   endDate: moment(endDate).format('dddd D [de] MMMM [de] YYYY'),
    //   accomodation: findAccomodationById.name,
    // });

    setError('Dias bloqueados con exito');
  };

  const { beforeToday } = DateRangePicker;

  return (
    <div className='flex justify-center items-center mt-10'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col mt-4 bg-gray300/75 rounded-xl p-12 lg:p-10 lg:gap-10'
      >
        <div className='text-center self-center justify-self-center'>
          <p className='pb-4 font-semibold'>Fecha inicio - Fecha final </p>

          <div className='relative'>
            <FaRegCalendarAlt className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900 z-10' />

            <CustomProvider locale={esES}>
              <DateRangePicker
                isoWeek
                showOneCalendar
                ranges={[]}
                placeholder='Fechas de reserva'
                size='md'
                caretAs={null}
                showHeader={false}
                shouldDisableDate={beforeToday()}
                format='dd-MM-yyyy'
                onChange={(dates) => {
                  if (dates) {
                    setStartDate(dates[0]);
                    setEndDate(dates[1]);
                  }
                }}
                className='rounded-lg lg:w-[275px] md:w-96 w-[240px] bg-white py-1'
              />
            </CustomProvider>
          </div>
        </div>

        <button
          className='text-sm md:text-base bg-p600 self-center justify-self-center text-white py-2 px-10 rounded-lg hover:bg-blue-600 lg:col-start-1 lg:col-end-3'
          type='submit'
        >
          Bloquear Fechas
        </button>

        <span className='self-center justify-self-center lg:col-start-1 lg:col-end-3'>
          {error}
        </span>
      </form>
    </div>
  );
};

export default BlockCalendarDaysForm;
