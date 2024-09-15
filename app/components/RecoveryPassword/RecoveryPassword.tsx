'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Image from 'next/legacy/image';

interface IFormInput {
  password: string;
}

export const RecoveryPassword = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const handleRegister = async () => {
    const { password } = getValues();

    setError('');

    setError('Cargando...');
  };

  return (
    <main className={styles.maincontainer}>
      <div className={styles.cardContainer}>
        <div className={styles.formContainer}>
          {/* <figure>
            <Image
              src='https://multimedia.dygav.es/wp-content/uploads/2024/04/1.Dygav_Blanco_Vertical_z64ijw.svg'
              alt='Login'
              layout='fill'
            />
          </figure> */}

          <div>
            <h1 className={styles.formContainer__title}>
              Recuperar contraseña
            </h1>

            <p className={styles.formContainer__subtitle}>
              Bienvenido al sistema de recuperacion 👋
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputContainer}>
              <input
                type='password'
                placeholder='Contraseña'
                {...register('password', { required: true })}
                aria-invalid={errors.password ? 'true' : 'false'}
              />

              {errors.password?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  La contraseña es requer
                </p>
              )}
            </div>

            <button type='submit' onClick={handleRegister}>
              Iniciar sesion
            </button>

            <p>{error}</p>
          </form>
        </div>

        <div className={styles.formInfo}>
          <h2>Dygav administrador</h2>

          <p>
            Administra todo el ecosistema de dygav desde un solo panel de
            control en donde podras ver los alojamientos, propietarios entre
            otras cosas.
          </p>
        </div>
      </div>

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
    </main>
  );
};
