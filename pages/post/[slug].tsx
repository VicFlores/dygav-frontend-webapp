import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  Post,
} from '@/components';
import { BlogPost, TSession } from '@/types';
import { cityData, getUserFromCookies } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PostsCardsCarrusel } from '../../components/Licenses/PostsCardsCarrusel';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user: user || null,
    },
  };
};

const BlogPage = ({ user }: { user: TSession }) => {
  const [data, setData] = useState<BlogPost>({} as BlogPost);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [cityName, setCityName] = useState<string | undefined>();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router.query.slug) {
      const getPosts = async () => {
        const urls = [
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=1',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=2',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=3',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=4',
        ];

        try {
          const data = await Promise.all(
            urls.map((url) => axios.get(url).then((response) => response.data))
          );

          const allPosts = [].concat(...data);

          const filterPosts = allPosts.filter((post: BlogPost) => {
            return post.slug === router.query.slug;
          })[0];

          setData(filterPosts);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const nameOfCity = cityNames.find((city) =>
        data.title?.rendered.includes(city)
      );

      setCityName(nameOfCity);

      getPosts();
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

  const cityNames = ['Pola', 'Alicante', 'Benidorm', 'Torrevieja', 'Elche'];

  const cityInfo = cityName ? cityData[cityName] : cityData['Elche'];

  return (
    <>
      <UtilHead
        title='Dygav Blog'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout user={user}>
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
            title={`Más artículos sobre ${
              cityName === 'Pola' ? 'Santa Pola' : cityName
            }`}
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
