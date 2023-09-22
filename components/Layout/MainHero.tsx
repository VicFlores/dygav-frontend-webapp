import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Session } from 'next-auth';

const imagenes = [
  'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/4_wq4pgw.png',
  'https://res.cloudinary.com/vicflores11/image/upload/v1691367769/Dygav/5_mhpa2f.png',
  'https://res.cloudinary.com/vicflores11/image/upload/v1691367762/Dygav/13_qih5tu.png',
];

interface Props {
  children?: ReactNode;
  title?: string;
  session?: Session | null;
}

export const MainHero: FC<Props> = ({ children }) => {
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexImage === imagenes.length - 1) {
        setIndexImage(0);
      } else {
        setIndexImage(indexImage + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [indexImage]);

  return (
    <div
      className={'w-full bg-center bg-cover bg-no-repeat'}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${imagenes[indexImage]})`,
      }}
    >
      <>{children}</>
    </div>
  );
};
