import {
  Footer,
  CityLicense,
  HelpFixedButton,
  HeroLicense,
  Layout,
  MainHero,
  UtilHead,
} from '@/components';
import {
  heroAlicanteImages,
  heroAlteaImages,
  heroBenidormImages,
  heroCalpeImages,
  heroElCampelloImages,
  heroFinestrartImages,
  heroGuardamarDelSeguraImages,
  heroOrihuelaImages,
  heroPilarDeLaHoradadaImages,
  heroSantaPolaImages,
  heroTorreviejaImages,
  heroVillajoyosaImages,
  heroFormigalImages,
  heroSallenDeGallegoImages,
  heroLanuzaImages,
} from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CityLicensePage = () => {
  const { data: session } = useSession();
  const { query } = useRouter();

  function capitalizeFirstLetterOfEachWord(str: string) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  let formattedCityName = '';
  if (Array.isArray(query.cities)) {
    formattedCityName = query.cities[0].replace(/-/g, ' ');
  } else if (query.cities) {
    formattedCityName = query.cities.replace(/-/g, ' ');
  }

  const capitalizedCityName =
    capitalizeFirstLetterOfEachWord(formattedCityName);

  const cityImages: { [key: string]: string[] } = {
    alicante: heroAlicanteImages,
    altea: heroAlteaImages,
    benidorm: heroBenidormImages,
    calpe: heroCalpeImages,
    'el-campello': heroElCampelloImages,
    finestrat: heroFinestrartImages,
    'guardamar-del-segura': heroGuardamarDelSeguraImages,
    orihuela: heroOrihuelaImages,
    'orihuela-costa': heroOrihuelaImages,
    'pilar-de-la-horadada': heroPilarDeLaHoradadaImages,
    'santa-pola': heroSantaPolaImages,
    torrevieja: heroTorreviejaImages,
    villajoyosa: heroVillajoyosaImages,
    formigal: heroFormigalImages,
    'sallent-de-gallego': heroSallenDeGallegoImages,
    lanuza: heroLanuzaImages,
  };

  const images = cityImages[query.cities as string] || [''];

  return (
    <section>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en ${capitalizedCityName} - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en ${capitalizedCityName} de forma sencilla y rápida.`}
      />
      <MainHero key={query.cities as string} images={images}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas ${capitalizedCityName}`}
            subtitle={`Como conseguir tu licencia turística en ${capitalizedCityName} en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      {query !== undefined && query.cities !== undefined && (
        <CityLicense cityName={query.cities as string} />
      )}

      <Footer />
    </section>
  );
};

export default CityLicensePage;
