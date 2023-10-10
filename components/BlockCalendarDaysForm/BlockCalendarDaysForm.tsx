import axios from 'axios';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  startDate: string;
  endDate: string;
};

type Props = {
  setlistenBlockDate: React.Dispatch<React.SetStateAction<null>>;
};

const BlockCalendarDaysForm: FC<Props> = ({ setlistenBlockDate }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({
    startDate,
    endDate,
  }) => {
    const res = await axios.post(
      'https://api.avaibook.biz/api/owner/accommodations/130273/calendar/',
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
  };

  return (
    <div className='flex justify-center items-center mt-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid md:grid-cols-2 mt-4 bg-gray300/75 rounded-xl p-10 gap-10'
      >
        <div className='mb-4'>
          <label
            className='text-gray-700 font-semibold block mb-2'
            htmlFor='name'
          >
            Fecha incio de bloqueo
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-lg'
            type='date'
            {...register('startDate')}
          />
        </div>

        <div className='mb-4'>
          <label
            className='text-gray-700 font-semibold block mb-2'
            htmlFor='name'
          >
            Fecha fin de bloqueo
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-lg'
            type='date'
            {...register('endDate')}
          />
        </div>

        <button
          className='bg-blue-500 bg-p600 self-center justify-self-center text-white py-2 px-10 rounded-lg hover:bg-blue-600 col-start-1 col-end-3'
          type='submit'
        >
          Bloquear Fechas
        </button>
      </form>
    </div>
  );
};

export default BlockCalendarDaysForm;
