import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Contact = () => {
  return (
    <section className='grid px-28 mb-28 gap-2 '>
      <p className='text-center text-[34px] '>Prepárate para el Éxito</p>

      <div className='border-t-4 border-t-p600 pt-8 px-8 space-y-4 text-lg text-black900'>
        <p>
          En DYGAV trabajamos para que que tu propiedad cumpla con los criterios
          de habitabilidad, seguridad y servicios exigidos.
        </p>
        <p>
          Enfocados en tu éxito, nos encargamos de que cada paso del proceso sea
          realizado con precisión y meticulosidad.
        </p>
        <p>
          Estaremos contigo durante todo el camino, brindándote el apoyo
          necesario para que puedas dar el paso hacia el éxito en el mercado de
          alquileres vacacionales.
        </p>
      </div>

      <div className='relative'>
        <AiOutlineCheckCircle className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-6 md:right-5 lg:right-7' />
        <button
          id='toggle'
          className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
        >
          Contactanos ahora
        </button>
      </div>
    </section>
  );
};
