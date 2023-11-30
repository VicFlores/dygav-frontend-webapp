import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  HelpFixedButton,
  AlteaInfo,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701357921/Dygav/Altea/7_dezkye.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701357912/Dygav/Altea/8_hqpl0p.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701357909/Dygav/Altea/9_vywvjd.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701357907/Dygav/Altea/10_zdkkww.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701357904/Dygav/Altea/11_jlgqfy.WebP',
];

const PilarDeLaHoradadaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Altea - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Altea de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Altea'
            subtitle='Como conseguir tu licencia turística en Altea en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <AlteaInfo />

      <Footer />
    </section>
  );
};

export default PilarDeLaHoradadaPage;
