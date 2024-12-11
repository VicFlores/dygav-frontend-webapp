'use client';

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Image from 'next/legacy/image';
import Partners from '../../shared/Partners/Partners';
import { crmFinanzas } from '@/app/utils';
import { AxiosError } from 'axios';

interface IFormInput {
  email: string;
}

export const EmailForm = () => {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleRegister = async () => {
    const { email } = getValues();

    try {
      if (!email) {
        setError('El campo email es requerido');
        return;
      }

      setError('Cargando...');

      await crmFinanzas.post(
        `/auth/send-reset-password-email?email=${email}`,
        {}
      );

      setError('Correo enviado');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data.detail.message || 'Error al enviar el correo'
        );
        return;
      }

      setError('Error al enviar el correo');
    }
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

          <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
            <div className={styles.formInputContainer}>
              <input
                type='text'
                placeholder='Ingresa tu correo electronico'
                {...register('email', { required: true })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />

              {errors.email?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El campo email es requerido
                </p>
              )}
            </div>

            <button type='submit'>Enviar</button>

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
