import React, { FC, ReactNode, useEffect, useState } from 'react';

interface Props {
  children?: ReactNode;
  images?: string[];
}

export const MainHero: FC<Props> = ({
  children,
  images = [
    'https://multimedia.dygav.es/wp-content/uploads/2024/04/4_wq4pgw.png',
    'https://multimedia.dygav.es/wp-content/uploads/2024/04/5_mhpa2f.png',
    'https://multimedia.dygav.es/wp-content/uploads/2024/04/13_qih5tu.png',
    'https://multimedia.dygav.es/wp-content/uploads/2024/04/20_zc0zeu.png',
    'https://multimedia.dygav.es/wp-content/uploads/2024/04/1_j8qeqo.png',
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
