import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Partners.module.css';

const Partners: FC = () => {
  return (
    <div className={styles.containerPartners}>
      <h1>Descubre tu refugio perfecto a solo un clic de distancia.</h1>

      <div className={styles.partners}>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Booking-Logo_osnjdx.png'
            alt='Booking.com'
            layout='fill'
          />
        </figure>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/ABNB_ugauy3.png'
            alt='Airbnb'
            layout='fill'
          />
        </figure>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/0x0_j8hysr.png'
            alt='Rentalia'
            layout='fill'
          />
        </figure>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Comment-contacter-Vrbo_jkhslp.png'
            alt='Vrbo'
            layout='fill'
          />
        </figure>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Google_2015_logo.svg_sojqzx-1.png'
            alt='Google'
            layout='fill'
          />
        </figure>
        <figure>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/EXPEDIA-LOGO-1_ko2beq-1.png'
            alt='Expedia'
            layout='fill'
          />
        </figure>
      </div>
    </div>
  );
};

export default Partners;
