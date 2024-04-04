import { Category } from '@/types';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import {
  generalImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';
type TPostCardCategoriesProps = {
  filterByCategories: Category[];
  query?: ParsedUrlQuery;
  title: string;
  subtitle: string;
};

export const PostCardCategories: FC<TPostCardCategoriesProps> = ({
  filterByCategories,
  query,
  title,
  subtitle,
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

  const transformedGeneralImages = [
    ...generalImages,
    {
      slug: 'madrid',
      cityName: 'Madrid',
      bgCity:
        'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649256/Dygav%20Images/Mix/15_kfihjl_pdaort.png',
    },
  ];

  const transformedPirineosAragonImages = [
    ...pirineosAragonImages,
    {
      slug: 'valle-de-tena',
      cityName: 'Valle de Tena',
      bgCity:
        'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649803/Dygav%20Images/Biescas/C_41_cgoedm_smmvpl.jpg',
    },
  ];

  return (
    <>
      <h2 className='mt-0 md:mt-10 text-2xl md:text-4xl text-center pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        {title}
      </h2>

      <p className='mt-4 text-base md:text-lg text-center lg:text-xl'>
        {subtitle}
      </p>

      <div className='mt-16 w-full md:px-10 mb-24'>
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
            {filterByCategories.map((category, index) => {
              const imageObj =
                transformedGeneralImages.find(
                  (img) => img.slug === category.slug
                ) ||
                transformedPirineosAragonImages.find(
                  (img) => img.slug === category.slug
                );

              const imageUrl = imageObj ? imageObj.bgCity : '';

              return query ? (
                query.cities !== category.slug && (
                  <div key={index}>
                    <Link href={`/blog/${category.slug}`}>
                      <div
                        className='w-60 h-80 md:w-70 md:h-80 flex items-end rounded-xl'
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        <p className='text-xl md:text-2xl text-white pl-6 pb-4 overflow-hidden text-overflow-ellipsis max-w-xs'>
                          {category.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              ) : (
                <div key={index}>
                  <Link href={`/blog/${category.slug}`}>
                    <div
                      className='w-60 h-80 md:w-70 md:h-80 flex items-end rounded-xl'
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <p className='text-xl md:text-2xl text-white pl-6 pb-4 overflow-hidden text-overflow-ellipsis max-w-xs'>
                        {category.name}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
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
