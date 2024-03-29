import React, { FC, ReactNode, useEffect, useState } from 'react';

interface Props {
  children?: ReactNode;
  images?: string[];
}

export const MainHero: FC<Props> = ({
  children,
  images = [
    'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649260/Dygav%20Images/Mix/4_wq4pgw_kzzpp6.png',
    'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649257/Dygav%20Images/Mix/5_mhpa2f_emcqe5.png',
    'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649258/Dygav%20Images/Mix/13_qih5tu_weuree.png',
    'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649263/Dygav%20Images/Mix/20_zc0zeu_jacvck.png',
    'https://res.cloudinary.com/dr9x3bjqy/image/upload/v1711649263/Dygav%20Images/Mix/1_j8qeqo_kr6jg8.png',
  ],
}) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
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
