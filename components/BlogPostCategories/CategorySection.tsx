import { BlogPost } from '@/types';
import moment from 'moment';
import Image from 'next/legacy/image';
import React, { FC, useRef } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

type BlogPostWithSubCategory = BlogPost & {
  subCategoryName: string | null;
};

type CategorySectionProps = {
  title: string;
  subtitle: string;
  posts: BlogPostWithSubCategory[];
};

export const CategorySection: FC<CategorySectionProps> = ({
  title,
  subtitle,
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

  const defaultImage =
    'https://res.cloudinary.com/vicflores11/image/upload/v1703948850/Dygav/undraw_publish_article_re_3x8h_w41fes.svg';

  return (
    <>
      <h2 className='mt-0 md:mt-10 text-2xl md:text-4xl font-semibold text-center'>
        {title}
      </h2>

      <p className='mt-6 text-base md:text-lg text-justify'>{subtitle}</p>

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
            {posts.filter((post) => post.subCategoryName === title).length >
            0 ? (
              posts
                .filter((post) => post.subCategoryName === title)
                .map((post) => (
                  <div key={post.id}>
                    <div
                      className='flex flex-col justify-end min-w-[300px] min-h-[350px]  md:min-w-[494px] md:h-[296px] border-2 border-p600 rounded-xl px-6 pb-6 space-y-2 text-white'
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${post.yoast_head_json.og_image[0].url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <p>{post.title.rendered}</p>
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
