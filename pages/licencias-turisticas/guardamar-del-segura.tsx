import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  GuardamarSeguraInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroGuardamarDelSeguraImages } from '@/utils';
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

const GuardamarDelSeguraLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Guardamar Del Segura - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Guardamar Del Segura de forma sencilla y rápida.`}
      />
      <MainHero images={heroGuardamarDelSeguraImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Guardamar Del Segura`}
            subtitle={`Como conseguir tu licencia turística en Guardamar Del Segura en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <GuardamarSeguraInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default GuardamarDelSeguraLicensePage;
