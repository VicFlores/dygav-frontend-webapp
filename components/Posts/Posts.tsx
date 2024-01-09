import { PostCards } from './PostCards';
import { useEffect, useState } from 'react';
import { BlogPost, Category } from '@/types';
import axios from 'axios';
import { PostCardCategories } from '..';

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
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories?per_page=50'
      );

      setCategories(res.data);
    };

    getAllPost();
    getAllCategories();
  }, []);

  const filterByCategories = categories.filter(
    (category) => category.parent === 0
  );

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      <PostCardCategories
        filterByCategories={filterByCategories}
        title='Categorias'
        subtitle='Descubre nuevos destinos'
      />

      <PostCards posts={data} />
    </section>
  );
};

export default Posts;
