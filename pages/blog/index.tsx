import { Footer, HeroLicense, Layout, MainHero, UtilHead } from '@/components';
import Posts from '@/components/Posts/Posts';
import { useSession } from 'next-auth/react';

export default function BlogsPage() {
  const { data: session } = useSession();

  return (
    <>
      <UtilHead
        title='Bienvenidos al Blog de DYGAV'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title='Bienvenidos al Blog de DYGAV'
            subtitle='Explora con nosotros los destinos más encantadores de España.'
          />
        </Layout>
      </MainHero>

      <Posts />

      <Footer />
    </>
  );
}
