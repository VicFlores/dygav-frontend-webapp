import { BlogPost } from '@/types';
import React, { FC } from 'react';
import { FaSpinner } from 'react-icons/fa';

export const Post: FC<{ blog: BlogPost }> = ({ blog }) => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-36 flex flex-col items-center'>
      {
        <>
          {Object.keys(blog).length === 0 ? (
            <div className='border border-p600/30 shadow rounded-md px-6 py-10 max-w-sm w-full mx-auto '>
              <div className='animate-pulse flex space-x-4'>
                <div className='rounded-full bg-p600/60 h-10 w-10'></div>
                <div className='flex-1 space-y-6 py-1'>
                  <div className='h-2 bg-p600/60 rounded'></div>
                  <div className='space-y-3'>
                    <div className='grid grid-cols-3 gap-4'>
                      <div className='h-2 bg-p600/60 rounded col-span-2'></div>
                      <div className='h-2 bg-p600/60 rounded col-span-1'></div>
                    </div>
                    <div className='h-2 bg-p600/60 rounded'></div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center space-x-4 mt-6'>
                <FaSpinner className='animate-spin h-5 w-5 text-p400' />
                <span className='text-lg font-medium text-p600'>
                  Cargando...
                </span>
              </div>
            </div>
          ) : (
            <>
              <h1 className='text-3xl font-bold text-center mb-6 border-b-4 border-b-p600 pb-4'>
                {blog.title?.rendered}
              </h1>

              <div
                className='text-justify space-y-4 post flex flex-col items-center'
                dangerouslySetInnerHTML={{ __html: blog.content?.rendered }}
              />
            </>
          )}
        </>
      }
    </section>
  );
};
