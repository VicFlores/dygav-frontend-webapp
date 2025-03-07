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
  PirineoAragonesMgmtInfo,
  CityLicense,
} from '@/components';
import { getUserFromCookies, heroPirineoAragonesImages } from '@/utils';
import { useRouter } from 'next/router';
import { TSession } from '@/types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const PirineoAragonesOwnersPage = ({ user }: { user: TSession }) => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Pirineo Aragones - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Pirineo Aragones de forma sencilla y rápida.`}
      />
      <MainHero images={heroPirineoAragonesImages}>
        <Layout user={user}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PirineoAragonesMgmtInfo />

      <CityLicense
        cityName={'Pirineo Aragones'}
        images={pirineosAragonImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default PirineoAragonesOwnersPage;
