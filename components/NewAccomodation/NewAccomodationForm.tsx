import { ChangeEvent, useEffect, useState } from 'react';
import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios, { AxiosError } from 'axios';
import { axiosConfig } from '@/utils';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';

const NewAccomodationForm = () => {
  const [user, setUser] = useState([
    {
      _id: '',
      email: '',
    },
  ]);
  const [infoState, setInfoState] = useState({
    userId: 'default',
    accomodationId: 'default',
  });
  const [avaibookAccomodations, setAvaibookAccomodations] = useState([]);

  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userByRole = async () => {
      const { data } = await axiosConfig.get('/api/users/findUserRole');

      setUser(data);
    };

    const getAvaibookAccomodations = async () => {
      const { data } = await axios.get(
        'https://api.avaibook.com/api/owner/accommodations/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      setAvaibookAccomodations(data);
    };

    userByRole();
    getAvaibookAccomodations();
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleCreateAccomodation = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const infoAccomodation = {
      userId: infoState.userId,
      accomodationId: infoState.accomodationId,
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
    <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='bg-gray300/50 rounded-t-xl lg:rounded-l-xl pl-10'>
        <figure className='relative w-[322px] h-[322px] lg:w-96 lg:h-96 '>
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/add_accomodations_pcp0ra.svg'
            }
            layout='fill'
            alt='Asignar alojamiento'
          />
        </figure>
      </div>

      <form className='flex flex-col w-full lg:w-auto justify-center items-center md:px-12 space-y-14 bg-gray300/50 py-8 rounded-b-xl lg:rounded-r-xl'>
        <div className='text-center'>
          <p className='mb-3'>Escoge tu alojamiento</p>

          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
            <select
              name='accomodationId'
              value={infoState.accomodationId}
              onChange={handleSelectChange}
              className='text-black900/[.7] py-3 bg-white pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 w-[20rem] lg:w-[29rem] leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value='default' disabled>
                Alojamiento para asignar
              </option>
              {avaibookAccomodations.map((item: any) => (
                <option key={item.id} className='text-black900' value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className='text-center'>
          <p className='mb-3'>Escoge tu usuario</p>

          <label className='relative'>
            <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
            <select
              name='userId'
              value={infoState.userId}
              onChange={handleSelectChange}
              className='text-black900/[.7] py-3 bg-white pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900  w-full leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value='default' disabled>
                Usuario para asignar alojamiento
              </option>
              {user.map((item) => (
                <option
                  key={item._id}
                  className='text-black900'
                  value={item._id}
                >
                  {item.email}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className='flex flex-col justify-center items-center'>
          {error && (
            <div className='text-center'>
              <p>{error}</p>
            </div>
          )}

          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-5 md:right-5 lg:right-4' />
            <button
              className='bg-p600 hover:bg-p800 text-center text-[13px] md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[250px] text-white justify-self-center self-center'
              onClick={(event) => handleCreateAccomodation(event)}
            >
              Asignar alojamiento
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewAccomodationForm;
