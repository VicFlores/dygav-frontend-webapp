import { BlogPost } from '@/types';
import moment from 'moment';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

type CategorySectionProps = {
  title: string;
  posts: BlogPost[];
};

const defaultImage =
  'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_publish_article_re_3x8h_w41fes.svg';

export const PostsCardsCarrusel: FC<CategorySectionProps> = ({
  title,
  posts,
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 300;
    }
  };

  return (
    <>
      <h2 className='text-2xl md:text-3xl text-center pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        {title}
      </h2>

      <div className='mt-20 w-full md:px-10 mb-16'>
        <div className='flex items-center justify-center md:space-x-14 overflow-auto overflow-x-visible pb-8'>
          <button
            onClick={scrollLeft}
            className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
          >
            <AiOutlineArrowLeft />
          </button>

          <div
            ref={scrollContainer}
            className='w-auto h-auto items-center pb-8 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar'
          >
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id}>
                  <div
                    className='flex flex-col justify-end min-w-[300px] min-h-[350px]  md:min-w-[494px] md:h-[296px] rounded-xl px-6 pb-6 space-y-2 text-white'
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${post.yoast_head_json.og_image[0].url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <p className='underline'>
                      <Link href={`/post/${post.slug}`}>
                        {post.title.rendered}
                      </Link>
                    </p>
                    <p>{moment(post.date).format('D MMMM, YYYY')}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <div className='flex flex-col justify-center items-center min-w-[300px] min-h-[350px]  md:min-w-[494px] md:h-[296px] border-2 border-p600 rounded-xl text-p600'>
                  <figure className='relative w-52 h-52 md:w-60 md:h-60 m-auto'>
                    <Image src={defaultImage} layout='fill' priority />
                  </figure>

                  <p className='pb-6 text-center px-4'>
                    Estamos trabajando para entregarte nuevos articulos
                  </p>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={scrollRight}
            className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};
