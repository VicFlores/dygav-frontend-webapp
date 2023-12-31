import { Footer, HeroLicense, Layout, MainHero, UtilHead } from '@/components';
import Posts from '@/components/Posts/Posts';
import { useSession } from 'next-auth/react';

export default function BlogsPage() {
  const { data: session } = useSession();

  return (
    <>
      <UtilHead
        title='Dygav Blog'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title='Dygav Blog'
            subtitle='Ahora el descubre el nuevo blog de Dygav'
          />
        </Layout>
      </MainHero>

      <Posts />

      <Footer />
    </>
  );
}
