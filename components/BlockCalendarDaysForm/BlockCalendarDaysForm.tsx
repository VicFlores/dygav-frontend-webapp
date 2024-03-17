import { axiosConfig } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import moment from 'moment';

type FormValues = {
  startDate: string;
  endDate: string;
};

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
  const { register, handleSubmit } = useForm<FormValues>();
  const { data: session } = useSession();

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

  const onSubmit: SubmitHandler<FormValues> = async ({
    startDate,
    endDate,
  }) => {
    const res = await axios.post(
      `https://api.avaibook.com/api/owner/accommodations/${id}/calendar/`,
      {
        startDate,
        endDate,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
        },
      }
    );

    setlistenBlockDate(res.data);

    await axiosConfig.post('/api/mailing/blockDays', {
      fullname: 'Jose Llaneza',
      owner: session?.user?.fullname,
      email: session?.user?.email,
      startDate: moment(startDate).format('dddd D [de] MMMM [de] YYYY'),
      endDate: moment(endDate).format('dddd D [de] MMMM [de] YYYY'),
      accomodation: findAccomodationById.name,
    });

    setError('Dias bloqueados con exito');
  };

  return (
    <div className='flex justify-center items-center mt-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-1 md:grid-cols-2 mt-4 bg-gray300/75 rounded-xl p-12 lg:p-10 lg:gap-10'
      >
        <div className='mb-8 text-center lg:text-start lg:mb-4'>
          <label
            className='text-gray-700 font-semibold block mb-2'
            htmlFor='name'
          >
            Fecha incio de bloqueo
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-lg text-center lg:text-start'
            type='date'
            {...register('startDate')}
          />
        </div>

        <div className='mb-8 text-center lg:text-start lg:mb-4'>
          <label
            className='text-gray-700 font-semibold block mb-2'
            htmlFor='name'
          >
            Fecha fin de bloqueo
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-lg text-center lg:text-start'
            type='date'
            {...register('endDate')}
          />
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
