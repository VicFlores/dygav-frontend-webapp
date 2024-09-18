import useDictionary from '@/app/hooks/useDictionary';
import { FilterToDatesLocationPeople } from '../Filters/FilterToDatesLocationPeople';

export const HeroSearcher = () => {
  const dictionary = useDictionary('accommodations');

  return (
    <section className='w-full text-white px-[66px] py-[70px] pb-32 pt-20'>
      <h1 className='lg:text-[45px] text-center md:text-start text-[30px] md:text-[38px] font-semibold'>
        {dictionary.heroSearcher?.title}
      </h1>

      <FilterToDatesLocationPeople />
    </section>
  );
};
