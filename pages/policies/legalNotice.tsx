import {
  MainHero,
  Layout,
  Footer,
  LegalNotice,
  LegalNoticeDetails,
} from '@/components';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

const LegalNoticePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Legal Notice</title>
        <meta name='robots' content='noindex' />
      </Head>

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
