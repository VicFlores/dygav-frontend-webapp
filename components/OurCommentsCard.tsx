import Image from 'next/image';
import React from 'react';

const userInfo = [
  {
    headerTitle: 'Card Title',
    headerSubtitle: 'Comment from Google',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sitac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    path: 'https://res.cloudinary.com/vicflores11/image/upload/v1667669217/frontend-utec-timestamp/pexels-photo-2467392_xvfn2a.webp',
  },
  {
    headerTitle: 'Card Title',
    headerSubtitle: 'Comment from Google',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sitac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    path: 'https://res.cloudinary.com/vicflores11/image/upload/v1667669217/frontend-utec-timestamp/pexels-photo-2467392_xvfn2a.webp',
  },
  {
    headerTitle: 'Card Title',
    headerSubtitle: 'Comment from Google',
    comment:
      'Lorem ipsum dolor sit amet consectetur. Aliquam quisque tortor sitac. Ante dolor ultrices dapibus ullamcorper condimentum.',
    path: 'https://res.cloudinary.com/vicflores11/image/upload/v1667669217/frontend-utec-timestamp/pexels-photo-2467392_xvfn2a.webp',
  },
];

export const OurCommentsCard = () => {
  return (
    <div className='flex lg:items-center mt-2 lg:justify-center lg:p-0 md:p-6 md:overscroll-x-contain md:overflow-y-hidden'>
      <div className='flex space-x-6 border-t-4 border-t-p600 pt-14'>
        {userInfo.map((item, index) => (
          <div
            className='w-[350px] h-auto border-2 border-l-4 border-p600 md:overflow-hidden '
            id='CardContainer'
            key={index}
          >
            <div
              className='flex items-center justify-center space-x-6 pt-5 pb-5'
              id='CardHeader'
            >
              <div className='h-16 w-16 relative'>
                <Image
                  src={item.path}
                  alt={item.headerTitle}
                  layout='fill' // required
                  objectFit='' // change to suit your needs
                  className='rounded-full' // just an example
                />
              </div>
              <div>
                <p className='text-black700 text-[22px]'>{item.headerTitle}</p>
                <p className='text-black900 text-[15px]'>
                  {item.headerSubtitle}
                </p>
              </div>
            </div>

            <div className='border-t-2 border-y-p600   p-4' id='CardBody'>
              <h4>{item.comment}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
