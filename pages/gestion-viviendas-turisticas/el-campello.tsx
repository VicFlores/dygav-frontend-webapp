import { costaBlancaImages } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import React from 'react';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  ElCampelloMgmtInfo,
  CityLicense,
} from '@/components';
import { heroElCampelloImages } from '@/utils';
import { useRouter } from 'next/router';

const ElCampelloOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en El Campello - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en El Campello de forma sencilla y rápida.`}
      />
      <MainHero images={heroElCampelloImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <ElCampelloMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={costaBlancaImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default ElCampelloOwnersPage;
