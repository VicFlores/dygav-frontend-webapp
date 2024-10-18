import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  MadridInfo,
  MadridFooter,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroMadridImages } from '@/utils';
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

const MadridLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Madrid - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Madrid de forma sencilla y rápida.`}
      />
      <MainHero images={heroMadridImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Madrid`}
            subtitle={`Como conseguir tu licencia turística en Madrid en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <MadridInfo />

      <MadridFooter cityName={cityName} typeOf={'licenses'} />

      <Footer />
    </section>
  );
};

export default MadridLicensePage;
