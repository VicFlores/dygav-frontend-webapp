import {
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  SearcherCards,
} from '@/components';
import { searcherCard } from '@/utils';
import { useSession } from 'next-auth/react';

export default function SearcherPage() {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Apartamentos' session={session}>
          <HeroSearcher />
        </Layout>
      </MainHero>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 mb-56 gap-y-20'>
        {searcherCard.map((item, index) => (
          <SearcherCards key={index} item={item} />
        ))}
      </div>

      <Footer />
    </section>
  );
}
