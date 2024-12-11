'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from '../../shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Image from 'next/legacy/image';
import Partners from '../../shared/Partners/Partners';
import { crmFinanzas } from '@/app/utils';
import { AxiosError } from 'axios';

interface IFormInput {
  password: string;
  confirmPassword: string;
}

export const PasswordForm = () => {
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const token = searchParams?.get('token');

  const handleRegister = async () => {
    const { password, confirmPassword } = getValues();

    try {
      setError('');

      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }

      if (!token) {
        setError('Error de seguridad');
        return;
      }

      await crmFinanzas.put(`/auth/reset-password?token=${token}`, {
        password,
      });

      setError('Contraseña actualizada');

      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(
          error.response?.data.detail.message ||
            'Error al actualizar la contraseña'
        );
        return;
      }

      setError('Error al actualizar la contraseña');
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
                type='password'
                placeholder='Ingresa tu nueva contraseña'
                {...register('password', { required: true, minLength: 8 })}
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              {errors.password?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El campo contraseña es requerido
                </p>
              )}

              {errors.password?.type === 'minLength' && (
                <p className={styles.error} role='alert'>
                  La contraseña debe tener al menos 8 caracteres
                </p>
              )}
            </div>

            <div className={styles.formInputContainer}>
              <input
                type='password'
                placeholder='Confirma tu nueva contraseña'
                {...register('confirmPassword', {
                  required: true,
                  minLength: 8,
                })}
                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
              />

              {errors.confirmPassword?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El campo de confirmación de contraseña es requerido
                </p>
              )}

              {errors.confirmPassword?.type === 'minLength' && (
                <p className={styles.error} role='alert'>
                  La contraseña de confirmación debe tener al menos 8 caracteres
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
