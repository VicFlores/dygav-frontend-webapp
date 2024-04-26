import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BlogPost } from '@/types';
import { PostsCardsCarrusel } from './PostsCardsCarrusel';
import { ImageProps } from '@/types/TImageProps';
import { MadridCardsFooter } from './MadridCardsFooter';
import {
  costaBlancaImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';

type CityLicenseProps = {
  cityName: string;
  typeOf: string;
};

export const MadridFooter: FC<CityLicenseProps> = ({ cityName, typeOf }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100'
      );

      const filterPosts = res.data.filter((post: BlogPost) => {
        if (cityName === 'Valle de Tena') {
          return post.title.rendered.includes('Valle de Tena');
        } else return post.title.rendered.includes(capitalizedCityName);
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

  return (
    <>
      {posts.length > 0 ? (
        <section className='md:mt-16 md:mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
          <PostsCardsCarrusel
            title={`Nuestros últimos artículos de ${
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

      <section className='mb-16 md:pb-24 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
        <h2 className='px-6 text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-10 md:px-4 mt-16'>
          Gestion de {typeOf === 'licenses' ? 'licencias' : 'viviendas'}{' '}
          turísticas en otras zonas de España
        </h2>

        <MadridCardsFooter
          images={costaBlancaImages}
          cardTitle={`Gestión de ${
            typeOf === 'licenses' ? 'Licencias' : 'Viviendas'
          } Turísticas`}
          link={`${
            typeOf === 'licenses'
              ? '/licencias-turisticas'
              : '/gestion-viviendas-turisticas'
          }`}
        />

        <MadridCardsFooter
          images={pirineosAragonImages}
          cardTitle={`Gestión de ${
            typeOf === 'licenses' ? 'Licencias' : 'Viviendas'
          } Turísticas`}
          link={`${
            typeOf === 'licenses'
              ? '/licencias-turisticas'
              : '/gestion-viviendas-turisticas'
          }`}
        />
      </section>
    </>
  );
};
