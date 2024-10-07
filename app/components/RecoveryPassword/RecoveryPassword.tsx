'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Image from 'next/legacy/image';
import Partners from '../shared/Partners/Partners';

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
          <figure className={styles.formImage}>
            <Image
              src='https://res.cloudinary.com/feraguilar695/image/upload/v1725208668/DYGAV_g6gpci.svg'
              alt='Login'
              layout='fill'
            />
          </figure>

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

      <Partners />
    </main>
  );
};
