import Image from 'next/legacy/image';
import { LicenseTouristCardInfo } from '@/utils';
import { HelpYouForm } from '..';

export const LicenseTourist = () => {
  return (
    <section className='mt-16 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-16'>
        ¿Qué es lo que Haríamos por ti?
      </h2>

      <div className='w-auto pt-5 space-y-4 text-black900 px-3 text-justify lg:text-start text-sm md:text-lg'>
        <p>
          En <strong className='text-p600'>DYGAV</strong>, comprendemos la
          importancia de obtener la licencia turística de manera rápida y
          eficiente y nos comprometemos a brindarte el{' '}
          <strong>apoyo necesario en cada etapa del proceso</strong>.
        </p>

        <p>
          Nuestro equipo de expertos en licencias turísticas se mantiene
          <strong>
            actualizado con las regulaciones y requisitos específicos de tu área
          </strong>
          , garantizando que tu solicitud cumpla con todos los estándares
          legales y normativas vigentes. Ya sea por teléfono, correo
          electrónico, WhatsApp o a través del formulario de contacto nuestro
          equipo estará encantado de atenderte y responder a todas tus
          consultas.
        </p>

        <p>
          Nuestro <strong>equipo especializado en licencias turísticas</strong>{' '}
          está altamente familiarizado con las normativas vigentes en cada
          comunidad autónoma. Nos encargamos de{' '}
          <strong>proporcionarte una orientación precisa y completa</strong> en
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
            className='bg-gray300/20 border-[1px] rounded-xl  border-p600 text-center py-6 '
          >
            <Image
              src={item.src as string}
              alt={item.alt}
              width={267}
              height={176}
              className='mt-4'
            />

            <div className='space-y-5 mt-4 px-4'>
              <p className='text-sm md:text-lg lg:text-xl font-semibold text-p600'>
                {item.title}
              </p>
              <p className='text-justify lg:text-start text-sm md:text-lg text-black900'>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-24'>
        Prepárate para el Éxito
      </h2>

      <div className='pt-8 px-4 md:px-8 space-y-4 text-justify lg:text-start text-sm md:text-lg text-black900'>
        <p>
          En <strong className='text-p600'>DYGAV</strong> trabajamos para que
          que tu propiedad cumpla con los criterios de habitabilidad, seguridad
          y servicios exigidos.
        </p>
        <p>
          Enfocados en tu éxito, nos encargamos de que{' '}
          <strong>
            cada paso del proceso sea realizado con precisión y meticulosidad
          </strong>
          .
        </p>
        <p>
          Estaremos contigo durante todo el camino, brindándote el apoyo
          necesario para que puedas dar el paso hacia el{' '}
          <strong>éxito en el mercado de alquileres vacacionales</strong>.
        </p>
      </div>

      <HelpYouForm />
    </section>
  );
};
