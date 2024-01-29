import { CityImages } from '../Licenses/CityImages';
import { OwnersIcons } from './OwnersIcons';
import { HelpYouForm, Llamanos } from '..';
import { VacationRentalHome } from './VacationRentalHome';
import Link from 'next/link';

const images = [
  {
    src: 'https://res.cloudinary.com/vicflores11/image/upload/v1705941035/Dygav/Sallent%20%20De%20G%C3%A1llego/c_sallentdegallego_fnllhz.webp',
    alt: 'Gestión de vivendas turísticas en Sallent de Gallego',
  },
];

export const LanuzaMgmtInfo = () => {
  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        Gestión de viviendas turísticas en Sallent de Gallego
      </h1>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 '>
        <p>
          Sallent de Gállego, un precioso pueblo situado a los pies de las
          montañas del espléndido Valle de Tena y cercana a las estaciones de
          esquí de Formigal y Panticosa, se presenta como un{' '}
          <strong>
            destino privilegiado para propietarios e inversores que buscan
            adentrarse en el creciente mercado del alquiler vacacional
          </strong>
          . La perfecta combinación de su patrimonio cultural y la belleza
          natural de sus alrededores, desde su centro gótico hasta su
          emblemático puente medieval, hace de Sallent de Gállego un lugar de
          encanto sin igual. En invierno la gente disfruta de la nieve y la
          gastronomía de la región y en verano el pueblo se anima con
          festividades como la de la Virgen de las Nieves y el Festival de
          Música del Pirineo Sur.
        </p>

        <p>
          La creciente popularidad de Sallent de Gállego, potenciada por la
          mejorada accesibilidad gracias a los túneles de Monrepós y su
          proximidad a Francia,{' '}
          <strong>atrae a un número creciente de turistas</strong>
          franceses y españoles, elevando la demanda de alojamientos
          vacacionales. Este flujo constante de visitantes durante todas las
          estaciones del año, tanto en la temporada de esquí como en los meses
          de verano,{' '}
          <strong>
            asegura una alta ocupación y rendimiento para las propiedades de
            alquiler vacacional
          </strong>
          .
        </p>
      </div>

      <CityImages images={images} />
    </section>
  );
};
