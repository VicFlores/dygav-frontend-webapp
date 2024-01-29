import { managementHomes } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  PanticosaMgmtInfo,
  CityLicense,
} from '@/components';
import { heroPanticosaImages } from '@/utils';

const PanticosaOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Panticosa - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Panticosa de forma sencilla y rápida.`}
      />
      <MainHero images={heroPanticosaImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <PanticosaMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={managementHomes}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default PanticosaOwnersPage;
