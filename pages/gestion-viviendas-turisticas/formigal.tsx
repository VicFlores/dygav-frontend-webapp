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
  FormigalMgmtInfo,
  CityLicense,
} from '@/components';
import { heroFormigalImages } from '@/utils';

const FormigalOwnersPage = () => {
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
      <MainHero images={heroFormigalImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <FormigalMgmtInfo />

      <CityLicense
        cityName={cityName}
        images={managementHomes}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default FormigalOwnersPage;
