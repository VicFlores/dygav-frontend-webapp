import useDictionary from '@/app/hooks/useDictionary';
import { FilterToDatesLocationPeople } from '..';

export const Hero = () => {
  const dictionary = useDictionary('home');

  return (
    <section className='w-full text-white px-[66px] py-[70px]'>
      <div>
        <p className='text-3xl lg:text-[45px] md:text-[40px] pb-5 font-semibold'>
          {dictionary.hero?.title}
        </p>
        <p className='text-xl lg:text-[27px] md:text-[22px] font-semibold'>
          {dictionary.hero?.description}
        </p>
      </div>

      <FilterToDatesLocationPeople />
    </section>
  );
};
