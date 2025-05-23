import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  HozDeJacaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroHozDeJacaImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
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

const HozDeJacaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Hoz De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Hoz De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroHozDeJacaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Hoz De Jaca`}
            subtitle={`Como conseguir tu licencia turística en Hoz De Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <HozDeJacaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default HozDeJacaLicensePage;
