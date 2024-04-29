import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BlogPost } from '@/types';
import { PostsCardsCarrusel } from './PostsCardsCarrusel';
import { CityCardsFooter } from './CityCardsFooter';
import { ImageProps } from '@/types/TImageProps';

type CityLicenseProps = {
  cityName: string;
  images: ImageProps[];
  typeOfPage?: string;
};

export const CityLicense: FC<CityLicenseProps> = ({
  cityName,
  images,
  typeOfPage,
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=1'
        ),
        axios.get(
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=2'
        ),
      ]);

      const allData = [...firstResponse.data, ...secondResponse.data];

      const filterPosts = allData.filter((post: BlogPost) => {
        if (cityName === 'Valle de Tena') {
          return post.title.rendered.includes('Valle de Tena');
        }
        if (cityName === 'Guardamar del Segura') {
          return post.title.rendered.includes('Guardamar del Segura');
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

      {typeOfPage ? (
        <CityCardsFooter
          images={images}
          cardTitle='Gestión de Viviendas Turísticas'
          link='/gestion-viviendas-turisticas'
        />
      ) : (
        <CityCardsFooter images={images} />
      )}
    </>
  );
};
