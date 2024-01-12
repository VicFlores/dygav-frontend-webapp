import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { FC } from 'react';

export const LicencesIcons: FC<{ image: string }> = ({ image }) => {
  return (
    <div className='mt-16 mb-10 px-10 py-10 md:py-5'>
      <figure className='h-44 w-44 md:h-60 md:w-60 lg:h-56 lg:w-96 relative m-0'>
        <Image
          src={`${image}`}
          alt={'Map Logo'}
          layout='fill'
          className='rounded-full'
        />
      </figure>
    </div>
  );
};
