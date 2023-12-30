import { BlogMedia, BlogPost, Category } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

export const PostCards: FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const [media, setMedia] = useState<BlogMedia[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getMedia = async () => {
      const filteredPosts = posts.filter((post) => post.featured_media !== 0);
      const mediaPromises = filteredPosts.map((post) =>
        axios.get(
          `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/media/${post.featured_media}`
        )
      );

      const mediaResponses = await Promise.all(mediaPromises);
      setMedia(mediaResponses.map((res) => res.data));
    };

    const getCategories = async () => {
      const filteredPosts = posts.filter((post) => post.featured_media !== 0);
      const categoriesPromises = filteredPosts.map((post) =>
        axios.get(
          `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories/${post.categories[0]}`
        )
      );

      const categoriesResponses = await Promise.all(categoriesPromises);
      setCategories(categoriesResponses.map((res) => res.data));
    };

    getMedia();
    getCategories();
  }, [posts]);

  return (
    <div className='grid lg:grid-cols-2 gap-y-10 md:gap-x-20'>
      {posts
        .filter((post) => post.featured_media !== 0)
        .map((post, index) => {
          const mediaItem = media[index];

          /* const gridStyle =
            index === 0
              ? {
                  gridRowStart: index + 1,
                  gridRowEnd: index + 3,
                  height: 'auto',
                }
              : index % 3 === 0
              ? {
                  gridRowStart: (index / 3) * 2 + 1,
                  gridRowEnd: (index / 3) * 2 + 3,
                  height: 'auto',
                }
              : {}; */

          const category = categories.find(
            (cat) => cat.id === post.categories[0]
          );

          return (
            <div
              key={post.id}
              className={`lg:w-[491px] h-[296px] relative bg-cover bg-center flex flex-col justify-end pl-6 pr-10 pb-2`}
              style={{
                backgroundImage: `url(${mediaItem?.source_url})`,
                /*  ...gridStyle, */
              }}
            >
              <h2 className='py-1 md:py-[6px] rounded-lg bg-p600 w-[136px] text-center text-white mb-3'>
                {category?.name}
              </h2>

              <p className='text-white text-lg lg:text-xl underline'>
                <Link href={`/blog/${post.id}`}>{post.title.rendered}</Link>
              </p>
            </div>
          );
        })}
    </div>
  );
};
