import Image from 'next/legacy/image';
import { TImageProps } from '@/types';

type TSearcherCard = TImageProps & {
  imgSubtitle: string;
  title: string;
  subtitle: string;
  bedroom: number;
  bathroom: number;
  size: string;
};

const searcherCard: TSearcherCard[] = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/5_mhpa2f.png',
    alt: 'Search Image Card',
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
];

export const Reservation = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 space-y-12 mb-28'>
      <p className='md:text-xl lg:text-2xl text-black900/[.7] text-center md:px-20 lg:px-40'>
        Tu estadía es esta habilitada desde el 15 de Septiembre hasta el 25 de
        Septiembre
      </p>

      {searcherCard.map((item, index) => (
        <div
          id='CardContainer'
          key={index}
          className='w-[300px] md:w-[320px] lg:w-[340px] h-auto self-center justify-self-center'
        >
          <div id='CardHeader' className='space-y-4 w-full h-[210px] relative'>
            <Image src={item.src} alt={item.alt} layout='fill' priority />
          </div>

          <div id='CardBody' className='space-y-4 mt-6 mb-6 px-4'>
            <p className='text-center text-black900 text-xs md:text-sm lg:text-base'>
              {item.imgSubtitle}
            </p>
            <p className='text-[18px] md:text-lg lg:text-xl text-center'>
              {item.title}
            </p>
            <p className='text-black900 text-[13px] md:text-xs lg:text-sm'>
              {item.subtitle}
            </p>
          </div>

          <div
            id='CardFooter'
            className='flex h-[40px] space-x-[2px] text-white'
          >
            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center'>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-xs'>
                {item.bedroom}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Dormitorios</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-xs'>
                {item.bathroom}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Baños</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold text-[13px] md:text-[14px] lg:text-xs'>
                {item.size}
              </p>
              <p className='text-[10px] lg:text-[12px]'>Tamaño</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
