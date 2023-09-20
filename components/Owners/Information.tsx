import Image from 'next/legacy/image';
import { informationCard } from '@/utils';

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
          className='px-4 md:px-6 space-y-4 w-auto text-sm lg:text-lg'
        >
          <p>
            En DYGAV, nos especializamos en maximizar la rentabilidad de tus
            apartamentos mediante estrategias efectivas de marketing digital,
            atención al cliente excepcional y un enfoque detallado en la
            limpieza y el mantenimiento. Con nuestra gestión de ingresos basada
            en tarifas dinámicas y competitivas, te ayudaremos a alcanzar el
            máximo potencial de tus propiedades. Confía en nosotros para
            brindarte informes detallados y asesoramiento personalizado para
            mejorar tus resultados y aprovechar oportunidades de crecimiento.
          </p>

          <p>
            ¡Descubre una forma más efectiva de gestionar tus apartamentos
            turísticos con nosotros!
          </p>
        </div>

        <div
          id='CardPlayGround'
          className='grid justify-center items-center gap-y-12'
        >
          {informationCard.map((item, index) => (
            <div
              key={index}
              className=' w-80 md:w-[540px] lg:w-[600px] border-[1px] border-p600 text-center bg-gray300/20 py-5'
            >
              <Image src={item.src} alt={item.alt} width={267} height={176} />

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

      <p className='mt-8 text-sm md:text-lg px-2 md:px-0'>
        Es importante destacar que no hay costes adicionales ocultos. Además,
        los gastos de limpieza son asumidos directamente por los huéspedes, lo
        que significa que no tendrás que preocuparte por ningún otro cargo
        adicional. Nos esforzamos por brindarte una gestión clara y sin
        sorpresas, permitiéndote maximizar tus ingresos y disfrutar de una
        experiencia libre de preocupaciones.
      </p>
    </section>
  );
};
