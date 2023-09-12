import { useSession } from 'next-auth/react';
import { HeroSearcher, NavBar, SearcherCards } from '@/components';

export default function SearcherPage() {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full h-auto lg:pb-36 bg-heroContent bg-center bg-cover bg-no-repeat '
        }
      >
        <NavBar session={session} />
        <HeroSearcher />
      </div>

      <SearcherCards />
    </section>
  );
}
