import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  CityLicense,
  Footer,
  PirineoAragonesInfo,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, heroPirineoAragonesImages } from '@/utils';
import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const PirineoAragonesLicensePage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en Pirineo Aragones - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en Pirineo Aragones de forma sencilla y rápida.`}
      />
      <MainHero images={heroPirineoAragonesImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Licencias Turísticas Pirineo Aragones`}
            subtitle={`Como conseguir tu licencia turística en Pirineo Aragones en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PirineoAragonesInfo />

      <CityLicense
        cityName={'Pirineo Aragones'}
        images={pirineosAragonImages}
      />

      <Footer />
    </section>
  );
};

export default PirineoAragonesLicensePage;
