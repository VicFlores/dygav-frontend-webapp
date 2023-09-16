import { ChangeEvent, useState } from 'react';
import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const NewAccomodationForm = () => {
  const [infoState, setInfoState] = useState({
    name: '',
    image: '',
    environment: '',
    rentalType: '',
    entryTime: '',
    departureTime: '',
    accommodationType: 'default',
    address: '',
    zipCode: '',
    city: '',
    region: '',
    country: '',
    area: '',
    bookingConditions: '',
    description: '',
    introduction: '',
    capacity: '',
    additionalCapacity: '',
    extraCapacity: '',
    minimumStay: '',
    weekPrice: '',
    weekendPrice: '',
    additionalPricePerPerson: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();
  const { data: session } = useSession();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const values = e.target.value;

    setInfoState({
      ...infoState,
      [e.target.name]: values,
    });
  };

  const handleCreateAccomodation = async () => {
    const infoAccomodation = {
      userId: session?.user?._id,
      name: infoState.name,
      image: infoState.image,
      environment: infoState.environment,
      rentalType: infoState.rentalType,
      entryTime: infoState.entryTime,
      departureTime: infoState.departureTime,
      accommodationType: infoState.accommodationType,
      location: {
        address: infoState.address,
        zipCode: infoState.zipCode,
        city: infoState.city,
        region: infoState.region,
        country: infoState.country,
        area: infoState.area,
      },
      bookingConditions: { es: infoState.bookingConditions },
      description: { es: infoState.description },
      introduction: { es: infoState.introduction },
      units: [
        {
          name: { es: infoState.name },
          description: { es: infoState.description },
          capacity: Number(infoState.capacity),
          additionalCapacity: Number(infoState.additionalCapacity),
          extraCapacity: Number(infoState.extraCapacity),
          minimumStay: Number(infoState.minimumStay),
          weekPrice: Number(infoState.weekPrice),
          weekendPrice: Number(infoState.weekendPrice),
          additionalPricePerPerson: Number(infoState.additionalPricePerPerson),
        },
      ],
    };

    try {
      const res = await axios.post(
        '/api/accomodations/route',
        infoAccomodation
      );

      return router.push('/private/owner/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <form className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 md:px-12'>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='name'
            value={infoState.name}
            onChange={handleChange}
            placeholder='Titulo de alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='environment'
            value={infoState.environment}
            onChange={handleChange}
            placeholder='Entorno del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='rentalType'
            value={infoState.rentalType}
            onChange={handleChange}
            placeholder='Tipo de renta'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='entryTime'
            value={infoState.entryTime}
            onChange={handleChange}
            placeholder='Hora de entrada'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='departureTime'
            value={infoState.departureTime}
            onChange={handleChange}
            placeholder='Hora de salida'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <select
            name='accommodationType'
            value={infoState.accommodationType}
            onChange={handleSelectChange}
            className='text-black900/[.7] py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900  w-full leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value='default' disabled>
              Selecciona tu tipo de alojamiento
            </option>
            <option className='text-black900' value='house'>
              Casa
            </option>
            <option className='text-black900' value='apartament'>
              Apartamento
            </option>
          </select>
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='address'
            value={infoState.address}
            onChange={handleChange}
            placeholder='Direccion del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='zipCode'
            value={infoState.zipCode}
            onChange={handleChange}
            placeholder='Codigo postal del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='city'
            value={infoState.city}
            onChange={handleChange}
            placeholder='Ciudad del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='region'
            value={infoState.region}
            onChange={handleChange}
            placeholder='Region del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='country'
            value={infoState.country}
            onChange={handleChange}
            placeholder='Pais del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='area'
            value={infoState.area}
            onChange={handleChange}
            placeholder='Area del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
      </form>

      <form className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 md:px-12'>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='image'
            value={infoState.image}
            onChange={handleChange}
            placeholder='URL de imagen del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='bookingConditions'
            value={infoState.bookingConditions}
            onChange={handleChange}
            placeholder='Condiciones de reservacion'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='introduction'
            value={infoState.introduction}
            onChange={handleChange}
            placeholder='Introduccion del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative lg:col-start-1 lg:col-end-3'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='text'
            name='description'
            value={infoState.description}
            onChange={handleChange}
            placeholder='Descripcion del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='capacity'
            value={infoState.capacity}
            onChange={handleChange}
            placeholder='Capacidad del alojamiento'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='additionalCapacity'
            value={infoState.additionalCapacity}
            onChange={handleChange}
            placeholder='Capacidad adicional'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='extraCapacity'
            value={infoState.extraCapacity}
            onChange={handleChange}
            placeholder='Capacidad extra'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='minimumStay'
            value={infoState.minimumStay}
            onChange={handleChange}
            placeholder='Capacidad minima'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='weekPrice'
            value={infoState.weekPrice}
            onChange={handleChange}
            placeholder='Precio de semana'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>

        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='weekendPrice'
            value={infoState.weekendPrice}
            onChange={handleChange}
            placeholder='Precio de fin de semana'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </label>
        <label className='relative'>
          <BiExtension className='w-4 h-4 md:w-5 md:h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900/[.8]' />
          <input
            type='number'
            name='additionalPricePerPerson'
            value={infoState.additionalPricePerPerson}
            onChange={handleChange}
            placeholder='Precio adicional por persona'
            className='py-3 pl-10 pr-4 text-xs md:text-sm lg:text-base bg-transparent shadow appearance-none border-r-[1px] border-r-black900 placeholder:text-black900/[.7] w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
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
            Crear nuevo alojamiento
          </button>
        </div>
      </div>
    </>
  );
};

export default NewAccomodationForm;
