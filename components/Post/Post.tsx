import { BlogPost } from '@/types';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

export const Post: FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<BlogPost>({} as BlogPost);

  useEffect(() => {
    if (id) {
      const getOnePost = async () => {
        const res = await axios.get(
          `https://dygav-wordpress.app.bigital.es/wp-json/wp/v2/posts/${id}`
        );

        setData(res.data);
      };

      getOnePost();
    }
  }, [id]);

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-36 flex flex-col items-center'>
      {
        <>
          <h1 className='text-3xl font-bold text-center mb-6'>
            {data.title?.rendered}
          </h1>

          <div
            className='text-justify space-y-4 post'
            dangerouslySetInnerHTML={{ __html: data.content?.rendered }}
          />
        </>
      }
    </section>
  );
};
