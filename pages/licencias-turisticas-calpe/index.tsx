import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  HelpFixedButton,
  CalpeInfo,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701292812/Dygav/Calpe/26_eip4rv.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701292655/Dygav/Calpe/25_p3lvu7.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701292652/Dygav/Calpe/27_tfsmto.WebP',
];

const CalpePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Calpe - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Calpe de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Calpe'
            subtitle='Como conseguir tu licencia turística en Calpe en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <CalpeInfo />

      <Footer />
    </section>
  );
};

export default CalpePage;
