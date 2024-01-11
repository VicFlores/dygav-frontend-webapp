import { BlogPost } from '@/types';
import React, { FC } from 'react';

export const Post: FC<{ blog: BlogPost }> = ({ blog }) => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-36 flex flex-col items-center'>
      {
        <>
          <h1 className='text-3xl font-bold text-center mb-6'>
            {blog.title?.rendered}
          </h1>

          <div
            className='text-justify space-y-4 post'
            dangerouslySetInnerHTML={{ __html: blog.content?.rendered }}
          />
        </>
      }
    </section>
  );
};
