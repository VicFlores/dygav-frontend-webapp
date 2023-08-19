import { TImageProps } from '@/types';
import Image from 'next/legacy/image';

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
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367752/Dygav/11_uhpghg.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/5_mhpa2f.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367752/Dygav/11_uhpghg.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/5_mhpa2f.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367752/Dygav/11_uhpghg.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.png',
    alt: 'Search Image Card',
    width: 347,
    height: 227,
    imgSubtitle: 'Torrevieja-100€  noche',
    title: 'Piso céntrico en Torrevieja: Ubicación ideal para tu escapada',
    subtitle:
      'Disfruta de una estancia cómoda en nuestro acogedor piso en el centro de Torrevieja. Habitación elegante y comodidades modernas. ¡Reserva ahora y descubre la encantadora ciudad costera!',
    bedroom: 1,
    bathroom: 1,
    size: '90m²',
  },
];

export const SearcherCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-32 mb-56 gap-y-20'>
      {searcherCard.map((item, index) => (
        <div
          id='CardContainer'
          key={index}
          className='md:w-[320px] lg:w-[347px] h-auto self-center justify-self-center'
        >
          <div id='CardHeader' className='space-y-4 '>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
            <p className='text-center text-black900 md:text-sm lg:text-base'>
              {item.imgSubtitle}
            </p>
          </div>

          <div id='CardBody' className='space-y-4 mt-6 mb-6'>
            <p className='md:text-[20px] lg:text-[25px]'>{item.title}</p>
            <p className='md:text-[14px] lg:text-base'>{item.subtitle}</p>
          </div>

          <div id='CardFooter' className='flex h-[48px] space-x-1 text-white'>
            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center'>
              <p className='font-semibold md:text-[14px] lg:text-[16px]'>
                {item.bedroom}
              </p>
              <p className='md:text-[10px] lg:text-[12px]'>Dormitorios</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold md:text-[14px] lg:text-[16px]'>
                {item.bathroom}
              </p>
              <p className='md:text-[10px] lg:text-[12px]'>Baños</p>
            </div>

            <div className='bg-p600 pt-1 pb-1 w-[119px] h-full text-center '>
              <p className='font-semibold md:text-[14px] lg:text-[16px]'>
                {item.size}
              </p>
              <p className='md:text-[10px] lg:text-[12px]'>Tamaño</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
