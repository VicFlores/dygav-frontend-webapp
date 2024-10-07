import React from 'react';

type WaitingReservationsOrAccommodationsProps = {
  message: string;
};

const WaitingReservationsOrAccommodations: React.FC<
  WaitingReservationsOrAccommodationsProps
> = ({ message }) => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed md:h-[200px] md:w-[600px] p-10'>
        <p className='text-black900/[.7] lg:text-xl'>{message}</p>
      </div>
    </div>
  );
};

export default WaitingReservationsOrAccommodations;
