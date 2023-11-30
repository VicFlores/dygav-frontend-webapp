import Image from 'next/legacy/image';
import Link from 'next/link';
import { AlquilerVacacional, HelpYouForm, LicenciasTuristicas } from '..';
import { CityImages } from './CityImages';
import { CityCardsFooter } from './CityCardsFooter';

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

export const AlicanteInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Licencias turísticas en Alicante
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>Proceso de obtención de una licencia turística en Alicante</p>

        <p>
          En Alicante, la obtención de una licencia turística se rige por la{' '}
          <span>
            <Link
              target='_blank'
              className='underline text-p600'
              href={'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2018-8950'}
            >
              Ley de Turismo
            </Link>
          </span>{' '}
          de la Comunidad Valenciana.
        </p>

        <p>
          El proceso para obtener una licencia turística en Alicante es el
          siguiente:
        </p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-decimal pl-2 md:pl-12 lg:pl-16 space-y-6'>
          <li>
            <strong>
              Verificar que la vivienda cumple con los requisitos:
            </strong>{' '}
            Antes de solicitar la licencia turística, es importante verificar
            que la vivienda cumple con los requisitos de calidad y seguridad
            exigidos por la ley. Esto incluye contar con instalaciones adecuadas
            para la climatización, la electricidad y el agua, y cumplir con las
            normas de seguridad en cuanto a la construcción y el mobiliario.
          </li>
          <li>
            <strong>Obtener el Certificado de Aptitud de la vivienda:</strong>{' '}
            Para obtener este certificado, es necesario contratar a un técnico
            especializado que realice una inspección de la vivienda y verifique
            que cumple con los requisitos exigidos por la ley. Este certificado
            es esencial para el proceso de obtención de la licencia turística.
          </li>
          <li>
            <strong>Presentar la solicitud de licencia turística:</strong> Una
            vez se cuenta con el Certificado de Aptitud, se puede proceder a
            presentar la solicitud de licencia turística en el Ayuntamiento de
            Alicante. Es importante contar con toda la documentación necesaria,
            incluyendo el Certificado de Aptitud, el registro de la propiedad y
            el comprobante del pago de las tasas correspondientes.
          </li>
          <li>
            <strong>Inspección de la vivienda:</strong> Una vez se ha presentado
            la solicitud, se llevará a cabo una inspección de la vivienda por
            parte de los inspectores del Ayuntamiento de Alicante. En esta
            inspección, se verificará que la vivienda cumple con todos los
            requisitos exigidos por la ley.
          </li>
          <li>
            <strong>Obtención de la licencia turística:</strong> Si la vivienda
            cumple con todos los requisitos exigidos, se otorgará la licencia
            turística, que permitirá al propietario alquilar la vivienda a
            turistas de manera legal y regulada.
          </li>
        </ol>

        <p>
          <Link
            target='_blank'
            className='underline text-p600'
            href={
              'https://www.alicante.es/es/noticias/ley-152018-turismo-ocio-y-hospitalidad'
            }
          >
            Ver formulario{' '}
          </Link>
        </p>

        <p className='pt-5 md:pt-10 font-semibold'>Plazo de solicitud</p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-5 md:pl-16 space-y-6'>
          <li>Durante todo el año.</li>
          <li>Inicio: con carácter previo al inicio de la actividad.</li>
          <li>Modificaciones: una vez realizadas las modificaciones.</li>
          <li>Cese: cuando se produzca.</li>
        </ol>

        <AlquilerVacacional />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 mt-16'>
        ¿Qué es el alquiler turístico?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          El alquiler turístico es un tipo de alquiler pensado para de ocio,
          normalmente es un alquiler a turistas que vienen a pasar unos días a
          la ciudad y quieren alquilar una vivienda en lugar de alojarse en un
          hotel. El <strong>tiempo máximo del alquiler es de 2 meses</strong> y
          la vivienda debe ser alquilada en su totalidad.
        </p>
        <p>
          Un apartamento turístico es una vivienda que se destina exclusivamente
          al alojamiento turístico y que cuenta con servicios comunes, como la
          recepción y limpieza. Por otro lado, una vivienda de uso turístico es
          una vivienda particular que se destina temporalmente al alojamiento
          turístico y que no cuenta con servicios comunes.
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-48 md:px-10 mt-16'>
        ¿Qué requisitos tiene que cumplir la vivienda para alquiler vacacional?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Hemos de diferenciar entre un apartamento turístico, que es una
          vivienda que se destina exclusivamente al alojamiento turístico y que
          cuenta con servicios comunes, como la recepción y limpieza, de una
          vivienda de uso turístico, que es una vivienda particular que se
          destina temporalmente al alojamiento turístico y no cuenta con
          servicios comunes.
        </p>

        <p>Para solicitar la licencia turística la vivienda tiene que</p>

        <p>
          Disponer de <strong>licencia de ocupación</strong>, sea primera o
          segunda ocupación.
        </p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-decimal pl-4 md:pl-16 space-y-4'>
          <li>
            Disponer de <strong>licencia de ocupación</strong>, sea primera o
            segunda ocupación.
          </li>
          <li>
            Estar amueblada y equipada en condiciones de{' '}
            <strong>uso inmediato</strong>.
          </li>
          <li>
            Cocina equipada al menos 2 fogones, frigorífico, placa eléctrica,
            horno o microondas.
          </li>
          <li>
            Ascensores a partir de que el piso se encuentre en la cuarta planta;
          </li>
          <li>Aislamiento térmico y acústico en todas las zonas</li>
          <li>Agua caliente</li>
          <li>Plano de evacuación situado en la puerta de la vivienda</li>
          <li>
            Listado de teléfonos de urgencia y de interés situado en lugar
            visible.
          </li>
          <li>
            Comercializarse o promocionarse en{' '}
            <strong>canales de oferta turística</strong>. Es decir, a través de
            las agencias de viaje, las centrales de reservas, las empresas de
            mediación y organización de servicios turísticos.
          </li>
          <li>
            Cederse en su <strong>totalidad o por habitaciones</strong>.
          </li>
          <li>
            Cederse con <strong>fines de alojamiento turístico</strong>.
          </li>
          <li>
            Comercializarse y promocionarse con{' '}
            <strong>finalidad lucrativa</strong>. No de forma gratuita.
          </li>
          <li>
            Cederse de <strong>forma habitual</strong>.
          </li>
        </ol>

        <p className='pt-5'>
          Se presumirá la <strong>habitualidad</strong> en la actividad
          turística de hospedaje en viviendas y habitaciones de uso turístico
          cuando se haga publicidad por cualquier medio de la oferta de dicho
          servicio en el correspondiente alojamiento.
        </p>

        <p>
          Se considerará que tal <strong>habitualidad es efectiva</strong>{' '}
          cuando, aun sin constar previa publicidad, se constate que se ha
          contratado dicho alojamiento en dos o más ocasiones dentro del mismo
          año o una vez al año, pero en repetidas ocasiones.
        </p>

        <p>
          La administración podrá hacer las comprobaciones necesarias relativas
          al cumplimiento de los requisitos indicados y a la tenencia de la
          correspondiente documentación. Las viviendas turísticas pueden
          clasificarse en tres categorías:{' '}
          <strong>superior, primera o estándar</strong>.
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 mt-16'>
        ¿Quién puede solicitar una licencia turística ?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Las licencias turísticas las pueden solicitar personas físicas o
          jurídicas, sean o no los propietarios de las viviendas turísticas, que
          cedan inmuebles en condiciones de inmediata disponibilidad para su
          utilización por parte de los usuarios con una finalidad turística,
          vacacional o de ocio, siempre que dicha cesión se efectúe con carácter
          oneroso y habitualidad.
        </p>

        <p className='font-semibold'>
          Cómo tributa el alquiler vacacional de una vivienda
        </p>

        <p>
          Una gran ventaja de una vivienda destinada a fines turísticos es la
          forma de tributar:
        </p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-5 md:pl-16 space-y-6'>
          <li>
            Los ingresos obtenidos por el alquiler turístico se deben incluir en
            la declaración de la renta anual como ganancias de arrendamiento
            urbano, es decir, incluyendo los ingresos obtenidos por el
            desarrollo de la actividad como ganancias en la declaración de la
            renta anual.
          </li>
          <li>
            No es necesario darse de alta como autónomo ni pagar tasas
            adicionales.
          </li>
          <li>
            Además, si el propietario es quien explota la vivienda, no se
            requiere tributar por IVA.
          </li>
        </ol>

        <p>
          Es importante destacar que el alquiler turístico es un servicio de
          alojamiento y no un establecimiento comercial.
        </p>

        <p className='font-semibold pt-10'>Responsabilidades</p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-5 md:pl-16 space-y-6'>
          <li>
            En el supuesto de que los alojamientos objeto de la presente norma
            sean gestionados directamente por su titular la responsabilidad
            administrativa será exigible a éstos.
          </li>
          <li>
            En el caso de que la prestación del servicio de alojamiento
            turístico por cesión de la vivienda en su totalidad se realice por
            empresas gestoras, que no sean sus titulares, será necesario que
            éstas tengan la disponibilidad del inmueble. La responsabilidad por
            el incumplimiento de las obligaciones administrativas será exigible
            a la empresa gestora.
          </li>
          <li>
            Cuando la gestión de las viviendas turísticas cedidas en su
            totalidad se realice a través de agente mandatario, la
            responsabilidad administrativa será exigible al mandante.
          </li>
          <li>
            Cuando los usuarios de la vivienda incumplan alguna de las
            obligaciones relativas a las reglas de convivencia, el titular de la
            explotación podrá denegar la permanencia y requerir el abandono del
            alojamiento en el plazo de veinticuatro horas.
          </li>
        </ol>
      </div>

      <LicenciasTuristicas />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 lg:mx-48 mt-16'>
        ¿Quién regula las concesiones de licencias turísticas para alquileres
        vacacionales?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          En España, cada comunidad autónoma tiene sus propias regulaciones y
          requisitos para obtener una licencia turística.
        </p>
        <p>
          A nivel general, se exige que la vivienda cumpla con determinados
          estándares de calidad y seguridad, y que se cumplan ciertas
          regulaciones en cuanto a la limpieza y el mantenimiento.
        </p>
        <p>
          Es muy importante tener en cuenta que las licencias turísticas son
          específicas para cada vivienda, por lo que{' '}
          <strong>
            no se puede utilizar la misma licencia para alquilar varias
            propiedades
          </strong>
          .
        </p>
        <p>
          Es importante que la vivienda cumpla con las normas y regulaciones de
          la zona en la que se encuentra. En algunos casos, las autoridades
          locales pueden prohibir la actividad turística en ciertas zonas o
          limitar la cantidad de viviendas turísticas en una zona determinada.
          Por ejemplo, en zonas residenciales se puede limitar la cantidad de
          viviendas turísticas permitidas, mientras que en zonas de ocio o
          turísticas se pueden permitir un mayor número.
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 lg:mx-48 mt-16'>
        ¿Qué documentación es obligatorio presentar para obtener una licencia
        turística?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          Cuando hemos determinado que la vivienda es apta para alquiler
          vacacional hay que presentar una serie de documentos en distintos
          estamentos oficiales:
        </p>
        <p>
          <strong>Declaración responsable</strong> por el propietario o titular
          de la vivienda dirigida al Servicio Territorial de Turismo de la
          provincia en la que se ubiquen las viviendas, en la que manifieste el
          cumplimiento de los requisitos que les sean de aplicación para la
          tipología pretendida, y, en su caso, clasificación, y el compromiso de
          mantenerlos durante el tiempo de vigencia de la actividad. De esta
          forma ponemos en conocimiento de la administración turística el inicio
          de actividad de viviendas de uso turístico.{' '}
        </p>

        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={'https://www.gva.es/downloads/publicados/IN/25082_BI.pdf'}
          >
            Ver Modelo de Declaración responsable para particulares
          </Link>
        </p>

        <p>
          Al presentar la declaración, el propietario asegura a la
          Administración:
        </p>

        <ol className='text-sm md:text-lg px-3 pt-4 list-decimal pl-4 md:pl-16 space-y-4'>
          <li>
            Que la{' '}
            <strong>
              vivienda dispone de los requisitos exigidos por la normativa
            </strong>
            para su clasificación en la categoría y capacidad comunicada, y que
            tales requisitos se mantendrán durante la vigencia de la actividad.
          </li>
          <li>
            Que la vivienda dispone del{' '}
            <strong>
              informe favorable municipal de compatibilidad urbanística
            </strong>{' '}
            que permite el uso turístico.
          </li>
          <li>
            Que la vivienda dispone de{' '}
            <strong>licencia de ocupación, primera o segunda</strong>.
          </li>
          <li>
            Que el establecimiento cuenta con un{' '}
            <strong>seguro de responsabilidad civil</strong>u otra garantía
            equivalente para cubrir los daños y perjuicios que puedan provocar
            en el desarrollo de su actividad.
          </li>
        </ol>

        <h3>Junto con la declaración responsable, deberemos adjuntar:</h3>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-16 space-y-4'>
          <li>
            <strong>Planos de la vivienda</strong> firmados por el técnico
            competente y habilitado.
          </li>
          <li>
            La <strong>cédula de habitabilidad</strong> o{' '}
            <strong>licencia de primera ocupación</strong>, según sea el caso.
          </li>
          <li>
            <strong>Escritura de compraventa</strong>, contrato de
            arrendamiento, de cesión o algún documento que acredite la
            disponibilidad del inmueble.
          </li>
          <li>
            Documento de Identidad, ya sea DNI o pasaporte del titular de la
            vivienda.
          </li>
        </ol>

        <p>
          Para realizar estos trámites, te aconsejamos que contrates los
          servicios de una empresa especializada en tramitar la licencia de
          vivienda turística en .
        </p>

        <h3 className='font-semibold pt-6'>Plazo de solicitud</h3>

        <ol className='text-sm md:text-lg px-3 pt-4 list-disc pl-4 md:pl-16 space-y-4'>
          <li>Durante todo el año.</li>
          <li>Inicio: con carácter previo al inicio de la actividad.</li>
          <li>Modificaciones: una vez realizadas las modificaciones.</li>
          <li>Cese: cuando se produzca.</li>
        </ol>

        <h3 className='font-semibold pt-6'>
          Dónde solicitar una licencia turística en Alicante
        </h3>

        <ul className='text-sm md:text-lg px-3 pt-4 space-y-4'>
          <li>Ayuntamiento de Alicante. Área de Turismo.</li>
          <li>Calle del Ayuntamiento, 1 03002 Alicante.</li>
          <li>
            O bien de forma telemática en la web de la Generalitat Valenciana.
          </li>
          <li>
            <Link
              target='_blanck'
              className='underline text-p600'
              href={'https://www.gva.es/es/inicio/procedimientos?id_proc=14752'}
            >
              Ver trámites aquí
            </Link>
          </li>
        </ul>
      </div>

      <CityImages images={images} />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 lg:mx-48 mt-10 md:mt-16'>
        ¿Cómo realizar la presentación de la solicitud de la licencia en
        Alicante?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>
          La relación con las personas o entidades interesadas se realizará,
          tanto para las personas físicas como jurídicas, mediante medios
          electrónicos, de acuerdo con lo previsto en el artículo 14.3 de la Ley
          39/2015, de 1 de octubre, del Procedimiento Administrativo Común de
          las Administraciones Públicas y artículo 21.2 del Decreto de
          alojamiento turístico en la Comunitat Valenciana.{' '}
        </p>
        <p>
          Asi mismo, la notificación se realizará mediante medios electrónicos,
          de acuerdo con lo previsto en el penúltimo párrafo del artículo 41.1
          de la mencionada Ley.
        </p>
        <p>
          Para realizar la presentación telemática de la declaración
          responsable:
        </p>

        <ul className='text-sm md:text-lg px-3 pt-4 space-y-4'>
          <li>
            <span>
              A través del enlace puedes{' '}
              <Link
                target='_blanck'
                className='underline text-p600'
                href={'https://www.gva.es/es/inicio/presentacion'}
              >
                realizar el certificado
              </Link>{' '}
              de este trámite.
            </span>
          </li>
          <li>
            <span>
              Haciendo una búsqueda de este trámite en la Sede Electrónica de la
              Generalitat, en el{' '}
              <Link
                target='_blanck'
                className='underline text-p600'
                href={'https://sede.gva.es/es/'}
              >
                enlace
              </Link>
            </span>
          </li>
        </ul>

        <p>
          La resolución de este tipo de procedimiento deberá notificarse en el{' '}
          <strong>plazo máximo de seis meses</strong> desde su inicio.
        </p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10 mt-16'>
        ¿Cuál es la tasa de la licencia turística en Alicante?
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-8'>
        <p>
          Las tasas varían de una comunidad a otra y de una localidad a otra.
        </p>
        <p>
          Hay que señalar, que la tasa de licencia turística, propiamente dicha,
          <strong>no tiene coste. Si tiene</strong> el registro de toda la{' '}
          <strong>documentación técnica</strong>, previa y necesaria para
          obtenerla.{' '}
        </p>
        <p>
          Por ejemplo, en Alicante, para obtener un certificado de
          compatibilidad urbanística, cuesta 111.39 euros.
        </p>
        <p>
          Por último, hay un coste de unos 40 € aproximadamente, que habría que
          sumar, por la compra de una placa distintiva. Sirve para marcar el
          inmueble y es obligatorio. Lo puedes adquirir pulsando.{' '}
          <span>
            <Link
              href={'https://www.placaturistica.com/'}
              className='underline text-p600'
              target='_blanck'
            >
              aquí
            </Link>
          </span>
        </p>
        <p>
          En <strong className='text-p600'>DYGAV</strong>, estamos a tu lado en
          cada paso del camino hacia la obtención de la licencia turística para
          tu piso. Nos convertimos en tu aliado y guía, asegurándonos de que el
          proceso sea fluido y exitoso.
        </p>
        <p>
          Desde el asesoramiento inicial hasta la presentación de la
          documentación necesaria, nos encargamos de todo el papeleo y daremos
          seguimiento constante a todos los trámites para que tú puedas
          concentrarte en lo más importante:{' '}
          <span>
            {' '}
            <Link href='/gestion-integral-apartamentos-turisticos'>
              <span className='text-p600 pt-4'>
                Preparar tu alojamiento para recibir a tus huéspedes.
              </span>
            </Link>
          </span>
        </p>
      </div>

      <HelpYouForm />

      <CityCardsFooter />
    </section>
  );
};
