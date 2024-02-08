import { PostCards } from './PostCards';
import { useEffect, useState } from 'react';
import { BlogPost, Category } from '@/types';
import axios from 'axios';
import { PostCardCategories } from '..';
import {
  costaBlancaImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';

const Posts = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getAllPost = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100'
      );

      setData(res.data);
    };

    const getAllCategories = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories?per_page=100'
      );

      setCategories(res.data);
    };

    getAllPost();
    getAllCategories();
  }, []);

  const costaBlancaCities = categories.filter((category) =>
    costaBlancaImages.map((city) => city.cityName).includes(category.name)
  );

  const pirineosCities = categories.filter((category) =>
    pirineosAragonImages.map((city) => city.cityName).includes(category.name)
  );

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      <PostCardCategories
        filterByCategories={costaBlancaCities}
        title='Costa Blanca'
        subtitle='Descubre todos nuestros artículos más recientes sobre ocio, gastronomía, destinos, tendencias y normativas sobre alquiler vacacional en la Costa Blanca'
      />

      <PostCardCategories
        filterByCategories={pirineosCities}
        title='Pirineo Aragonés'
        subtitle=''
      />

      <PostCards posts={data} />
    </section>
  );
};

export default Posts;
