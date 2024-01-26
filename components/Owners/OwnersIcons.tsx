import Image from 'next/legacy/image';
import React, { FC } from 'react';

export const OwnersIcons: FC<{ image: string }> = ({ image }) => {
  return (
    <figure className='relative w-52 h-52 md:w-96 md:h-96 self-center'>
      <Image src={image} alt='' layout='fill' />
    </figure>
  );
};
