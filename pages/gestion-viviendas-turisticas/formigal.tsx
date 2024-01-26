import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  Footer,
  FormigalMgmtInfo,
  CityLicense,
} from '@/components';
import { heroAlicanteImages } from '@/utils';
import { managementHomes } from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const AlicanteLicensePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Formigal - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Formigal de forma sencilla y rápida.`}
      />
      <MainHero images={heroAlicanteImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <FormigalMgmtInfo />

      <CityLicense cityName={cityName} images={managementHomes} />

      <Footer />
    </section>
  );
};

export default AlicanteLicensePage;
