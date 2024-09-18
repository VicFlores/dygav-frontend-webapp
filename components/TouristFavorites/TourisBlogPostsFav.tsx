import { axiosConfig } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { PostCards } from '../Posts/PostCards';
import useDictionary from '@/app/hooks/useDictionary';

export const TourisBlogPostsFav = () => {
  const [favsBlogPosts, setFavsBlogPosts] = useState([]);
  const [favExist, setFavExist] = useState([]);
  const [removedBlogPost, setRemovedBlogPost] = useState(0);
  const [favIsChanged, setfavIsChanged] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const findFavBlogPostsById = async () => {
      if (session && session.user) {
        const res = await axiosConfig.get(
          `/api/favorites/findFavBlogPostsByUserId?userId=${
            session.user._id || session.user.id
          }`
        );

        res.data.map(async (item: any) => {
          const resBlogPost = await axios.get(
            `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts/${item.blogPostId}/`
          );

          if (resBlogPost.data.id === Number(item.blogPostId)) {
            setFavsBlogPosts((prev: any) => {
              const favExists = prev.some(
                (prevFav: any) => prevFav.id === resBlogPost.data.id
              );

              if (!favExists) {
                return [...prev, resBlogPost.data];
              }

              return prev;
            });
          }
        });
      }
    };

    findFavBlogPostsById();
  }, [session]);

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

  useEffect(() => {
    if (removedBlogPost !== 0) {
      setFavsBlogPosts((prev: any) =>
        prev.filter((item: any) => item.id !== removedBlogPost)
      );
    }
  }, [removedBlogPost]);

  const dictionary = useDictionary('favorites');

  return (
    <div className='px-8 space-y-12 mb-24'>
      {favsBlogPosts.length > 0 ? (
        <div className='grid md:grid-cols-2 place-items-center gap-y-10'>
          {favsBlogPosts.map((post: any) => (
            <PostCards
              key={post.id}
              post={post}
              favExist={favExist}
              favIsChanged={favIsChanged}
              setfavIsChanged={setfavIsChanged}
              setRemovedBlogPost={setRemovedBlogPost}
            />
          ))}
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              {dictionary.favorites?.empty}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
