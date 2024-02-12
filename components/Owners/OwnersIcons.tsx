import Image from 'next/legacy/image';
import React, { FC } from 'react';

export const OwnersIcons: FC<{
  image: string;
  customWidth?: string;
  customHeigth?: string;
}> = ({ image, customHeigth, customWidth }) => {
  return (
    <figure
      className='relative w-52 h-52 md:w-96 md:h-96 self-center'
      style={{
        width: customWidth ?? customWidth,
        height: customHeigth ?? customHeigth,
      }}
    >
      <Image src={image} alt='Dygav icon' layout='fill' />
    </figure>
  );
};
