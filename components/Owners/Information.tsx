import Image from 'next/legacy/image';
import { informationCard } from '@/utils';
import { BiPhoneCall } from 'react-icons/bi';

export const Information = () => {
  return (
    <section className='px-8 md:px-28 gap-y-4 mb-20'>
      <p className='text-center px-4 md:px-0 text-2xl md:text-3xl text-black700 pb-4'>
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

          <p className='text-center text-2xl px-14 md:text-3xl text-black700'>
            ¡Llámanos!
          </p>

          <div className='flex flex-col space-y-4 md:flex-row md:justify-evenly items-center'>
            <div className='relative'>
              <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-8 lg:right-12' />
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 165 736
              </button>
            </div>

            <div className='relative'>
              <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-8 lg:right-12' />
              <button
                id='toggle'
                className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
              >
                +34 614 214 250
              </button>
            </div>
          </div>
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

      <h1 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-12 pb-2'>
        Nuestras Tarifas
      </h1>

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0 text-center md:text-start '>
        Con nuestra tarifa altamente competitiva, obtendrás todos los beneficios
        de nuestros servicios de gestión integral. Al contrario que otras
        empresas que ocultan sus tarifas escondiendo sus comisiones en DYGAV,
        mantenemos una política de transparencia total en nuestras tarifas
        porque creemos en una relación donde nuestros ingresos estén
        directamente vinculados al éxito de nuestros clientes y por eso cobramos
        una comisión del 15%+IVA sobre la facturación de las casas que
        gestionamos, lo cual incluye todos nuestros servicios profesionales de
        gestión. Es importante destacar que no hay costes adicionales ocultos.
        Además, los gastos de limpieza son asumidos directamente por los
        huéspedes, lo que significa que no tendrás que preocuparte por ningún
        otro cargo adicional. Nos esforzamos por brindarte una gestión clara y
        sin sorpresas, permitiéndote maximizar tus ingresos y disfrutar de una
        experiencia libre de preocupaciones. Es importante destacar que no hay
        costes adicionales ocultos. Además, los gastos de limpieza son asumidos
        directamente por los huéspedes, lo que significa que no tendrás que
        preocuparte por ningún otro cargo adicional. Nos esforzamos por
        brindarte una gestión clara y sin sorpresas, permitiéndote maximizar tus
        ingresos y disfrutar de una experiencia libre de preocupaciones.
      </p>
    </section>
  );
};
