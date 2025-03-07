import { pirineosAragonImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  ElPueyoDeJacaMgmtInfo,
  CityLicense,
} from '@/components';
import { getUserFromCookies, heroElPueyoDeJacaImages } from '@/utils';
import { GetServerSideProps } from 'next';
import { TSession } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const ElPueyoDeJacaOwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en El Pueyo De Jaca - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en El Pueyo De Jaca de forma sencilla y rápida.`}
      />
      <MainHero images={heroElPueyoDeJacaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <ElPueyoDeJacaMgmtInfo />

      <CityLicense
        cityName={'Valle de Tena'}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default ElPueyoDeJacaOwnersPage;
