import { PostCards } from './PostCards';
import { useEffect, useState } from 'react';
import { BlogPost, Category } from '@/types';
import axios from 'axios';
import { PostCardCategories } from '..';
import {
  generalImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';
import { useSession } from 'next-auth/react';
import { axiosConfig } from '@/utils';
import useDictionary from '@/app/hooks/useDictionary';

const Posts = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [favExist, setFavExist] = useState([]);
  const [favIsChanged, setfavIsChanged] = useState(false);
  const { data: session } = useSession();

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

  useEffect(() => {
    const getBlogPostByUserId = async () => {
      try {
        if (session && session.user) {
          const res = await axiosConfig.get(
            `/api/favorites/findFavBlogPostsByUserId?userId=${
              session.user._id || session.user.id
            }`
          );

          setFavExist(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlogPostByUserId();
  }, [favIsChanged, session]);

  function filterCities(images: any[], categories: any[]) {
    const cityNames = images.map((city: { cityName: any }) => city.cityName);
    return categories.filter((category: { name: any }) =>
      cityNames.includes(category.name)
    );
  }

  const transformedGeneralImages = [...generalImages];

  const costaBlancaCities = filterCities(transformedGeneralImages, categories);

  const transformedPirineosAragonImages = [
    ...pirineosAragonImages,
    {
      slug: 'valle-de-tena',
      cityName: 'Valle de Tena',
      bgCity:
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/C_41_cgoedm-scaled.jpg',
    },
  ];

  const pirineosCities = filterCities(
    transformedPirineosAragonImages,
    categories
  );

  const transformedMadridImages = [
    {
      slug: 'madrid',
      cityName: 'Madrid',
      bgCity:
        'https://multimedia.dygav.es/wp-content/uploads/2024/04/15_kfihjl.png',
    },
  ];

  const madridCities = filterCities(transformedMadridImages, categories);

  const dictionary: any = useDictionary('blog');

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
      <PostCardCategories
        filterByCategories={costaBlancaCities}
        title='Costa Blanca'
        subtitle={dictionary.posts?.costaBlancaSubtitle}
      />

      <PostCardCategories
        filterByCategories={pirineosCities}
        title='Pirineo Aragonés'
        subtitle={dictionary.posts?.pirioneoSubtitle}
      />

      <PostCardCategories
        filterByCategories={madridCities}
        title='Madrid'
        subtitle={dictionary.posts?.madridSubtitle}
      />

      <div className='grid lg:grid-cols-2 gap-y-10 md:gap-x-20'>
        {data

          .filter((post) => post.featured_media !== 0)
          .map((post) => (
            <PostCards
              key={post.id}
              post={post}
              favExist={favExist}
              favIsChanged={favIsChanged}
              setfavIsChanged={setfavIsChanged}
            />
          ))}
      </div>
    </section>
  );
};

export default Posts;
