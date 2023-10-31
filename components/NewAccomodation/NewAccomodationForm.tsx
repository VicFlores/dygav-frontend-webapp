import { ChangeEvent, useEffect, useState } from 'react';
import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios, { AxiosError } from 'axios';
import { axiosConfig } from '@/utils';
import { useRouter } from 'next/router';

const NewAccomodationForm = () => {
  const [user, setUser] = useState([
    {
      _id: '',
      email: '',
    },
  ]);

  const [infoState, setInfoState] = useState({
    userId: 'default',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userByRole = async () => {
      const { data } = await axiosConfig.get('/api/users/findUserRole');

      setUser(data);
    };

    userByRole();
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleCreateAccomodation = async () => {
    const infoAccomodation = {
      userId: infoState.userId,
      accomodationId: router.query.id,
    };

    try {
      await axios.post('/api/accomodations/route', infoAccomodation);

      return router.push('/private/admin/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data);
      }
    }
  };

  return (
    <>
      <form className='flex flex-col justify-center items-center mt-8 md:px-12 space-y-10'>
        <h1 className='lg:text-lg'>
          Selecciona el usuario al cual deseas asignarle un nuevo alojamiento
        </h1>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <select
            name='userId'
            value={infoState.userId}
            onChange={handleSelectChange}
            className='text-black900/[.7] py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900  w-full leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value='default' disabled>
              Usuario para asignar alojamiento
            </option>
            {user.map((item) => (
              <option key={item._id} className='text-black900' value={item._id}>
                {item.email}
              </option>
            ))}
          </select>
        </label>
      </form>

      <div className='flex flex-col justify-center items-center'>
        {error && (
          <div className='text-center'>
            <p>{error}</p>
          </div>
        )}

        <div className='relative'>
          <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-8' />
          <button
            className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[280px] lg:w-[330px] text-white justify-self-center self-center'
            onClick={handleCreateAccomodation}
          >
            Asignar alojamiento
          </button>
        </div>
      </div>
    </>
  );
};

export default NewAccomodationForm;
