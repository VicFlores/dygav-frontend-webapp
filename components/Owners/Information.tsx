import Image from 'next/legacy/image';
import { informationCard } from '@/utils';
import { BiPhoneCall } from 'react-icons/bi';
import { Llamanos } from '..';

export const Information = () => {
  return (
    <section className='px-8 md:px-28 gap-y-4 mb-20'>
      <p className='text-center px-4 md:px-0 text-2xl md:text-3xl text-black700 pb-4 font-semibold'>
        ¿Qué es lo que Haríamos por ti?
      </p>

      <div
        id='Container'
        className=' py-5 space-y-20 md:text-sm border-t-4 border-t-p600'
      >
        <div
          id='ParagraphPlayGround'
          className='px-4 md:px-6 space-y-12 w-auto text-sm lg:text-lg'
        >
          <p className='text-sm md:text-lg whitespace-pre-line'>
            {`Nos encargamos de todos los aspectos necesarios para maximizar tus ingresos y garantizar una experiencia inigualable tanto para los propietarios como para los huéspedes.
              
              Nuestro equipo altamente capacitado se encargará de la gestión integral de tus apartamentos, desde la promoción y comercialización en todas las plataformas líderes de gestión de reservas para apartamentos vacacionales (Airbnb,  Booking, Rentalia, Vrbo, Google, Expedia, etc...), Checki-In & Check-Out además de la limpieza y el mantenimiento de las propiedades.
              
              Nos aseguraremos de que tus apartamentos estén siempre  listos, así, tus huéspedes podrán disfrutar de una estancia sin contratiempos y tú podrás obtener las mejores calificaciones y comentarios positivos.
              
              ¡Descubre una forma más efectiva de gestionar tus apartamentos vacacionales con nosotros!`}
          </p>
        </div>

        <p className='text-center px-4 md:px-0 text-2xl md:text-3xl text-black700 pb-4 font-semibold border-b-4 border-b-p600'>
          Conviértete en un propietario DYGAV
        </p>

        <Llamanos />

        <div>
          <p className='text-center px-4 md:px-0 text-2xl md:text-3xl text-black700 pb-4 font-semibold border-b-4 border-b-p600'>
            ¡Nos encargamos nosotros!
          </p>

          <p className='mt-6 text-lg md:text-xl lg:text-2xl px-2 md:px-0 text-center'>
            Todos nuestros servicios de Gestion integral para alquiler
            vacacional
          </p>
        </div>

        <div
          id='CardPlayGround'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4'
        >
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
                <p className='text-black900 text-xs md:text-sm lg:text-lg text-left'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-12 pb-2 font-semibold'>
          Nuestras Tarifas
        </h1>

        <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
          Con nuestra tarifa altamente competitiva, obtendrás todos los
          beneficios de nuestros servicios de gestión integral.
        </p>

        <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
          Al contrario que otras empresas que ocultan sus tarifas escondiendo
          sus comisiones en <strong className='text-p800'>DYGAV</strong>,
          mantenemos una política de <strong>transparencia total</strong> en
          nuestras tarifas porque creemos en una relación donde{' '}
          <strong>
            nuestros ingresos estén directamente vinculados al éxito de nuestros
            clientes
          </strong>{' '}
          y por eso cobramos una comisión del{' '}
          <strong>15%+IVA sobre la facturación</strong> de las casas que
          gestionamos, lo cual{' '}
          <strong>
            incluye todos nuestros servicios profesionales de gestión.
          </strong>
        </p>

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

        <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
          Es importante destacar que{' '}
          <strong>no hay costes adicionales ocultos</strong>. Además, los gastos
          de limpieza son asumidos directamente por los huéspedes, lo que
          significa que{' '}
          <strong>
            no tendrás que preocuparte por ningún otro cargo adicional
          </strong>
          . Nos esforzamos por brindarte una gestión clara y sin sorpresas,
          permitiéndote maximizar tus ingresos y disfrutar de{' '}
          <strong>una experiencia libre de preocupaciones</strong>.
        </p>
      </div>
    </section>
  );
};
