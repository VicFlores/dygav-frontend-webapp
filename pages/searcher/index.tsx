import {
  BurgerMenu,
  Footer,
  HeroSearcher,
  MainHero,
  NavBar,
  SearcherCards,
} from '@/components';

export default function SearcherPage() {
  return (
    <section>
      <MainHero>
        <NavBar />
        <BurgerMenu />
        <HeroSearcher />
      </MainHero>

      <SearcherCards />

      <Footer />
    </section>
  );
}
