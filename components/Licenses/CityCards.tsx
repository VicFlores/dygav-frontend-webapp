import React, { FC, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

export const CityCards: FC<{ community: string }> = ({ community }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 300;
    }
  };

  const generalImages: ImageProps[] = [
    {
      slug: 'torrevieja',
      cityName: 'Torrevieja',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/2_jvslgl.WebP',
    },
    {
      slug: 'alicante',
      cityName: 'Alicante',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.WebP',
    },
    {
      slug: 'benidorm',
      cityName: 'Benidorm',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1699567156/Dygav/Benidorm/Copia_de_2_doz1la.WebP',
    },
    {
      slug: 'orihuela',
      cityName: 'Orihuela',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1699646545/Dygav/Orihuela/Copia_de_7_xhahz0.WebP',
    },
    {
      slug: 'orihuela-costa',
      cityName: 'Orihuela Costa',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1699647185/Dygav/Orihuela/Copia_de_8_fuequq.WebP',
    },
    {
      slug: 'guardamar-del-segura',
      cityName: 'Guardamar del Segura',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1700774784/Dygav/GuardamarDelSegura/4_fnp2ex.WebP',
    },
    {
      slug: 'santa-pola',
      cityName: 'Santa Pola',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1700839593/Dygav/Santa%20Pola/Copia_de_Puerto_de_Santa_Pola_znyokx.WebP',
    },
    {
      slug: 'villajoyosa',
      cityName: 'Villajoyosa',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701107278/Dygav/Villajoyosa/11_nqftjd.WebP',
    },
    {
      slug: 'finestrat',
      cityName: 'Finestrat',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701186487/Dygav/Finestrart/Copia_de_16_buyb8u.WebP',
    },
    {
      slug: 'el-campello',
      cityName: 'El Campello',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701207161/Dygav/El%20Campello/4_iahcly.WebP',
    },
    {
      slug: 'calpe',
      cityName: 'Calpe',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701292652/Dygav/Calpe/27_tfsmto.WebP',
    },
    {
      slug: 'pilar-de-la-horadada',
      cityName: 'Pilar de la Horadada',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701293984/Dygav/Pilar%20de%20la%20Horadada/21_lwqjnu.WebP',
    },
    {
      slug: 'altea',
      cityName: 'Altea',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1701357907/Dygav/Altea/10_zdkkww.WebP',
    },
  ];

  const pirineosAragonImages: ImageProps[] = [
    {
      slug: 'formigal',
      cityName: 'Formigal',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1704930339/Dygav/Formigal/C_4_wgr9pn.WebP',
    },
    {
      slug: 'sallent-de-gallego',
      cityName: 'Sallent de Gállego',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1704984230/Dygav/Sallent%20%20De%20G%C3%A1llego/C_11_q649hd.WebP',
    },
    {
      slug: 'lanuza',
      cityName: 'Lanuza',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1705082409/Dygav/Lanuza/C_5_d21fvn.WebP',
    },
    {
      slug: 'tramacastilla-de-tena',
      cityName: 'Tramacastilla de Tena',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1705334905/Dygav/Tramacastilla%20de%20Tena/C_17_j3oxnn.WebP',
    },
    {
      slug: 'panticosa',
      cityName: 'Panticosa',
      bgCity:
        'https://res.cloudinary.com/vicflores11/image/upload/v1705360813/Dygav/Panticosa/C_24_kywydr.WebP',
    },
  ];

  return (
    <div className='flex items-center  overflow-x-auto overscroll-x-contain lg:col-start-2 lg:col-end-4'>
      <button
        onClick={scrollLeft}
        className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
      >
        <AiOutlineArrowLeft />
      </button>

      <div
        ref={scrollContainer}
        className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar'
      >
        {community === 'valenciana'
          ? generalImages.map((image, index) => (
              <Link href={`/licencias-turisticas/${image.slug}`} key={index}>
                <div className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${image.bgCity})`,
                      width: '100%',
                      height: '100%',
                    }}
                    className='bg-cover bg-center flex items-end'
                  >
                    <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                      Licencia turística en <br /> {image.cityName}
                    </h4>
                  </div>
                </div>
              </Link>
            ))
          : pirineosAragonImages.map((image, index) => (
              <Link href={`/licencias-turisticas/${image.slug}`} key={index}>
                <div className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
                  <div
                    style={{
                      backgroundImage: `url(${image.bgCity})`,
                      width: '100%',
                      height: '100%',
                    }}
                    className='bg-cover bg-center flex items-end'
                  >
                    <h4 className='text-white pl-4 pb-4 text-sm md:text-lg'>
                      Licencia turística en <br /> {image.cityName}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      <button
        onClick={scrollRight}
        className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
