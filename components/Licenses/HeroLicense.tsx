import React, { FC } from 'react';

type Props = {
  title: string;
  subtitle: string;
};

export const HeroLicense: FC<Props> = ({ title, subtitle }) => {
  return (
    <section className='text-white px-[66px] pb-48 pt-20 space-y-4'>
      <h1 className='lg:text-[45px] text-center md:text-start text-[30px] md:text-[38px] font-semibold'>
        {title}
      </h1>
      <h3 className='text-xl lg:text-[27px] md:text-[22px] font-semibold text-center lg:text-start'>
        {subtitle}
      </h3>
    </section>
  );
};
