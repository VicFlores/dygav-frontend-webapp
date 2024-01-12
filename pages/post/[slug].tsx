import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  Post,
} from '@/components';
import { BlogPost } from '@/types';
import { cityData } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PostsCardsCarrusel } from '../../components/Licenses/PostsCardsCarrusel';

const BlogPage = () => {
  const [data, setData] = useState<BlogPost>({} as BlogPost);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [cityName, setCityName] = useState<string | undefined>();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      const getOnePost = async () => {
        const res = await axios.get(
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100'
        );

        const filterPosts = res.data.filter((post: BlogPost) => {
          return post.slug === router.query.slug;
        })[0];

        setData(filterPosts);
      };

      const nameOfCity = cityNames.find((city) =>
        data.title?.rendered.includes(city)
      );

      setCityName(nameOfCity);

      getOnePost();
    }
  }, [router.query.slug, data.title?.rendered]);

  useEffect(() => {
    if (cityName !== undefined) {
      const getPosts = async () => {
        const res = await axios.get(
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100'
        );

        const filterPosts = res.data.filter((post: BlogPost) => {
          return post.title.rendered.includes(cityName);
        });

        setPosts(filterPosts);
      };

      getPosts();
    }
  }, [cityName]);

  const cityNames = [
    'Santa Pola',
    'Alicante',
    'Benidorm',
    'Torrevieja',
    'Elche',
  ];

  const cityInfo = cityName ? cityData[cityName] : cityData['Elche'];

  return (
    <>
      <UtilHead
        title='Dygav Blog'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title={cityInfo?.title || 'Dygav Blog'}
            subtitle={
              cityInfo?.subtitle || 'Ahora el descubre el nuevo blog de Dygav'
            }
          />
        </Layout>
      </MainHero>

      <Post blog={data} />

      {posts.length > 0 ? (
        <section className='mt-16 mb-16 px-6 md:px-12 lg:px-28 flex flex-col items-center'>
          <PostsCardsCarrusel
            title={`Nuestros artículos relacionados a ${cityName}`}
            posts={posts.slice(0, 4)}
          />
        </section>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};

export default BlogPage;
