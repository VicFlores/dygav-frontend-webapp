import { PostCards } from './PostCards';
import { useEffect, useState } from 'react';
import { BlogPost, Category } from '@/types';
import axios from 'axios';

const images = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1699488275/Dygav/Alicante/4_qzdyhb.webp',
  'https://res.cloudinary.com/vicflores11/image/upload/v1699567156/Dygav/Benidorm/Copia_de_2_doz1la.webp',
  'https://res.cloudinary.com/vicflores11/image/upload/v1697903686/Dygav/torrevieja/2_jvslgl.webp',
];

const Posts = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();

  useEffect(() => {
    const getAllPost = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts'
      );

      setData(res.data);
    };

    const getAllCategories = async () => {
      const res = await axios.get(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories?parent=12'
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
            <div
              key={index}
              onClick={() => setSelectedCategory(category.id)}
              className='border-p600 border-2 lg:min-w-[363px] h-[432px] flex items-end rounded-2xl hover:cursor-pointer'
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className='text-xl md:text-3xl whitespace-nowrap text-white pl-4 pb-4'>
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PostCards posts={data} selectedCategory={selectedCategory} />
    </section>
  );
};

export default Posts;
