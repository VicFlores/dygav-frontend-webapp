import React, { FC, useEffect, useState } from 'react';
import { Session } from 'next-auth';
import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  HelpFixedButton,
  AlicanteInfo,
  TorreviejaInfo,
  BenidormInfo,
  ElCampelloInfo,
  FinestratInfo,
  SantaPolaInfo,
  VillajoyosaInfo,
  OrihuelaOrihuelaCostaInfo,
  GuardamarSeguraInfo,
  CalpeInfo,
  PilarHoradadaInfo,
  AlteaInfo,
  FormigalInfo,
  SallenDeGallegoInfo,
} from '..';
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
  generalImages,
  pirineosAragonImages,
} from '@/utils';
import axios from 'axios';
import { BlogPost } from '@/types';
import { PostsCardsCarrusel } from './PostsCardsCarrusel';
import { CityCardsFooter } from './CityCardsFooter';

type CityLicenseProps = {
  session: Session | null;
  cityName: string;
};

const cityInfoComponents: { [key: string]: React.FC } = {
  torrevieja: TorreviejaInfo,
  alicante: AlicanteInfo,
  benidorm: BenidormInfo,
  orihuela: OrihuelaOrihuelaCostaInfo,
  'orihuela-costa': OrihuelaOrihuelaCostaInfo,
  'guardamar-del-segura': GuardamarSeguraInfo,
  'santa-pola': SantaPolaInfo,
  villajoyosa: VillajoyosaInfo,
  finestrat: FinestratInfo,
  'el-campello': ElCampelloInfo,
  calpe: CalpeInfo,
  'pilar-de-la-horadada': PilarHoradadaInfo,
  altea: AlteaInfo,
  formigal: FormigalInfo,
  'sallent-de-gallego': SallenDeGallegoInfo,
};

export const CityLicense: FC<CityLicenseProps> = ({ session, cityName }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100'
      );

      const filterPosts = res.data.filter((post: BlogPost) => {
        return post.title.rendered.includes(capitalizedCityName);
      });

      setPosts(filterPosts);
    };

    getPosts();
  }, [cityName]);

  function capitalizeFirstLetterOfEachWord(str: string) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const formattedCityName = cityName.replace(/-/g, ' ');
  const capitalizedCityName =
    capitalizeFirstLetterOfEachWord(formattedCityName);

  const CityInfoComponent = cityInfoComponents[cityName];

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
  };

  const images = cityImages[cityName] || [''];

  return (
    <>
      <UtilHead
        title={`Cómo Obtener Tu Licencia Turística en ${capitalizedCityName} - Dygav.es`}
        content={`Descubre todo lo necesario para adquirir tu licencia turística en ${capitalizedCityName} de forma sencilla y rápida.`}
      />
      <MainHero key={cityName} images={images}>
        <Layout session={session}>
          <HeroLicense
            title={`Licencias Turísticas ${capitalizedCityName}`}
            subtitle={`Como conseguir tu licencia turística en ${capitalizedCityName} en 2023`}
          />
        </Layout>
      </MainHero>
      <HelpFixedButton />

      {CityInfoComponent ? <CityInfoComponent /> : <></>}

      {posts.length > 0 ? (
        <section className='mt-16 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
          <PostsCardsCarrusel
            title={`Más artículos sobre ${
              capitalizedCityName === 'Pola'
                ? 'Santa Pola'
                : capitalizedCityName
            }`}
            posts={posts.slice(0, 4)}
          />
        </section>
      ) : (
        <></>
      )}

      {generalImages.some((image) => image.slug === cityName) ? (
        <CityCardsFooter images={generalImages} />
      ) : pirineosAragonImages.some((image) => image.slug === cityName) ? (
        <CityCardsFooter images={pirineosAragonImages} />
      ) : (
        <></>
      )}
    </>
  );
};
