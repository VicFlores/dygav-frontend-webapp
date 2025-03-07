import {
  MainHero,
  Layout,
  Footer,
  LegalNotice,
  LegalNoticeDetails,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const LegalNoticePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Legal Notice</title>
        <meta name='robots' content='noindex' />
      </Head>

      <MainHero>
        <Layout user={user}>
          <LegalNotice />
        </Layout>
      </MainHero>

      <LegalNoticeDetails />

      <Footer />
    </section>
  );
};

export default LegalNoticePage;
