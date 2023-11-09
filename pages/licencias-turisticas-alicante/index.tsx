import {
  MainHero,
  Layout,
  HeroLicense,
  AlicanteInfo,
  Footer,
  UtilHead,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488551/Dygav/Alicante/1_b1a7da.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488547/Dygav/Alicante/3_knlkzn.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488277/Dygav/Alicante/Licencias_Tur%C3%ADsticas__Ayuntamiento_de_Alicante_nn3dun.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.WebP',
];

const AlicantePage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Alicante - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Alicante de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Alicante'
            subtitle='Como conseguir tu licencia turística en Alicante en 2023'
          />
        </Layout>
      </MainHero>

      <AlicanteInfo />

      <Footer />
    </section>
  );
};

export default AlicantePage;
