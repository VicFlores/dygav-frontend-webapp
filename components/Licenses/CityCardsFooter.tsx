import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';

interface ImageProps {
  cityName: string;
  bgCity: string;
  slug: string;
}

export const CityCardsFooter = () => {
  const router = useRouter();

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

  let images: ImageProps[] = [
    {
      slug: 'torrevieja',
      cityName: 'Torrevieja',
      bgCity: 'bg-torrevieja',
    },
    {
      slug: 'alicante',
      cityName: 'Alicante',
      bgCity: 'bg-alicante',
    },
    {
      slug: 'benidorm',
      cityName: 'Benidorm',
      bgCity: 'bg-benidorm',
    },
    {
      slug: 'orihuela',
      cityName: 'Orihuela',
      bgCity: 'bg-orihuelaCosta',
    },
    {
      slug: 'orihuela-costa',
      cityName: 'Orihuela Costa',
      bgCity: 'bg-orihuela',
    },
    {
      slug: 'guardamar-del-segura',
      cityName: 'Guardamar del Segura',
      bgCity: 'bg-guardamarSegura',
    },
    {
      slug: 'santa-pola',
      cityName: 'Santa Pola',
      bgCity: 'bg-santaPola',
    },
    {
      slug: 'villajoyosa',
      cityName: 'Villajoyosa',
      bgCity: 'bg-villajoyosa',
    },
    {
      slug: 'finestrat',
      cityName: 'Finestrat',
      bgCity: 'bg-finestrat',
    },
    {
      slug: 'el-campello',
      cityName: 'El Campello',
      bgCity: 'bg-elCampello',
    },
    {
      slug: 'calpe',
      cityName: 'Calpe',
      bgCity: 'bg-calpe',
    },
    {
      slug: 'pilar-de-la-horadada',
      cityName: 'Pilar de la Horadada',
      bgCity: 'bg-pilarHoradada',
    },
    {
      slug: 'altea',
      cityName: 'Altea',
      bgCity: 'bg-altea',
    },
    {
      slug: 'formigal',
      cityName: 'Formigal',
      bgCity: 'bg-formigal',
    },
    {
      slug: 'sallent-de-gallego',
      cityName: 'Sallent de Gállego',
      bgCity: 'bg-sallentDeGallego',
    },
  ];

  images = images.filter((image) => image.slug !== router.query.cities);

  return (
    <section className='mb-16 md:pb-24 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='px-6 text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
        Licencias Turísticas en otros municipios
      </h2>

      <div className='grid lg:grid-cols-12'>
        <button
          onClick={scrollLeft}
          className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36 justify-self-center self-center'
        >
          <AiOutlineArrowLeft />
        </button>

        <div
          ref={scrollContainer}
          className='w-auto h-auto items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar lg:col-start-2 lg:col-end-12'
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='w-60 h-80 md:w-70 md:h-80 shadow-md rounded-lg overflow-hidden flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'
            >
              <div
                className={`w-full h-full bg-cover bg-center flex items-end ${image.bgCity}`}
              >
                <Link
                  href={`/licencias-turisticas/${image.slug}`}
                  className='text-white pl-4 pb-4 text-sm md:text-lg underline'
                >
                  Licencia turística en <br /> {image.cityName}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36 justify-self-center self-center'
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};
