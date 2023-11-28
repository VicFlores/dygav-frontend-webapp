import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  ElCampelloInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1701207173/Dygav/El%20Campello/2_fldo0n.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701207169/Dygav/El%20Campello/3_tkalnt.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701207161/Dygav/El%20Campello/4_iahcly.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701207157/Dygav/El%20Campello/5_k3ebaw.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1701207155/Dygav/El%20Campello/6_ngxfdi.WebP',
];

const ElCampelloPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en El Campello - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en El Campello de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas El Campello'
            subtitle='Como conseguir tu licencia turística en El Campello en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <ElCampelloInfo />

      <Footer />
    </section>
  );
};

export default ElCampelloPage;
