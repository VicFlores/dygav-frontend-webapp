import {
  MainHero,
  Layout,
  Footer,
  LegalNotice,
  LegalNoticeDetails,
} from '@/components';
import { useSession } from 'next-auth/react';

const LegalNoticePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title='Dygav Legal Notice' session={session}>
          <LegalNotice />
        </Layout>
      </MainHero>

      <LegalNoticeDetails />

      <Footer />
    </section>
  );
};

export default LegalNoticePage;
