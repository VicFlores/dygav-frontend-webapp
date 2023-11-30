import Link from 'next/link';
import React from 'react';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699646545/Dygav/Orihuela/Copia_de_7_xhahz0.webp',
    alt: 'Licencias turísticas: Playa de Orihuela y Orihuela Costa',
  },
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1699646542/Dygav/Orihuela/Copia_de_8_um5yze.webp',
    alt: 'Licencias turísticas: Orihuela y Orihuela Costa casas',
  },
];

export const OrihuelaOrihuelaCostaInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Orihuela y Orihuela Costa
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          En el vibrante mosaico que forman los núcleos poblacionales de
          Orihuela Costa, desde el encanto de Cabo Roig hasta la vitalidad de
          Playa Flamenca, pasando por la exclusividad de Campoamor y la belleza
          natural de Mil Palmeras, se esconde{' '}
          <strong>un potencial inmenso para el alquiler turístico</strong>. Esta
          cadena de localidades costeras, cada una con su identidad y atractivo
          únicos, ofrece un escenario inigualable para los inversores
          inmobiliarios interesados en el mercado de alquiler vacacional en la
          Costa Blanca. Orihuela, con su riqueza histórica y cultural, y su
          franja costera, con sus propuestas de ocio y hospitalidad, se
          consolidan como destinos de elección para una clientela turística
          diversa y exigente.
        </p>
        <p>
          <strong>La obtención de la licencia turística</strong> no solo es una
          exigencia legal para operar en la Comunidad Valenciana, incluidas
          Orihuela y sus fracciones costeras como Punta Prima, La Zenia, y
          Villamartín, sino también una garantía de calidad y seguridad para tus
          huéspedes.
        </p>
        <p>
          A través de esta guía, te proporcionaremos{' '}
          <strong>
            información detallada sobre cómo navegar el proceso administrativo
            en Orihuela y sus distintos enclaves costeros
          </strong>
          , asegurando que tu vivienda cumpla plenamente con las normativas
          vigentes.
        </p>
        <p>
          Siguiendo los estatutos de los Decretos 92/2009, de 3 de julio, y
          75/2015, de 15 de mayo, del Consell de la Comunitat Valenciana,{' '}
          <strong>
            es obligatorio que las viviendas destinadas al alquiler turístico
            cuenten con una licencia turística
          </strong>
          . La falta de esta acreditación se considera una infracción en materia
          de turismo e implica la correspondiente responsabilidad.
        </p>
        <p>
          Además,{' '}
          <strong>
            la licencia turística es indispensable para promover la vivienda en
            las distintas plataformas digitales como Airbnb, Booking, etc
          </strong>
          . La publicidad de la vivienda debe incluir el número de registro y la
          categoría de la misma.
        </p>
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl px-5 md:px-14 md:text-3xl text-black700 pb-4 mt-16 font-semibold'>
        Guía para obtener una licencia turística en Orihuela y Orihuela Costa
      </h2>

      <p className='text-center text-sm md:text-lg md:px-20'>
        Con el propósito de aclarar el proceso para conseguir una licencia
        turística, esta guía detallará los pasos esenciales y resolverá las
        dudas más frecuentes sobre este trámite en Orihuela y sus zonas
        costeras.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-16'>
        ¿Qué es el alquiler turístico?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        El alquiler turístico es una forma de alojamiento que ofrece a los
        visitantes una experiencia más personalizada y hogareña en comparación
        con los hoteles tradicionales. Esta modalidad es ideal para{' '}
        <strong>estancias cortas</strong>, generalmente inferiores a dos meses,
        proporcionando la vivienda completa. A diferencia de los apartamentos
        turísticos que están exclusivamente destinados a este fin y suelen
        incluir servicios adicionales, las viviendas de uso turístico son
        <strong>
          inmuebles particulares ofrecidos de manera temporal sin servicios
          extra
        </strong>
        .
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        ¿Quién puede solicitar una licencia turística en Orihuela y Orihuela
        Costa?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Tanto individuos como entidades legales están facultados para solicitar
        licencias turísticas. Lo crucial es que la vivienda se ofrezca con fines
        turísticos, con ánimo de lucro y de manera regular. Aquellos titulares
        de cinco o más propiedades destinadas a uso turístico deben registrarse
        en el Registro como empresa gestora de dichos inmuebles.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-52 lg:px-2 mt-16'>
        ¿Quién regula la concesión de licencias turísticas para alquileres
        vacacionales en Orihuela y Orihuela Costa?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        En España, cada comunidad autónoma establece sus propias normativas, y
        dentro de estas, <strong>son los ayuntamientos quienes deciden</strong>{' '}
        en última instancia. Es crucial cumplir con las regulaciones específicas
        de la Comunidad Valenciana y de los municipios como Orihuela para operar
        legalmente una vivienda vacacional.
      </p>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-56 lg:px-4 mt-16'>
        ¿Qué requisitos debe cumplir una vivienda de alquiler vacacional en
        Orihuela y Orihuela Costa?
      </h2>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Para obtener la licencia turística en Orihuela y Orihuela Costa en 2023,
        es importante cumplir con una serie de requisitos. Se inicia con la
        solicitud del certificado de compatibilidad urbanística en el
        Ayuntamiento de Orihuela. Los solicitantes deben preparar y presentar la
        siguiente documentación:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Justificante de pago de la tasa:</strong> Esta es una tarifa
          administrativa que se debe abonar para procesar la solicitud.
        </li>
        <li>
          <strong>Fotografía de la fachada:</strong> Se requiere una imagen
          actual que muestre claramente el estado actual de la fachada del
          inmueble.
        </li>
        <li>
          <strong>
            Un informe breve que detalle la ubicación y las características del
            inmueble:
          </strong>{' '}
          Este documento debe incluir información relevante sobre la propiedad,
          como su distribución, uso y cualquier otro dato que pueda ser
          pertinente para demostrar su compatibilidad con el uso turístico.
        </li>
        <li>
          <strong>Escritura del inmueble:</strong> Copia de la escritura de
          propiedad que acredite la titularidad del solicitante.
        </li>
        <li>
          <strong>Declaración de segunda ocupación:</strong> Este es un
          documento que certifica que la vivienda cumple con las normativas de
          habitabilidad y que ha sido habitada anteriormente. Una vez obtenido
          el certificado de compatibilidad urbanística de Orihuela, los
          propietarios deben dirigirse a la entidad de Turismo de la Comunidad
          Valenciana con toda la documentación reunida.
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Una vez obtenido el certificado de compatibilidad urbanística y
        comprobado que no existen restricciones por parte de la comunidad de
        propietarios para el alquiler vacacional, el siguiente paso es tramitar
        la licencia turística en la Comunidad Valenciana.
      </p>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Los propietarios deben dirigirse a Turismo de la Comunidad Valenciana
        con toda la documentación reunida, junto con cualquier otro requisito
        adicional que esta entidad requiera, para solicitar formalmente la
        licencia turística que les permitirá operar su vivienda como alojamiento
        vacacional. Para esto deberán aportar:
      </p>

      <ul className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Certificado de compatibilidad urbanística:</strong> Es
          necesario para asegurar que la propiedad se alinea con las normativas
          urbanísticas locales. Este certificado confirma que la vivienda está
          en una zona en la que se permite el uso turístico.
        </li>
        <li>
          <strong>Certificado energético:</strong> Aunque no es un requisito
          obligatorio para la licencia turística, contar con este certificado es
          recomendable ya que proporciona información valiosa sobre la
          eficiencia energética de la propiedad y es un factor que puede influir
          en la decisión de los potenciales huéspedes.
        </li>
        <li>
          <strong>Seguro de responsabilidad civil:</strong> Importante para
          proteger tanto al propietario como a los huéspedes en caso de que
          ocurran accidentes o daños durante la estancia.
        </li>
        <li>
          <strong>
            Fotocopia del DNI y mandato de representación firmado:
          </strong>{' '}
          Para verificar la identidad y la capacidad legal del solicitante para
          actuar en nombre del propietario, si es necesario.
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        La adquisición de una placa distintiva que cumple con los estándares de
        la Comunidad Valenciana es también obligatoria para identificar el
        inmueble como una Vivienda de Uso Turístico (VUT). El coste de la placa
        puede variar entre 40 € y 80 €, y se puede adquirir siguiendo{' '}
        <Link
          href={'https://www.placaturistica.com/'}
          target='_blanck'
          className='underline text-p600'
        >
          este enlace
        </Link>
        .
      </p>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-16'>
        ¿Cuándo y dónde Solicitar la Licencia Turística?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          La licencia turística se puede solicitar en cualquier momento antes de
          comenzar la actividad de alquiler vacacional. Para Orihuela y Orihuela
          Costa, el proceso es el siguiente:
        </p>
        <p>
          Solicitud de compatibilidad urbanística: Este trámite se realiza en el
          Ayuntamiento de Orihuela. Se debe presentar la documentación necesaria
          y pagar la tasa correspondiente.
        </p>
        <p>
          <strong>Dónde:</strong> Una vez obtenido el certificado de
          compatibilidad urbanística y el resto de la documentación necesaria,
          se debe solicitar la licencia turística a través de la sede
          electrónica de la Generalitat Valenciana o en las oficinas de turismo
          correspondientes.
        </p>
        <p>
          <strong>Cuándo:</strong> En cualquier momento antes de comenzar la
          actividad de alquiler vacacional. Tiempo de espera:
        </p>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-12 mt-16'>
        ¿Cuánto tiempo se tarda en obtener la licencia turística en Orihuela?
      </h2>

      <ul className='text-sm md:text-lg px-3 pt-4 md:pt-8 list-disc pl-4 md:pl-32 space-y-4'>
        <li>
          <strong>Compatibilidad urbanística:</strong> La resolución de este
          trámite por parte del Ayuntamiento de Orihuela puede variar, pero
          generalmente podría llevar alrededor de 3 meses.
        </li>
        <li>
          <strong>Licencia turística:</strong> Una vez presentada toda la
          documentación a Turismo de la Comunidad Valenciana, el tiempo de
          tramitación puede ser de aproximadamente 1 a 2 meses.
        </li>
        <li>
          <strong>Totalidad del proceso:</strong> Tomando en cuenta ambos
          trámites, se podría estimar un período total de aproximadamente 4 a 5
          meses, aunque estos plazos pueden variar dependiendo de la carga de
          trabajo de las administraciones involucradas y la complejidad de cada
          caso particular.
        </li>
      </ul>

      <p className='md:self-start text-sm md:text-lg md:px-20 mt-4'>
        Debido a la complejidad y los tiempos de espera, es aconsejable
        considerar la ayuda de profesionales especializados en la materia.
        Empresas como DYGAV,que cuentan con experiencia en la gestión de
        licencias turísticas en la Comunidad Valenciana, pueden ofrecer
        asistencia y asegurar que el proceso se realice de manera correcta y en
        los plazos establecidos.
      </p>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
