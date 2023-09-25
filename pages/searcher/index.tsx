import {
  BurgerMenu,
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  NavBar,
  SearcherCards,
} from '@/components';

export default function SearcherPage() {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Seacher'>
          <HeroSearcher />
        </Layout>
      </MainHero>

      <SearcherCards />

      <Footer />
    </section>
  );
}
