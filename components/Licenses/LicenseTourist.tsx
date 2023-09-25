import Image from 'next/legacy/image';
import { LicenseTouristCardInfo } from '@/utils';

export const LicenseTourist = () => {
  return (
    <section className='mt-24 mb-16 px-10 md:px-12 lg:px-32'>
      <p className='text-center text-2xl px-14 md:text-3xl  text-black700'>
        ¿Qué es lo que Haríamos por ti?
      </p>

      <div className='w-auto border-t-4 border-t-p600 pt-5 space-y-4 text-black900 px-3 text-xs md:text-sm lg:text-lg'>
        <p>
          Si ya has llegado hasta aquí y todavía quieres saber más sobre
          nuestros servicios para la obtención de licencias turísticas… ¡sigue
          leyendo y te contamos!
        </p>

        <p>
          Si lo que quieres es sacar una Licencia Vacacional en Torrevieja, haz
          click aquí y te contamos al detalle todo lo que necesitas saber.
        </p>

        <p>
          Nuestro equipo especializado en licencias turísticas está altamente
          familiarizado con las normativas vigentes en cada comunidad autónoma.
          Nos encargamos de proporcionarte una orientación precisa y completa en
          los siguientes aspectos clave:
        </p>
      </div>

      <div
        id='CardContainer'
        className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-4 mt-10'
      >
        {LicenseTouristCardInfo.map((item, index) => (
          <div
            id='Card'
            key={index}
            className='bg-gray300/20 border-[1px] border-p600 text-center py-6 '
          >
            <Image
              src={item.src as string}
              alt={item.alt}
              width={267}
              height={176}
              className='mt-4'
            />

            <div className='space-y-5 mt-4 px-4'>
              <p className='text-sm md:text-lg lg:text-xl'>{item.title}</p>
              <p className='text-left text-xs md:text-sm lg:text-lg text-black900'>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
