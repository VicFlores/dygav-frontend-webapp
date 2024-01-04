import { BlogPost, Category } from '@/types';
import React, { FC } from 'react';
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
  return (
    <section className='mt-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      <CategorySection
        title='Destinos turísticos'
        subtitle='Descubre España: Lugares Únicos y Fascinantes'
        information='Viaja con nosotros a través de los rincones más especiales de España. De sur a norte, de la playa a la montaña conoce cada ciudad y localidad a fondo, sumergiendote en su cultura, paisajes y secretos.'
        posts={posts}
      />

      <CategorySection
        title='Gastronomía Local'
        subtitle='Sabores de España: Un Viaje Gastronómico'
        information='Acompáñanos en un recorrido culinario por España. Te llevaremos a descubrir los platos típicos, vinos y sabores únicos de cada región, desde la Costa Blanca hasta los Pirineos pasando por Madrid'
        posts={posts}
      />

      <CategorySection
        title='Ocio y Entretenimiento'
        subtitle='Vive España: Aventuras y Cultura en Cada Rincón'
        information='Descubre la vida de las diferentes regiones de España. Te hablaremos sobre actividades de ocio, eventos culturales y deportivos que hacen única a cada área, desde la Costa Blanca hasta los Pirineos pasando por Madrid.'
        posts={posts}
      />

      <CategorySection
        title='Gestión de Alquileres Vacacionales'
        subtitle='Éxito en Alquileres Vacacionales por Toda España'
        information='Obtén los mejores consejos para gestionar tu propiedad vacacional, sea en la costa o en las montañas. Hablaremos sobre decoración, mantenimiento y promoción, adaptándonos a la idiosincrasia de cada cada región.'
        posts={posts}
      />

      <CategorySection
        title='Consejos y Recursos para Viajeros'
        subtitle='Tu Guía para Viajar por España'
        information='Prepara tu viaje por las distintas regiones españolas con nuestros consejos. Desde equipaje hasta guías de viaje, te proporcionamos la información esencial para una estancia perfecta, ya sea en la playa o la montaña.'
        posts={posts}
      />

      <CategorySection
        title='Trámites y Legislación para Alquileres Vacacionales'
        subtitle='Legalidad y Alquileres en España: Lo Que Necesitas Saber.'
        information='Infórmate sobre los aspectos legales de los alquileres vacacionales en diferentes regiones de España. Desde licencias turísticas hasta normativas locales e impuestos.'
        posts={posts}
      />

      <CategorySection
        title='Tendencias y Evolución del Alquiler Vacacional'
        subtitle='El Futuro del Alquiler Vacacional en España'
        information='Mantente actualizado sobre las tendencias del mercado de alquileres vacacionales en todo el país. Analizamos cómo la tecnología y las preferencias de los clientes están cambiando el sector.'
        posts={posts}
      />

      <PostCardCategories
        filterByCategories={filterByCategories}
        query={query}
        title='Más artículos sobre otros municipios'
        subtitle='Conoce nuevos destinos y un poco sobre sus curiosidades, historia, gastronomía, lugares turísticos mas relevantes.'
      />
    </section>
  );
};
