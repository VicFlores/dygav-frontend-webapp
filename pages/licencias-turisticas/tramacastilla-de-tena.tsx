import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  TramacastillaTenaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroTramacastillaImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
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

const TramacastillaDeTenaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Tramacastilla De Tena - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Tramacastilla De Tena de forma sencilla y rápida.`}
      />
      <MainHero images={heroTramacastillaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Tramacastilla De Tena`}
            subtitle={`Como conseguir tu licencia turística en Tramacastilla De Tena en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <TramacastillaTenaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default TramacastillaDeTenaLicensePage;
