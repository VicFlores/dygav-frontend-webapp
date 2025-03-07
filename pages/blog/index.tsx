import useDictionary from '@/app/hooks/useDictionary';
import { Footer, HeroLicense, Layout, MainHero, UtilHead } from '@/components';
import Posts from '@/components/Posts/Posts';
import user from '@/models/user';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

export default function BlogsPage({ user }: { user: TSession }) {
  const dictionary: any = useDictionary('blog');

  return (
    <>
      <UtilHead
        title='Bienvenidos al Blog de DYGAV'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout user={user}>
          <HeroLicense
            title={dictionary.heroLicense?.title}
            subtitle={dictionary.heroLicense?.subtitle}
          />
        </Layout>
      </MainHero>

      <Posts />

      <Footer />
    </>
  );
}
