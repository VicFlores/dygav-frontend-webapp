import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699488277/Dygav/Alicante/Licencias_Tur%C3%ADsticas__Ayuntamiento_de_Alicante_nn3dun.webp',
    alt: 'Licencias turísticas: Ayuntamiento de Alicante',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699488555/Dygav/Alicante/4_zlt2r6.webp',
    alt: 'Licencias turísticas: Alicante Ciudad',
  },
];

export const FormigalMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Formigal
      </h1>
    </section>
  );
};
