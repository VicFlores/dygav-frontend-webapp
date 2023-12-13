import { FilterToDatesLocationPeople } from '..';

export const Hero = () => {
  return (
    <section className='w-full text-white px-[66px] py-[70px]'>
      <div>
        <p className='text-3xl lg:text-[45px] md:text-[40px] pb-5 font-semibold'>
          Bienvenidos a DYGAV
        </p>
        <p className='text-xl lg:text-[27px] md:text-[22px] font-semibold'>
          Estás a unos clics de tu nuevo lugar favorito
        </p>
      </div>

      <FilterToDatesLocationPeople />
    </section>
  );
};
