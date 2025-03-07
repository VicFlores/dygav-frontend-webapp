import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  SabiñánigoInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroSabiñánigoImages } from '@/utils';
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

const SabiñánigoLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Sabiñánigo - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Sabiñánigo de forma sencilla y rápida.`}
      />
      <MainHero images={heroSabiñánigoImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Sabiñánigo`}
            subtitle={`Como conseguir tu licencia turística en Sabiñánigo en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <SabiñánigoInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default SabiñánigoLicensePage;
