import Image from 'next/legacy/image';
import { informationCard } from '@/utils';
import { HelpYouForm, Llamanos } from '..';
import Link from 'next/link';
import { BiPhoneCall } from 'react-icons/bi';
import { FAQSection } from './FAQSection';

export const Information = () => {
  const generalFAQS = [
    {
      question: '¿Puedo reservar mi apartamento para ir yo cuando quiera?',
      answer:
        'Sí, puedes reservar tu apartamento para uso personal en cualquier momento, ya sea a través de nuestra web o llamándonos directamente.',
    },
    {
      question: '¿Qué puedo hacer desde mi cuenta de propietario en DYGAV web?',
      answer:
        'Desde tu cuenta, puedes ver reservas en tiempo real, la disponibilidad y el calendario de tu propiedad, y acceder al histórico financiero. También tienes funciones para viajeros, como guardar alojamientos favoritos o revisar tus reservas pasadas y futuras.',
    },
    {
      question: '¿En qué es mejor el alquiler vacacional que el tradicional?',
      answer:
        'El alquiler vacacional ofrece mayor flexibilidad, potencial de ingresos más alto y la oportunidad de utilizar la propiedad para uso personal, a diferencia del alquiler tradicional que suele ser a largo plazo y con menos flexibilidad.',
    },
  ];

  const InvestmentsImprovementsFAQS = [
    {
      question:
        '¿Qué ítems específicos se revisan durante el inventario de la casa?',
      answer:
        'Revisamos todos los ítems, incluyendo menaje, ropa de cama, electrodomésticos y luces, para asegurar que todo esté en perfecto estado.',
    },
    {
      question:
        '¿Qué ítems son esenciales en el inventario para iniciar la actividad?',
      answer:
        'Los ítems esenciales incluyen mobiliario básico, electrodomésticos funcionales, ropa de cama limpia, menaje de cocina y elementos básicos de seguridad.',
    },
    {
      question:
        '¿Qué tendencias de interiorismo aumentan la demanda de alquiler?',
      answer:
        'Tendencias como espacios minimalistas, decoración moderna, interiores acogedores y temáticos, y la inclusión de comodidades modernas suelen aumentar la demanda.',
    },
    {
      question:
        '¿Cómo puede el diseño y decoración influir en las reseñas de los huéspedes?',
      answer:
        'Un buen diseño y decoración pueden mejorar significativamente la experiencia del huésped, lo que se refleja en reseñas más positivas. Los espacios bien decorados y cómodos suelen recibir mayores elogios.',
    },
  ];

  const PhotoReportFAQS = [
    {
      question: '¿Qué haremos en el reportaje fotográfico?',
      answer:
        'Realizaremos una sesión de fotos profesional que destaque la belleza y el encanto de tu propiedad, capturando cada espacio para generar mayor interés y aumentar las reservas.',
    },
    {
      question:
        '¿Qué equipos utiliza DYGAV para la fotografía profesional de los inmuebles?',
      answer:
        'Utilizamos equipos fotográficos profesionales de alta calidad para asegurar imágenes nítidas y atractivas de tus inmuebles.',
    },
    {
      question:
        '¿Cuál es la importancia de contar con fotos editadas profesionalmente?',
      answer:
        'Las fotos editadas profesionalmente mejoran la presentación de tu propiedad, lo que resulta en un mayor interés y reservas.',
    },
  ];

  const MarketingPromotionFAQS = [
    {
      question:
        '¿En qué plataformas de alquiler vacacional publica DYGAV los apartamentos?',
      answer:
        'Publicamos tus apartamentos en las principales plataformas de alquiler vacacional, incluyendo AirBnB, Booking, entre otras.',
    },
    {
      question: '¿A qué idiomas traducís el anuncio de mi vivienda turística?',
      answer:
        'Para garantizar que tu vivienda turística alcance a una audiencia global, traducimos tu anuncio a varios idiomas. Actualmente, ofrecemos traducciones al inglés, italiano, catalán, alemán, francés, portugués, holandés y ruso. Este servicio de traducción ayuda a atraer a huéspedes de diferentes partes del mundo, incrementando así la visibilidad y la posibilidad de reservas para tu propiedad.',
    },
    {
      question:
        '¿Qué estrategias de Marketing Digital utiliza DYGAV para destacar mi propiedad?',
      answer:
        'Utilizamos técnicas avanzadas de SEO, publicidad en redes sociales, y contenido atractivo para aumentar la visibilidad y atractivo de tu propiedad.',
    },
    {
      question: '¿Cómo funciona la Optimización Dinámica de Precios por IA?',
      answer:
        'Nuestro programa de precios dinámicos utiliza IA para analizar la demanda y ajustar las tarifas en tiempo real, maximizando tus ingresos.',
    },
    {
      question: '¿Qué factores considera el motor de IA al determinar precios?',
      answer:
        'El algoritmo considera factores como la demanda del mercado, eventos locales, temporadas, y tendencias históricas para optimizar los precios.',
    },
  ];

  const CheckInCheckOutFAQS = [
    {
      question:
        '¿Qué procesos tiene DYGAV para garantizar un Check-In/Check-Out eficiente?',
      answer:
        'Implementamos un sistema digitalizado y sin contacto para un proceso de check-in y check-out rápido y sin complicaciones.',
    },
    {
      question: '¿Cómo funciona la llave electrónica?',
      answer:
        'La llave electrónica permite a los huéspedes acceder a la propiedad a través de un código o una app, sin necesidad de una llave física.',
    },
    {
      question: '¿Por qué la llave electrónica aporta un extra de seguridad?',
      answer:
        'La llave electrónica mejora la seguridad al permitir el control de accesos y la posibilidad de cambiar los códigos entre huéspedes.',
    },
  ];

  const CustomerServiceFAQS = [
    {
      question:
        '¿Qué canales de atención están disponibles para los huéspedes?',
      answer:
        'Ofrecemos atención al cliente a través de teléfono, email, y mensajería en plataformas de alquiler, asegurando asistencia continua.',
    },
    {
      question:
        '¿Qué se incluye en el detalle de bienvenida para estancias largas?',
      answer:
        'Para estancias largas, ofrecemos detalles de bienvenida personalizados, como guías locales, obsequios, y elementos esenciales de confort.',
    },
  ];

  const CleaningMaintenanceFAQS = [
    {
      question: '¿Cuándo se realiza la limpieza?',
      answer:
        'La limpieza se realiza después de cada estancia o según sea necesario para mantener los estándares de higiene y presentación.',
    },
    {
      question: '¿Cómo asegura DYGAV una limpieza a detalle?',
      answer:
        'Seguimos protocolos de limpieza exhaustivos y usamos productos de calidad para asegurar una limpieza profunda y detallada.',
    },
    {
      question: '¿Cómo funciona la limpieza de ropa de cama y toallas?',
      answer:
        'La ropa de cama y toallas se limpian y reemplazan después de cada estancia, siguiendo altos estándares de higiene y calidad.',
    },
    {
      question: ' ¿Quién paga la limpieza?',
      answer:
        'Los costes de limpieza  son cubiertos por los huéspedes como parte de la tarifa de alquiler.',
    },
  ];

  const InsuranceManagementFAQS = [
    {
      question: '¿Qué seguros de alquiler vacacional recomienda DYGAV?',
      answer:
        'Recomendamos seguros de alquiler vacacional que cubran daños, responsabilidad civil y protección ante imprevistos.',
    },
    {
      question: '¿Cómo se maneja la retención de fianza a los huéspedes?',
      answer:
        'Manejamos la fianza según las políticas de las plataformas de alquiler y las normativas locales, reteniendo y liberando fondos según sea necesario.',
    },
    {
      question: '¿Qué hacer en caso de desperfectos en la propiedad?',
      answer:
        'En caso de desperfectos, gestionamos la reclamación con el seguro y nos aseguramos de que la propiedad sea reparada rápidamente.',
    },
  ];

  const ReviewManagementFAQS = [
    {
      question: '¿Por qué es importante gestionar y responder a las reseñas?',
      answer:
        'Una gestión activa de reseñas ayuda a mejorar la reputación de tu propiedad y atraer a más huéspedes.',
    },
    {
      question:
        '¿Qué estrategias utiliza DYGAV para alentar reseñas positivas?',
      answer:
        'Fomentamos experiencias excepcionales para los huéspedes y les animamos a compartir sus opiniones positivas después de su estancia.',
    },
  ];

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

      <div className='flex justify-center items-center mt-16'>
        <div
          className={`grid lg:grid-cols-2 bg-gray300/40 border border-p600 rounded-xl px-9 md:px-10 lg:px-28 py-10 md:py-5`}
        >
          <p className='text-lg lg:text-2xl mt-8 space-y-4 text-p600 text-center mb-10 font-semibold lg:col-start-1 lg:col-end-3'>
            TE AYUDAMOS A RENTABILIZAR TU ALQUILER TURÍSTICO
          </p>

          <figure className='relative w-52 h-52 md:w-64 md:h-64 self-center justify-self-center mb-4 md:mb-0'>
            <Image
              src={
                'https://res.cloudinary.com/vicflores11/image/upload/v1698162186/Dygav/undraw_personal_email_re_4lx7_c7oydo.svg'
              }
              alt='Contact Us Image'
              layout='fill'
            />
          </figure>

          <div className='flex-col space-y-4 justify-center md:justify-evenly items-center self-center justify-self-center'>
            <p className='text-center text-2xl px-14 md:text-3xl text-black700'>
              ¡Llámanos!
            </p>

            <div className='relative'>
              <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
              <a href='tel:+34614165736'>
                <button
                  id='toggle'
                  className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-full md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
                >
                  +34 614 165 736
                </button>
              </a>
            </div>

            <div className='relative'>
              <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-14 md:right-16 lg:right-12' />
              <a href='tel:+34614214250'>
                <button
                  id='toggle'
                  className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-full md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
                >
                  +34 614 214 250
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

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

      <figure className='relative w-52 h-52 md:w-80 md:h-80 self-center mt-10'>
        <Image
          src={
            'https://res.cloudinary.com/vicflores11/image/upload/v1701529753/Dygav/undraw_home_settings_re_pkya_bvz343.svg'
          }
          alt=''
          layout='fill'
        />
      </figure>

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

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-6 pb-2 font-semibold'>
        Preguntas Comunes sobre Nuestra Gestión de Viviendas Turísticas
      </h2>

      <FAQSection title='Preguntas Generales' faqs={generalFAQS} />

      <FAQSection
        title='Inversiones y Mejoras'
        faqs={InvestmentsImprovementsFAQS}
      />

      <FAQSection title='Reportaje Fotográfico' faqs={PhotoReportFAQS} />

      <FAQSection title='Marketing Y Promoción' faqs={MarketingPromotionFAQS} />

      <FAQSection title='Check In Check Out' faqs={CheckInCheckOutFAQS} />

      <FAQSection title='Atención al Cliente' faqs={CustomerServiceFAQS} />

      <FAQSection
        title='Limpieza y Mantenimiento'
        faqs={CleaningMaintenanceFAQS}
      />

      <FAQSection title='Gestión de Seguros' faqs={InsuranceManagementFAQS} />

      <FAQSection title='Gestión de Reseñas' faqs={ReviewManagementFAQS} />
    </section>
  );
};
