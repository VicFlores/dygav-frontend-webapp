import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  TorreviejaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroTorreviejaImages } from '@/utils';
import { generalImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const TorreviejaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Torrevieja - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Torrevieja de forma sencilla y rápida.`}
      />
      <MainHero images={heroTorreviejaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Torrevieja`}
            subtitle={`Como conseguir tu licencia turística en Torrevieja en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <TorreviejaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default TorreviejaLicensePage;
