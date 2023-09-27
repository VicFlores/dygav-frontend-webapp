import {
  MainHero,
  Layout,
  Footer,
  LegalNotice,
  LegalNoticeDetails,
} from '@/components';

const legalNotice = () => {
  return (
    <section>
      <MainHero>
        <Layout title='Dygav Legal Notice'>
          <LegalNotice />
        </Layout>
      </MainHero>

      <LegalNoticeDetails />

      <Footer />
    </section>
  );
};

export default legalNotice;
