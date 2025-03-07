import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SandiniesInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroSandiniesImages } from '@/utils';
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

const SandiniesLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sandiniés - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sandiniés de forma sencilla y rápida.`}
      />
      <MainHero images={heroSandiniesImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Sandiniés`}
            subtitle={`Como conseguir tu licencia turística en Sandiniés en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SandiniesInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SandiniesLicensePage;
