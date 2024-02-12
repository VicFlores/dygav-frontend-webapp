import React from 'react';

export const FormsPolicyDetails = () => {
  return (
    <section className='grid gap-4 mt-24 mb-16 px-12 md:px-28'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-[34px] text-black700 font-semibold'>
        Política de Formularios
      </h1>

      <p className='text-center text-xl md:text-2xl lg:text-lg text-black700'>
        Fecha Efectiva: 25-Dec-2022
      </p>

      <div className='w-auto border-t-4 border-t-p600 pt-5 space-y-8 text-black900 pr-3 pl-3'>
        <h3 className='text-lg md:text-xl lg:text-2xl text-p900 font-semibold'>
          Consentimiento para el tratamiento de datos personales
        </h3>

        <p className='text-sm md:text-lg'>
          Digitalizacion y Gestión de Alquileres Vacacionales S.L. (DYGAV)
        </p>

        <p className='text-sm md:text-lg'>CIF: B56416795</p>

        <p className='text-sm md:text-lg'>
          Avenida Doctor Gregorio Marañón 7, 7-29. Cp: 03181
        </p>

        <p className='text-sm md:text-lg'>Torrevieja. Alicante</p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Fines y legitimación del tratamiento:
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          Mantener una relación comercial (por interés legítimo del responsable,
          art. 6.1.f GDPR) y envío de comunicaciones de productos o servicios
          (con el consentimiento del interesado, art. 6.1.a GDPR).
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Criterios de conservación de los datos:
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          Se conservarán durante no más tiempo del necesario para mantener el
          fin del tratamiento o existan prescripciones legales que dictaminen su
          custodia y cuando ya no sea necesario para ello, se suprimirán con
          medidas de seguridad adecuadas para garantizar la anonimización de los
          datos o la destrucción total de los mismos.
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Comunicación de los datos:
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          no se comunicarán los datos a terceros, salvo obligación legal.
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Derechos que asisten al Usuario:
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          {`- Derecho a retirar el consentimiento en cualquier momento.

            - Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.

            - Derecho a presentar una reclamación ante la Autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.`}
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Datos de contacto para ejercer sus derechos:
        </h4>

        <p className='text-sm md:text-lg whitespace-pre-line'>
          {`Nombre comercial: DYGAV: Digitalización y Gestión de Alquileres Vacacionales

            Denominación social: PACITEL 1980 INVERSIONES Y GESTIÓN S.L.

            NIF: B72732761

            Domicilio social: C/ Orense 18, 9B - 28020 - Madrid

            Teléfono: 634 47 36 81

            E-mail: info@digiclean.es

            Para continuar debe aceptar que ha leído y está conforme con la cláusula anterior.

            Toda persona que acceda a este sitio web se considera usuario y se compromete a cumplir rigurosamente con las disposiciones aquí establecidas, así como con cualquier otra disposición legal que sea aplicable.`}
        </p>

        <p className='text-sm md:text-lg'>
          Digitalizacion y Gestión de Alquileres Vacacionales S.L. (DYGAV)
        </p>

        <p className='text-sm md:text-lg'>CIF: B56416795</p>

        <p className='text-sm md:text-lg'>
          Avenida Doctor Gregorio Marañón 7, 7-29. Cp: 03181
        </p>

        <p className='text-sm md:text-lg'>Torrevieja. Alicante</p>
      </div>
    </section>
  );
};
