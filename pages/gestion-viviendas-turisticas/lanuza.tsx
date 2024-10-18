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
  LanuzaMgmtInfo,
  CityLicense,
} from '@/components';
import { getUserFromCookies, heroLanuzaImages } from '@/utils';
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

const LanuzaOwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Lanuza - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Lanuza de forma sencilla y rápida.`}
      />
      <MainHero images={heroLanuzaImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <LanuzaMgmtInfo />

      <CityLicense
        cityName={'Valle de Tena'}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default LanuzaOwnersPage;
