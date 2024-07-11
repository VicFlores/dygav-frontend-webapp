import {
  BlogPostCategories,
  Footer,
  HeroLicense,
  Layout,
  MainHero,
  UtilHead,
} from '@/components';
import { BlogPost, Category, TBlogPostsSubCategories } from '@/types';
import { cityData } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

const API_BASE_URL = 'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2';

async function fetchData(url: string) {
  const res = await axios.get(url);
  return res.data;
}

type BlogPostWithSubCategory = BlogPost & {
  subCategoryName: string | null;
};

export default function CitiesPage() {
  const [category, setCategory] = useState<Category>();
  const [posts, setPosts] = useState<BlogPostWithSubCategory[]>([]);
  const [categories, setcategories] = useState<Category[]>([]);
  const { data: session } = useSession();
  const [subCategories, setsubCategories] = useState<TBlogPostsSubCategories[]>(
    []
  );
  const { query } = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchData(
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories?per_page=100'
      );

      setcategories(data);

      const filterByCities = data.filter((category: Category) => {
        if (category.slug === query.cities) {
          return category;
        } else {
          return null;
        }
      });

      setCategory(filterByCities[0]);
    };

    getCategories();
  }, [query]);

  useEffect(() => {
    const getSubCategories = async () => {
      if (category) {
        const data = await fetchData(
          `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories?parent=${category.id}`
        );
        setsubCategories(data);
      }
    };

    getSubCategories();
  }, [category]);

  useEffect(() => {
    const getPosts = async () => {
      if (subCategories) {
        const urls = [
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=1',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=2',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=3',
          'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100&page=4',
        ];

        Promise.all(
          urls.map((url) => fetch(url).then((response) => response.json()))
        )
          .then((data) => {
            const allPosts = [].concat(...data);
            setPosts(allPosts);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    };

    getPosts();
  }, [subCategories]);

  const postsBySubCategoriesAndCategories = useMemo(() => {
    return posts
      .filter(
        (post: BlogPost) =>
          subCategories.some((subCategory) =>
            post.categories.includes(subCategory.id)
          ) && post.categories.includes(Number(category?.id))
      )
      .map((post: BlogPost) => {
        const subCategory = subCategories.find((subCategory) =>
          post.categories.includes(subCategory.id)
        );
        return {
          ...post,
          subCategoryName: subCategory ? subCategory.name : null,
        };
      });
  }, [posts, subCategories, category]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filterByCategories = useMemo(
    () => categories.filter((category) => category.parent === 0),
    [categories]
  );

  function capitalizeFirstLetterOfEachWord(str: string) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  let formattedCityName = '';

  if (typeof query?.cities === 'string') {
    formattedCityName = query.cities.replace(/-/g, ' ');
  } else if (Array.isArray(query?.cities)) {
    formattedCityName = query.cities.join(' ').replace(/-/g, ' ');
  }

  const capitalizedCityName =
    capitalizeFirstLetterOfEachWord(formattedCityName);

  return (
    <>
      <UtilHead
        title={
          query?.cities
            ? `Dygav Blog ${capitalizeFirstLetter(capitalizedCityName)}`
            : 'Dygav Blog'
        }
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title={
              cityData[capitalizedCityName]?.title ||
              `Blog en ${capitalizedCityName}`
            }
            subtitle={
              cityData[capitalizedCityName]?.subtitle ||
              `Disfurta de nuestros articulos en ${capitalizedCityName}`
            }
          />
        </Layout>
      </MainHero>

      <BlogPostCategories
        posts={postsBySubCategoriesAndCategories}
        query={query}
        filterByCategories={filterByCategories}
      />

      <Footer />
    </>
  );
}
