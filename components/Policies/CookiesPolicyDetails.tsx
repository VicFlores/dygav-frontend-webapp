import Link from 'next/link';
import React from 'react';

export const CookiesPolicyDetails = () => {
  return (
    <section className='grid gap-4 mt-24 mb-16 px-12 md:px-28'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-[34px] text-black700 font-semibold'>
        Política de Cookies
      </h1>

      <p className='text-center text-xl md:text-2xl lg:text-lg text-black700'>
        Fecha Efectiva: 22-Dec-2022 hasta 06-Jun-2023
      </p>

      <div className='w-auto border-t-4 border-t-p600 pt-5 space-y-8 text-black900 pr-3 pl-3'>
        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          ¿Qué Son las Cookies?
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          {`Esta Política de cookies explica qué son las cookies y cómo las utilizamos, los tipos de cookies que utilizamos, es decir, la información que recopilamos mediante las cookies y cómo se utiliza esa información, y cómo administrar la configuración de las cookies.

            Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas piezas de información. Se almacenan en tu dispositivo cuando el sitio web se carga en tu navegador.

            Estas cookies nos ayudan a que el sitio web funcione correctamente, a que sea más seguro, a proporcionar una mejor experiencia de usuario y a comprender cómo funciona el sitio web y a analizar qué funciona y dónde necesita mejoras.`}
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          ¿Cómo Usamos las Cookies?
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          {`Al igual que la mayoría de los servicios en línea, nuestro sitio web utiliza cookies de primeros y terceros para varios fines.

            Las cookies de primeros son principalmente necesarias para que el sitio web funcione correctamente y no recopilan ninguno de tus datos personales identificables.

            Las cookies de terceros utilizadas en nuestro sitio web se utilizan principalmente para comprender cómo funciona el sitio web, cómo interactúas con nuestro sitio web, mantener nuestros servicios seguros, proporcionar anuncios relevantes para ti y, en general, brindarte una experiencia de usuario mejorada y ayudar a acelerar tus interacciones futuras con nuestro sitio web.`}
        </p>

        <h4 className='text-sm md:text-base lg:text-xl text-p800'>
          Configuracion Preferencias de Cookies
        </h4>
        <p className='text-sm md:text-lg whitespace-pre-line'>
          Puedes cambiar la configuración de tu navegador para bloquear/eliminar
          las cookies. A continuación, se enumeran los enlaces a los documentos
          de soporte sobre cómo gestionar y eliminar las cookies de los
          principales navegadores web.
        </p>

        <ul className='text-p600 space-x-6 text-sm md:text-base lg:text-lg underline'>
          <Link
            href='https://support.google.com/accounts/answer/32050?hl=es'
            target='_blank'
          >
            Chrome
          </Link>

          <Link
            href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'
            target='_blank'
          >
            Safari
          </Link>

          <Link
            href='https://support.mozilla.org/es/kb/Borrar%20cookies'
            target='_blank'
          >
            Firefox
          </Link>

          <Link
            href='https://support.microsoft.com/es-es/topic/c%C3%B3mo-eliminar-archivos-de-cookies-en-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc'
            target='_blank'
          >
            Internet Explorer
          </Link>
        </ul>

        <p className='text-sm md:text-lg whitespace-pre-line'>
          Si estás utilizando otro navegador web, visita los documentos de
          soporte oficiales de tu navegador.
        </p>
      </div>
    </section>
  );
};
