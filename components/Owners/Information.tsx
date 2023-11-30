import Image from 'next/legacy/image';
import { informationCard } from '@/utils';
import { BiPhoneCall } from 'react-icons/bi';
import { HelpYouForm, Llamanos } from '..';
import Link from 'next/link';

export const Information = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col'>
      <h2 className='text-center px-4 md:px-0 text-2xl md:text-3xl text-black700 pb-4 font-semibold'>
        Descubre una forma más efectiva de gestionar tu vivienda turística
      </h2>

      <p className='text-xs md:text-sm lg:text-lg border-t-4 border-t-p600 pt-5 space-y-4 text-black900'>
        En <strong className='text-p600'>DYGAV</strong> somos especialistas en
        la gestión de viviendas vacacionales, nos encargamos de controlar todos
        los aspectos necesarios para{' '}
        <strong>
          maximizar tus ingresos y garantizar una experiencia inigualable
        </strong>{' '}
        tanto para los <strong>propietarios</strong> como para los{' '}
        <strong>huéspedes</strong> de tu casa de alquiler vacacional.
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-16 space-y-4'>
        <li>
          Te ayudamos a{' '}
          <span>
            <Link
              href={'http://dygav.es/licencias-turisticas'}
              className='underline text-p600'
            >
              obtener la licencia turística para tu vivienda
            </Link>
          </span>
          , si todavía no la tienes.
        </li>

        <li>
          Publicamos de forma optimizada tu casa en las principales plataformas
          de alquiler de casas particulares de alquiler para vacaciones (
          AirBnB, Booking,...)
        </li>

        <li>
          Nos aseguraremos de que tus apartamentos estén siempre listos a la
          llegada, así, tus huéspedes podrán disfrutar de una estancia sin
          contratiempos y tú podrás obtener las mejores calificaciones y
          comentarios positivos.
        </li>
      </ul>

      <p className='text-xs md:text-sm lg:text-lg pt-5 text-black900'>
        ¡Descubre una forma más efectiva de{' '}
        <strong>gestionar tus apartamentos vacacionales con nosotros!</strong>
      </p>

      <p className='text-xs md:text-sm lg:text-2xl mt-8 space-y-4 text-p600 text-center mb-10 font-semibold'>
        Te ayudamos a ganar más dinero con tu casa de alquiler vacacional
      </p>

      <Llamanos paddingX='lg:px-28' />

      <h2 className='text-center px-4 md:px-0 text-2xl md:text-3xl pb-4 border-b-4 border-b-p600 font-semibold mb-16 mt-28'>
        ¿Cómo te ayudamos a rentabilizar tu casa de alquiler vacacional?
      </h2>

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
                <p className='text-black900 text-xs md:text-sm lg:text-lg text-left'>
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

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        Con nuestra tarifa de gestión integral de casas de alquiler vacacional
        altamente competitiva, obtendrás{' '}
        <strong>
          todos los beneficios de nuestros servicios de gestión profesional para
          aumentar al máximo la rentabilidad de tu vivienda turística durante
          todo el año
        </strong>
        .
      </p>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        <strong>Tu ganas, nosotros ganamos.</strong>
      </p>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        Al contrario que otras empresas que ocultan sus tarifas y esconden sus
        comisiones en <strong className='text-p600'>DYGAV</strong>, mantenemos
        una política de <strong>transparencia total</strong> en nuestras tarifas
        porque creemos en una relación donde{' '}
        <strong>
          nuestros ingresos están directamente vinculados al éxito de nuestros
          clientes
        </strong>
        .
      </p>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        Por eso solo cobramos una comisión del{' '}
        <strong>15%+IVA sobre la facturación</strong> de las casas que
        gestionamos, que{' '}
        <strong>
          incluye todos nuestros servicios profesionales de gestión
        </strong>
        .
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
        significa{' '}
        <strong>
          que no tendrás que preocuparte por ningún otro cargo adicional
        </strong>
        .
      </p>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        Nos esforzamos por brindarte una gestión clara y sin sorpresas,
        permitiéndote maximizar tus ingresos de tu vivienda de alquiler
        vacacional y disfrutar de{' '}
        <strong>una experiencia libre de preocupaciones</strong>.
      </p>

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-24 pb-2 font-semibold'>
        Todo el control de tu vivienda turística desde tu Smartphone
      </h2>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
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

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
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

      <HelpYouForm />
    </section>
  );
};
