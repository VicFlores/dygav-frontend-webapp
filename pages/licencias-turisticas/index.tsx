import useDictionary from '@/app/hooks/useDictionary';
import {
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
  const dictionary = useDictionary('licenses');

  return (
    <section>
      <UtilHead
        title='DYGAV: Descubre Cómo Obtener Tu Licencia Turística'
        content='Descubre con DYGAV todo lo necesario para adquirir tu licencia turística de forma sencilla y rápida'
      />

      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title={dictionary.heroLicense?.title}
            subtitle={dictionary.heroLicense?.description}
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <LicenseAditionalInfo />

      <GetLicense />

      <LicenseTourist />

      <Footer />
    </section>
  );
}
