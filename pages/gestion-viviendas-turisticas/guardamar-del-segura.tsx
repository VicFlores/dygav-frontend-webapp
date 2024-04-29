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
  GuardamarDelSeguraMgmtInfo,
  CityLicense,
} from '@/components';
import { heroGuardamarDelSeguraImages } from '@/utils';
import { useRouter } from 'next/router';

const GuardamarDelSeguraOwnersPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let path = router.pathname;
  let parts = path.split('/');
  let cityName = parts[parts.length - 1];

  return (
    <section>
      <UtilHead
        title={`Gestion de Viviendas Turísticas en Guardamar Del Segura - Dygav.es`}
        content={`Descubre todo lo necesario para gestionar tu vivienda turística en Guardamar Del Segura de forma sencilla y rápida.`}
      />
      <MainHero images={heroGuardamarDelSeguraImages}>
        <Layout session={session}>
          <HeroLicense
            title={`Gestion de Viviendas Turísticas`}
            subtitle={`En DYGAV nos especializamos en brindar soluciones integrales para el alquiler vacacional`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      <GuardamarDelSeguraMgmtInfo />

      <CityLicense
        cityName={'Guardamar del Segura'}
        images={costaBlancaImages}
        typeOfPage='owners'
      />

      <Footer />
    </section>
  );
};

export default GuardamarDelSeguraOwnersPage;
