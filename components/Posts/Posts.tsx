import { PostCards } from './PostCards';
import { useEffect, useState } from 'react';
import { BlogPost, Category } from '@/types';
import axios from 'axios';
import Link from 'next/link';

const Posts = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getAllPost = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts'
      );

      setData(res.data);
    };

    const getAllCategories = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories'
      );

      setCategories(res.data);
    };

    getAllPost();
    getAllCategories();
  }, []);

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      <PostCards posts={data.slice(0, 3)} />

      <h2 className='mt-24 text-2xl md:text-4xl font-semibold'>Categorias</h2>

      <p className='mt-6 text-base md:text-lg text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className='mt-24 w-full px-10 mb-24'>
        <div className='flex items-center space-x-14 overflow-auto overflow-x-visible scrollbar pb-8'>
          {categories.map((category, index) => (
            <p
              key={index}
              className='text-xl md:text-3xl border-b-[3px] border-b-p600 whitespace-nowrap'
            >
              <Link href={category.link} target='_blanck'>
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>

      <PostCards posts={data} />
    </section>
  );
};

export default Posts;
