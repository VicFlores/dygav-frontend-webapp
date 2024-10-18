import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PilarHoradadaInfo,
} from '@/components';
import { getUserFromCookies, heroPilarDeLaHoradadaImages } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { generalImages } from '../../utils/static/licenseImages';
import { TSession } from '@/types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

const PilarDeLaHoradadaLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Pilar De La Horadada - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Pilar De La Horadada de forma sencilla y rápida.`}
      />
      <MainHero images={heroPilarDeLaHoradadaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Pilar De La Horadada`}
            subtitle={`Como conseguir tu licencia turística en Pilar De La Horadada en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PilarHoradadaInfo />

      <CityLicense cityName={cityName} images={generalImages} />

      <Footer />
    </section>
  );
};

export default PilarDeLaHoradadaLicensePage;
