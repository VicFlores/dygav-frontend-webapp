import { informationCard } from '@/utils';
import Image from 'next/legacy/image';
import React, { FC } from 'react';
import { OwnersIcons } from './OwnersIcons';

export const VacationRentalHome: FC<{ typeOfPage?: string }> = ({
  typeOfPage,
}) => {
  return (
    <>
      <div className=' py-5 space-y-20 md:text-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4'>
          {informationCard.map((item, index) => (
            <div
              key={index}
              className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'
            >
              <Image
                src={item.src as string}
                alt={item.alt}
                width={267}
                height={176}
              />

              <div className='space-y-4 px-4 mt-4'>
                <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                  {item.title}
                </p>
                <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-24 pb-2 font-semibold'>
        Nuestras Tarifas de Gestión Integral de Viviendas Vacacionales
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p>
          Con nuestra tarifa de gestión integral de casas de alquiler vacacional
          altamente competitiva, obtendrás{' '}
          <strong>
            todos los beneficios de nuestros servicios de gestión profesional
            para aumentar al máximo la rentabilidad de tu vivienda turística
            durante todo el año
          </strong>
          .
        </p>

        <p>
          <strong>Tù ganas, nosotros ganamos.</strong>
        </p>

        <p>
          Al contrario que otras empresas que ocultan sus tarifas y esconden sus
          comisiones en <strong className='text-p600'>DYGAV</strong>, mantenemos
          una política de <strong>transparencia total</strong> en nuestras
          tarifas porque creemos en una relación donde{' '}
          <strong>
            nuestros ingresos están directamente vinculados al éxito de nuestros
            clientes
          </strong>
          .
        </p>

        <p>
          Por eso solo cobramos una comisión del{' '}
          <strong>15%+IVA sobre la facturación</strong> de las casas que
          gestionamos, que{' '}
          <strong>
            incluye todos nuestros servicios profesionales de gestión
          </strong>
          .
        </p>
      </div>

      <div className='flex justify-center items-center my-8'>
        <figure className='relative w-32 h-40 md:w-52 lg:w-60 md:h-72 lg:h-80'>
          <Image
            src='https://res.cloudinary.com/vicflores11/image/upload/v1696266405/Dygav/Blue_Modern_Bold_Minimalist_Mineral_Water_Logo_awcm4u.svg'
            alt='15% comission image'
            layout='fill'
            objectFit='contain'
          />
        </figure>
      </div>

      <p className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'>
        Es importante destacar que{' '}
        <strong>no hay costes adicionales ocultos</strong>. Además, los gastos
        de limpieza son asumidos directamente por los huéspedes, lo que
        significa{' '}
        <strong>
          que no tendrás que preocuparte por ningún otro cargo adicional
        </strong>
        .
      </p>

      <p className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'>
        Nos esforzamos por brindarte una gestión clara y sin sorpresas,
        permitiéndote maximizar tus ingresos de tu vivienda de alquiler
        vacacional y disfrutar de{' '}
        <strong>una experiencia libre de preocupaciones</strong>.
      </p>

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-24 pb-2 font-semibold'>
        Todo el control de tu vivienda turística desde tu Smartphone
      </h2>

      <p className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'>
        En <strong className='text-p600'>DYGAV</strong>, entendemos la
        importancia de tener el control total sobre tu propiedad vacacional,
        incluso cuando estás en movimiento.. Te ofrecemos la libertad y la
        flexibilidad de{' '}
        <strong>
          gestionar todos los aspectos de tu vivienda turística directamente
          desde tu smartphone
        </strong>
        .
      </p>

      <figure className='relative w-52 h-52 md:w-80 md:h-80 self-center mt-10'>
        <Image
          src={
            'https://res.cloudinary.com/vicflores11/image/upload/v1701529753/Dygav/undraw_home_settings_re_pkya_bvz343.svg'
          }
          alt=''
          layout='fill'
        />
      </figure>

      <p className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'>
        Visualiza y gestiona las <strong>reservas en tiempo real</strong>,
        accede al <strong>calendario de disponibilidad</strong> para ajustarlo
        según tus necesidades, y{' '}
        <strong>controla las fechas importantes</strong> con solo unos toques.
        Además, mantente al día con las <strong>liquidaciones mensuales</strong>{' '}
        y el historial financiero de tu propiedad. Todo esto, y mucho más,
        disponible en la palma de tu mano. Con DYGAV, lleva la gestión de tu
        alquiler vacacional al siguiente nivel:{' '}
        <strong>eficiente, transparente y accesible</strong>.
      </p>

      <OwnersIcons image='https://res.cloudinary.com/vicflores11/image/upload/v1706804885/Dygav/undraw_smart_home_re_orvn_rd13cl.svg' />
    </>
  );
};
