import {
  MainHero,
  Layout,
  Footer,
  LegalNotice,
  LegalNoticeDetails,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";

const LegalNoticePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Legal Notice' content='' />

      <MainHero>
        <Layout session={session}>
          <LegalNotice />
        </Layout>
      </MainHero>

      <LegalNoticeDetails />

      <Footer />
    </section>
  );
};

export default LegalNoticePage;
