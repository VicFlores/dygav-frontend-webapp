import useDictionary from '@/app/hooks/useDictionary';
import { Footer, HeroLicense, Layout, MainHero, UtilHead } from '@/components';
import Posts from '@/components/Posts/Posts';
import { useSession } from 'next-auth/react';

export default function BlogsPage() {
  const { data: session } = useSession();
  const dictionary: any = useDictionary('blog');

  return (
    <>
      <UtilHead
        title='Bienvenidos al Blog de DYGAV'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
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
