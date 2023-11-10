import {
  Contact,
  Footer,
  GetLicense,
  HelpFixedButton,
  HeroLicense,
  Layout,
  LicenseAditionalInfo,
  LicenseTourist,
  MainHero,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';

export default function License() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='DYGAV: Descubre Cómo Obtener Tu Licencia Turística'
        content='Descubre con DYGAV todo lo necesario para adquirir tu licencia turística de forma sencilla y rápida'
      />

      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title='¿Cómo obtener tu Licencia Turística?'
            subtitle='Tú Licencia Turística Más Cerca de lo que Crees'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <LicenseAditionalInfo />

      <GetLicense />

      <LicenseTourist />

      <Contact />

      <Footer />
    </section>
  );
}
