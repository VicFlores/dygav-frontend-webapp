import Image from 'next/legacy/image';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const OwnerDashboard = () => {
  const reservation = [
    {
      id: 1,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1691367754/Dygav/20_zc0zeu.png',
      title: 'Card title',
      information:
        'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit ac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    },
    {
      id: 2,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1691367754/Dygav/20_zc0zeu.png',
      title: 'Card title',
      information:
        'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit ac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    },
    {
      id: 3,
      imgUrl:
        'https://res.cloudinary.com/vicflores11/image/upload/v1691367754/Dygav/20_zc0zeu.png',
      title: 'Card title',
      information:
        'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sit ac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    },
  ];

  return (
    <div className='px-8 space-y-12 mb-24'>
      <p className=' text-black900/[.7] border-b-[1px] mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
        Mis Alojamientos
      </p>

      {reservation.length > 0 ? (
        <div className='grid gap-y-10 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3 '>
          {reservation.map((item) => (
            <div
              className='rounded-xl space-y-4 justify-self-center border-[1px] border-p600 px-5 py-5 bg-gray300/[.14] w-[300px] md:w-[310px]'
              key={item.id}
            >
              <figure className='text-center'>
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  height={176}
                  width={267}
                  priority
                  className='rounded-[20px]'
                />
              </figure>

              <div className='space-y-2'>
                <p className='text-lg md:text-xl'>{item.title}</p>
                <p className='text-xs md:text-sm'>{item.information}</p>
              </div>

              <div className='flex justify-center items-center relative'>
                <AiOutlineCheckCircle className='w-5 md:h-5 text-p600 absolute top-1/2 -translate-y-1/2 right-5 md:right-12 lg:right-10' />
                <Link
                  href='/private/reservation'
                  passHref
                  className='text-center text-p600 hover:bg-gray300 border-[1px] border-p600 rounded-md text-[13px] md:text-sm lg:text-base py-2 px-4 w-full'
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
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
        </div>
      )}
    </div>
  );
};
