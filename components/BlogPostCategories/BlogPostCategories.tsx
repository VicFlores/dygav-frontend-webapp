import { BlogPost, Category } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import { CategorySection } from './CategorySection';
import { PostCardCategories } from '..';
import { ParsedUrlQuery } from 'querystring';

type BlogPostWithSubCategory = BlogPost & {
  subCategoryName: string | null;
};

export const BlogPostCategories: FC<{
  posts: BlogPostWithSubCategory[];
  query: ParsedUrlQuery;
  filterByCategories: Category[];
}> = ({ posts, query, filterByCategories }) => {
  const [cityName, setCityName] = useState<string>();

  useEffect(() => {
    if (query.cities) {
      const capitalizeFirstLetterOfEachWord = (str: string) => {
        return str
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

      const formattedCityName = (query.cities as string).replace(/-/g, ' ');

      setCityName(capitalizeFirstLetterOfEachWord(formattedCityName));
    }
  }, [query]);

  console.log(cityName);

  return (
    <section className='mt-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      {cityName !== undefined && (
        <>
          <CategorySection
            title='Destinos turísticos'
            subtitle={`Descubre ${cityName}: Lugares Únicos y Fascinantes`}
            information={`Viaja con nosotros a través de los rincones más especiales de ${cityName}. De sur a norte, de arriba a abajo, conoce a fondo cada rincón, sumergiéndote en su cultura, paisajes y secretos.`}
            posts={posts}
          />

          <CategorySection
            title='Gastronomía Local'
            subtitle={`Sabores de ${cityName}: Un Viaje Gastronómico`}
            information={`Acompáñanos en un recorrido culinario por ${cityName}. Te llevaremos a descubrir los platos típicos, vinos y sabores únicos de ${cityName} y sus alrededores`}
            posts={posts}
          />

          <CategorySection
            title='Ocio y Entretenimiento'
            subtitle={`Vive ${cityName}: Aventuras y Cultura en Cada Rincón`}
            information={`Te hablaremos sobre actividades de ocio, eventos culturales y deportivos que hacen única a ${cityName}. Descubre todo lo que ${cityName} tiene que ofrecer.`}
            posts={posts}
          />

          <CategorySection
            title='Gestión de Alquileres Vacacionales'
            subtitle={`Éxito en Alquileres Vacacionales en ${cityName}`}
            information={`Obtén los mejores consejos para gestionar tu propiedad vacacional, sea en la costa o en las montañas. Hablaremos sobre decoración, mantenimiento y promoción, adaptándonos a la idiosincrasia de cada cada región.`}
            posts={posts}
          />

          <CategorySection
            title='Consejos y Recursos para Viajeros'
            subtitle={`Tu Guía para Viajar por ${cityName}`}
            information={`Prepara tu viaje por ${cityName} con nuestros consejos. Desde equipaje hasta guías de viaje, te proporcionamos la información esencial para una estancia perfecta.`}
            posts={posts}
          />

          <CategorySection
            title='Trámites y Legislación para Alquileres Vacacionales'
            subtitle={`Legalidad y Alquileres en ${cityName}: Lo Que Necesitas Saber.`}
            information={`Infórmate sobre los aspectos legales de los alquileres vacacionales en ${cityName}. Desde licencias turísticas hasta normativas locales e impuestos.`}
            posts={posts}
          />

          <CategorySection
            title='Tendencias y Evolución del Alquiler Vacacional'
            subtitle={`El Futuro del Alquiler Vacacional en ${cityName}`}
            information={`Mantente actualizado sobre las tendencias del mercado de alquileres vacacionales en ${cityName}. Analizamos cómo la tecnología y las preferencias de los clientes están cambiando el sector.`}
            posts={posts}
          />
        </>
      )}

      <PostCardCategories
        filterByCategories={filterByCategories}
        query={query}
        title='Más artículos sobre otros municipios'
        subtitle='Conoce nuevos destinos y un poco sobre sus curiosidades, historia, gastronomía, lugares turísticos mas relevantes.'
      />
    </section>
  );
};
