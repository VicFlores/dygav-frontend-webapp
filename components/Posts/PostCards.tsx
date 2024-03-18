import { BlogPost, Category } from '@/types';
import { axiosConfig } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

export const PostCards: FC<{
  post: BlogPost;
  favExist: any;
  favIsChanged: boolean;
  setfavIsChanged: Dispatch<SetStateAction<boolean>>;
  setRemovedBlogPost?: Dispatch<SetStateAction<number>>;
}> = ({
  post,
  favExist,
  favIsChanged,
  setfavIsChanged,
  setRemovedBlogPost,
}) => {
  const [categories, setCategories] = useState<Category>({} as Category);

  const { data: session } = useSession();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesPromises = await axios.get(
        `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/categories/${post.categories[0]}`
      );

      setCategories(categoriesPromises.data);
    };

    getCategories();
  }, [post]);

  const handleFavAdd = () => {
    if (session) {
      const addFav = async () => {
        try {
          if (session.user) {
            await axiosConfig.post('/api/favorites/favoriteBlogPosts', {
              userId: session.user._id || session.user.id,
              blogPostId: post.id,
            });

            setfavIsChanged(!favIsChanged);
          }
        } catch (error) {
          console.log(error);
        }
      };

      addFav();
    } else {
      return router.push('/login');
    }
  };

  const handleFavRemove = () => {
    if (session) {
      const removeFav = async () => {
        try {
          if (session.user) {
            await axiosConfig.delete(`/api/favorites/favoriteBlogPosts`, {
              data: {
                userId: session.user._id || session.user.id,
                blogPostId: post.id,
              },
            });

            if (setRemovedBlogPost) {
              setRemovedBlogPost(Number(post.id));
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

      removeFav();

      setfavIsChanged(!favIsChanged);
    } else {
      return router.push('/login');
    }
  };

  const disableFav = favExist.some(
    (fav: any) => Number(fav.blogPostId) === Number(post.id)
  );

  return (
    <div
      key={post.id}
      className={`lg:w-[491px] h-[296px] bg-cover bg-center flex flex-col justify-end pl-6 pr-10 pb-2 relative`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${post.yoast_head_json.og_image[0].url})`,
      }}
    >
      <div className='absolute top-0 right-0 z-10 p-6 text-[30px]'>
        {disableFav ? (
          <FaHeart onClick={handleFavRemove} className='text-p600' />
        ) : (
          <FaRegHeart onClick={handleFavAdd} className='text-white' />
        )}
      </div>

      <h2 className='py-1 md:py-[6px] rounded-lg bg-p600 w-fit p-4 text-center text-white mb-3 text-sm md:text-base'>
        {categories.name}
      </h2>

      <p className='text-white text-lg lg:text-xl underline'>
        <Link href={`/post/${post.slug}`}>{post.title.rendered}</Link>
      </p>
    </div>
  );
};
