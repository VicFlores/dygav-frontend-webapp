import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  JacaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroJacaImages } from '@/utils';
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

const JacaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroJacaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Jaca`}
            subtitle={`Como conseguir tu licencia turística en Jaca en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <JacaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default JacaLicensePage;
