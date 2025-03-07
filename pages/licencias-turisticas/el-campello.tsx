import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  ElCampelloInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroElCampelloImages } from '@/utils';
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

const ElCampelloLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en El Campello - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en El Campello de forma sencilla y rápida.`}
      />
      <MainHero images={heroElCampelloImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas El Campello`}
            subtitle={`Como conseguir tu licencia turística en El Campello en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <ElCampelloInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default ElCampelloLicensePage;
