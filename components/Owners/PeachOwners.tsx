import React from 'react';

export const PeachOwners = () => {
  return (
    <section className='grid gap-4 mt-24 mb-16 px-12 md:px-28'>
      <p className='text-center text-2xl md:text-3xl lg:text-[34px] text-black700'>
        ¡Descubre Nuestros servicios de <br /> Gestión de Apartamentos
        Vacacionales!
      </p>

      <div className='w-auto text-xs md:text-sm lg:text-lg border-t-4 border-t-p600 pt-5 space-y-4 text-black900 pr-3 pl-3'>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          {`En DYGAV nos especializamos en brindar soluciones integrales para la gestión de apartamentos vacacionales. 
            
            ¿Tu casa de vacaciones se encuentra vacía durante largos periodos? ¡Es hora de sacarle partido económico!
            
            ¡Deja que tu casa de vacaciones trabaje para ti! Rentabiliza tu propiedad mientras no la utilizas y genera ingresos adicionales.`}
        </p>
      </div>
    </section>
  );
};
