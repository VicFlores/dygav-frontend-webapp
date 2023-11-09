import { AiOutlineCheckCircle } from 'react-icons/ai';
import { HelpYouForm } from '..';

export const Contact = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='text-center text-2xl md:text-3xl mt-16 pb-4 font-semibold border-b-4 border-b-p600 w-[85%] md:w-3/4 lg:w-2/4'>
        Prepárate para el Éxito
      </h2>

      <div className='pt-8 px-4 md:px-8 space-y-4 text-xs md:text-sm lg:text-lg text-black900'>
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

      <HelpYouForm />
    </section>
  );
};
