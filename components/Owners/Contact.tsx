import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Contact = () => {
  return (
    <section className='grid px-8 md:px-28 mb-28 gap-2 '>
      <p className='text-center text-2xl md:text-3xl font-semibold'>
        Prepárate para el Éxito
      </p>

      <div className='border-t-4 border-t-p600 pt-8 px-4 md:px-8 space-y-4 text-xs md:text-sm lg:text-lg text-black900'>
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
    </section>
  );
};
