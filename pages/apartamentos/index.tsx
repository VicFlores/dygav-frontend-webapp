import {
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  SearcherCards,
<<<<<<< HEAD
} from '@/components';
import { searcherCard } from '@/utils';
import { useSession } from 'next-auth/react';
=======
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";
>>>>>>> 04d8d6494513646c732058eabfbacb97145e8b3a

export default function SearcherPage() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Apartamentos' content='' />

      <MainHero>
        <Layout session={session}>
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
