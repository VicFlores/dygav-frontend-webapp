import {
  HeroOwners,
  PeachOwners,
  ContactYou,
  Information,
  Contact,
  NavBar,
  Footer,
  BurgerMenu,
  MainHero,
  Layout,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";

const OwnersPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Owners' content='' />

      <MainHero>
        <Layout session={session}>
          <HeroOwners />
        </Layout>
      </MainHero>

      <PeachOwners />

      <Information />

      <Contact />

      <ContactYou />

      <Footer />
    </section>
  );
};

export default OwnersPage;
