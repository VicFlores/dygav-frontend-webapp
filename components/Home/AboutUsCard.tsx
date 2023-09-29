import React from 'react';

export const AboutUsCard = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <div className=' grid lg:grid-cols-3 md:grid-cols-1 gap-10 lg:gap-5 md:gap-8 pt-10 pb-10'>
        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pt-7'>
            <div className='w-full h-[180px] bg-center bg-cover bg-welcomeWorld ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              Bienvenido a <br /> nuestro mundo
            </p>

            <p className='text-black900 text-xs lg:text-sm md:text-sm px-4'>
              Somos una empresa con amplia experiencia en el sector inmobiliario
              y gestión de patrimonio. Entendemos las necesidades y exigencias
              del mercado actual. Nos enorgullecemos de ofrecer soluciones
              integrales enfocadas en maximizar el rendimiento económico de tus
              propiedades vacacionales. Nuestro objetivo es adaptarnos a cada
              cliente para ofrecer un servicio personalizado y de alta calidad.
            </p>
          </div>
        </div>

        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pr-7 pt-7'>
            <div className='w-full h-[180px] bg-center bg-cover bg-digitalAparment ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              Digitaliza tu apartamentos turistico
            </p>

            <p className='text-black900 text-xs lg:text-sm md:text-sm px-4'>
              Mediante la digitalización, optimizamos la gestión de propiedades
              para nuestros clientes. Somos líderes en tecnología para
              apartamentos turísticos, ofreciendo una gestión ágil y segura. Nos
              comprometemos a brindar soluciones innovadoras que mejoren la
              experiencia de los propietarios y maximicen su retorno de
              inversión, creando experiencias únicas para nuestros huéspedes.
            </p>
          </div>
        </div>

        <div className='w-[340px] md:w-[320px] h-auto shadow-md rounded-lg bg-gray border-[1px] border-p600'>
          <div className='px-12 lg:px-7 md:px-10 pr-7 pt-7'>
            <div className='w-full h-[200px] bg-center bg-cover bg-aboutUsAviable ' />
          </div>

          <div className='w-full h-auto pb-7'>
            <p className='text-black700 text-center lg:text-xl md:text-lg px-4 py-4'>
              Siempre disponible <br /> para ti
            </p>

            <p className='text-black900 text-xs lg:text-sm md:text-sm px-4'>
              Nuestro equipo de profesionales expertos tiene un conocimiento
              profundo del sector inmobiliario y de la gestión de patrimonio.
              Ofrecemos un servicio de alta calidad que supera las expectativas
              de nuestros huéspedes. Nuestra flexibilidad nos permite adaptarnos
              a las necesidades específicas de cada propietario, asegurando una
              gestión eficaz y sin complicaciones para todos los involucrados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
