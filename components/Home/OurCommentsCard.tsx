import Image from 'next/legacy/image';
import React from 'react';

const userInfo = [
  {
    headerTitle: 'nadine fernandez',
    headerSubtitle: 'Comentario desde Google',
    comment:
      'Desde el minuto uno fueron increíbles, gran cercanía y profesionalidad. Sabía que mi vivienda estaría en buenas manos con ellos, ahora no me tengo que preocupar de nada a la hora de alquilar mi vivienda, Dygav se encarga de todo. Lo recomiendo al 100%.',
    path: 'https://lh3.googleusercontent.com/a-/ALV-UjXxn0pYb5y9EG0uiIJfaI-Ao85QA6Bjn4H1WsGyPmtoNCE=w75-h75-p-rp-mo-br100',
  },
  {
    headerTitle: 'ramon cervera',
    headerSubtitle: 'Comentario desde Google',
    comment:
      'Espectacular todo, lo recomiendo 100%',
    path: 'https://lh3.googleusercontent.com/a/ACg8ocLCMzHcgxL3MS8ZlQHK9YtGrGd7RBjzExTAosceiiih=w75-h75-p-rp-mo-ba2-br100',
  },
  {
    headerTitle: 'carmen murciano',
    headerSubtitle: 'Comentario desde Google',
    comment:
      'Estuvimos en el apartamento de Bernabeu y la verdad que la ubicación perfecta, todo muy limpio y las vistas una maravilla 😍',
    path: 'https://lh3.googleusercontent.com/a/ACg8ocJGBMVxINp7JqM52Oz4fNli-i6dE7d8omk4l-qhHtgj=w75-h75-p-rp-mo-br100',
  },
];

export const OurCommentsCard = () => {
  return (
    <div className='flex lg:items-center mt-2 lg:justify-center pb-6 overscroll-x-contain overflow-y-hidden'>
      <div className='flex space-x-6 mx-4 px-5 lg:px-0 lg:mx-0 border-t-4 border-t-p600 pt-10 md:pt-14'>
        {userInfo.map((item, index) => (
          <div
            className='w-[350px] h-auto border-[1px] border-l-[3px] border-p600 overflow-hidden'
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
                  layout='fill'
                  className='rounded-full'
                />
              </div>
              <div>
                <p className='text-black700 text-[18px] lg:text-[22px] md:text-[20px]'>
                  {item.headerTitle}
                </p>
                <p className='text-black900 text-[14px] lg:text-[15px] md:text-[13px]'>
                  {item.headerSubtitle}
                </p>
              </div>
            </div>

            <div
              className='border-t-2 border-y-p600 p-4 text-[12px] lg:text-base md:text-[15px]'
              id='CardBody'
            >
              <h4>{item.comment}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
