import { FC } from 'react';

export const ApartamentosTuristicosHero: FC<{ ubicacion: string }> = ({
  ubicacion,
}) => {
  return (
    <section className='w-full text-white px-[66px] py-[70px]'>
      <div>
        <h1 className='text-3xl lg:text-[45px] md:text-[40px] pb-5 font-semibold text-center md:text-start leading-normal'>
          Encuentra tu alojamiento turístico <br /> ideal en {ubicacion}
        </h1>
        <p className='text-xl lg:text-[27px] md:text-[22px] font-semibold text-center md:text-start'>
          Disfruta de una estancia única en nuestros alojamientos turísticos
        </p>
      </div>
    </section>
  );
};
