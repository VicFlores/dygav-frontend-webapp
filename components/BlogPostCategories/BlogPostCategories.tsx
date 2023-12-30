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
}> = ({ posts, query, filterByCategories }) => (
  <section className='mt-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
    <CategorySection
      title='Destinos turísticos'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      posts={posts}
    />

    <CategorySection
      title='Gastronomía Local'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      posts={posts}
    />

    <CategorySection
      title='Gestión de Alquileres Vacacionales'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      posts={posts}
    />

    <CategorySection
      title='Guías de viaje'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      posts={posts}
    />

    <CategorySection
      title='Ocio y Entretenimiento'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.'
      posts={posts}
    />

    <PostCardCategories
      filterByCategories={filterByCategories}
      query={query}
      title='Más artículos sobre otros municipios'
      subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    />
  </section>
);
