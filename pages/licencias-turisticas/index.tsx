import useDictionary from '@/app/hooks/useDictionary';
import {
  Footer,
  GetLicense,
  HelpFixedButton,
  HeroLicense,
  Layout,
  LicenseAditionalInfo,
  LicenseTourist,
  MainHero,
  UtilHead,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies } from '@/utils';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

export default function License({ user }: { user: TSession }) {
  const { data: session } = useSession();
  const dictionary = useDictionary('licenses');

  return (
    <section>
      <UtilHead
        title='DYGAV: Descubre Cómo Obtener Tu Licencia Turística'
        content='Descubre con DYGAV todo lo necesario para adquirir tu licencia turística de forma sencilla y rápida'
      />

      <MainHero>
        <Layout user={user}>
          <HeroLicense
            title={dictionary.heroLicense?.title}
            subtitle={dictionary.heroLicense?.description}
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <LicenseAditionalInfo />

      <GetLicense />

      <LicenseTourist />

      <Footer />
    </section>
  );
}
