import { HeroSearcher, Layout, SearcherCards } from '@/components';

export default function SearcherPage() {
  return (
    <section>
      <div
        className={
          'w-full h-auto lg:pb-36 bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <Layout title='DyGav Searcher' />
        <HeroSearcher />
      </div>

      <SearcherCards />
    </section>
  );
}
