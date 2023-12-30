import {
  BlogPostCategories,
  Footer,
  HeroLicense,
  Layout,
  MainHero,
  PostCardCategories,
  UtilHead,
} from '@/components';
import { BlogPost, Category, TBlogPostsSubCategories } from '@/types';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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
        'https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories'
      );

      setcategories(data);

      const filterByCities = data.filter((category: Category) => {
        if (category.name.toLowerCase() === query.cities) {
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
        const data = await fetchData(
          `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts?per_page=100`
        );
        setPosts(data);
      }
    };

    getPosts();
  }, [subCategories]);

  const postsBySubCategoriesAndCategories = posts
    .filter((post: BlogPost) => {
      return (
        subCategories.some((subCategory) =>
          post.categories.includes(subCategory.id)
        ) && post.categories.includes(Number(category?.id))
      );
    })
    .map((post: BlogPost) => {
      const subCategory = subCategories.find((subCategory) =>
        post.categories.includes(subCategory.id)
      );
      return {
        ...post,
        subCategoryName: subCategory ? subCategory.name : null,
      };
    });

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filterByCategories = categories.filter(
    (category) => category.parent === 0
  );

  return (
    <>
      <UtilHead
        title={
          query?.cities
            ? `Dygav Blog ${capitalizeFirstLetter(query.cities as string)}`
            : 'Dygav Blog'
        }
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title={
              query?.cities
                ? `${capitalizeFirstLetter(query.cities as string)}`
                : 'Dygav Blog'
            }
            subtitle='Ahora el descubre el nuevo blog de Dygav'
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
