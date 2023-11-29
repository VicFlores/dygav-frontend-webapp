import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  HelpFixedButton,
  PilarHoradadaInfo,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701293984/Dygav/Pilar%20de%20la%20Horadada/21_lwqjnu.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701293980/Dygav/Pilar%20de%20la%20Horadada/22_saufix.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701293972/Dygav/Pilar%20de%20la%20Horadada/23_gskeis.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701293965/Dygav/Pilar%20de%20la%20Horadada/24_i5dkuy.WebP',
];

const PilarDeLaHoradadaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Pilar de la Horadada - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Pilar de la Horadada de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Pilar de la Horadada'
            subtitle='Como conseguir tu licencia turística en Pilar de la Horadada en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <PilarHoradadaInfo />

      <Footer />
    </section>
  );
};

export default PilarDeLaHoradadaPage;
