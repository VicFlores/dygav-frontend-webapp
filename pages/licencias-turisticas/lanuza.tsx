import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  LanuzaInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroLanuzaImages } from '@/utils';
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

const LanuzaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Lanuza - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Lanuza de forma sencilla y rápida.`}
      />
      <MainHero images={heroLanuzaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Lanuza`}
            subtitle={`Como conseguir tu licencia turística en Lanuza en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <LanuzaInfo />

      <CityLicense cityName={cityName} images={pirineosAragonImages} />

      <Footer />
    </section>
  );
};

export default LanuzaLicensePage;
