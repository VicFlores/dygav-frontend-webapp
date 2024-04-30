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
import { heroPirineoAragonesImages } from '@/utils';
import { useRouter } from 'next/router';

const PirineoAragonesOwnersPage = () => {
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
        <Layout session={session}>
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
