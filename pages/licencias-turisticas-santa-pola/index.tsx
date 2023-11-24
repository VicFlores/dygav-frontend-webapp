import {
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  UtilHead,
  SantaPolaInfo,
  HelpFixedButton,
} from '@/components';
import { useSession } from 'next-auth/react';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1700839593/Dygav/Santa%20Pola/Copia_de_Puerto_de_Santa_Pola_znyokx.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700839593/Dygav/Santa%20Pola/3_chl4lq.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700839593/Dygav/Santa%20Pola/2_gipvsk.WebP',
  'https://res.cloudinary.com/vicflores11/image/upload/v1700839591/Dygav/Santa%20Pola/1_cnxjq9.WebP',
];

const SantaPolaPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead
        title='Cómo Obtener Tu Licencia Turística en Santa Pola - Dygav.es'
        content='Descubre todo lo necesario para adquirir tu licencia turística en Santa Pola de forma sencilla y rápida.'
      />

      <MainHero images={images}>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas Santa Pola'
            subtitle='Como conseguir tu licencia turística en Santa Pola en 2023'
          />
        </Layout>
      </MainHero>

      <HelpFixedButton />

      <SantaPolaInfo />

      <Footer />
    </section>
  );
};

export default SantaPolaPage;
