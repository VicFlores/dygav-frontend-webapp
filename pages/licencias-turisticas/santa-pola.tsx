import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SantaPolaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroSantaPolaImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

const SantaPolaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Santa Pola - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Santa Pola de forma sencilla y rápida.`}
      />
      <MainHero images={heroSantaPolaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Santa Pola`}
            subtitle={`Como conseguir tu licencia turística en Santa Pola en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SantaPolaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default SantaPolaLicensePage;
