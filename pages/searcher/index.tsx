import {
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  SearcherCards,
} from '@/components';
import { useSession } from 'next-auth/react';

export default function SearcherPage() {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Seacher' session={session}>
          <HeroSearcher />
        </Layout>
      </MainHero>

      <SearcherCards />

      <Footer />
    </section>
  );
}
