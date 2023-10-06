import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Session } from 'next-auth';

interface Props {
  children?: ReactNode;
  title?: string;
  session?: Session | null;
}

export const MainHero: FC<Props> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const images = [
      'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/4_wq4pgw.WebP',
      'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/5_mhpa2f.WebP',
      'https://res.cloudinary.com/vicflores11/image/upload/v1691367762/Dygav/13_qih5tu.WebP',
      'https://res.cloudinary.com/vicflores11/image/upload/v1691367754/Dygav/20_zc0zeu.WebP',
      'https://res.cloudinary.com/vicflores11/image/upload/v1691367753/Dygav/1_j8qeqo.WebP',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  return (
    <div
      className={'w-full bg-center bg-cover bg-no-repeat'}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <>{children}</>
    </div>
  );
};
