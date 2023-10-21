import {
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  SearcherCards,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";

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

      <SearcherCards />

      <Footer />
    </section>
  );
}
