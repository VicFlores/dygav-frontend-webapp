'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Image from 'next/legacy/image';
import axios, { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import Partners from '../shared/Partners/Partners';

interface IFormInput {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return data;
  };

  const handleRegister = async () => {
    const { fullname, username, email, password } = getValues();

    setError('');

    try {
      const signupResponse = await axios.post('/api/auth/signup/route', {
        fullname,
        email,
        password,
      });

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password,
        redirect: false,
      });

      if (res?.error) return setError(res.error);

      if (res?.ok) return router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }

      setError('Cargando...');
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
            <h1 className={styles.formContainer__title}>Crear nueva cuenta</h1>

            <p className={styles.formContainer__subtitle}>
              Hola, Bienvenido a DYGAV 👋
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formInputContainer}>
              <input
                type='text'
                placeholder='Nombre completo'
                {...register('fullname', { required: true })}
                aria-invalid={errors.fullname ? 'true' : 'false'}
              />

              {errors.fullname?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El nombre completo es requerido
                </p>
              )}
            </div>

            <div className={styles.formInputContainer}>
              <input
                type='text'
                placeholder='Nombre de usuario'
                {...register('username', { required: true })}
                aria-invalid={errors.username ? 'true' : 'false'}
              />

              {errors.username?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El nombre de usuario es requerido
                </p>
              )}
            </div>

            <div className={styles.formInputContainer}>
              <input
                type='email'
                placeholder='Correo electronico'
                {...register('email', { required: true })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />

              {errors.email?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  El correo electronico es requerido
                </p>
              )}
            </div>

            <div className={styles.formInputContainer}>
              <input
                type='password'
                placeholder='Contraseña'
                {...register('password', { required: true })}
                aria-invalid={errors.password ? 'true' : 'false'}
              />

              {errors.password?.type === 'required' && (
                <p className={styles.error} role='alert'>
                  La contraseña es requerida
                </p>
              )}
            </div>

            <button type='submit' onClick={handleRegister}>
              Crear nueva cuenta
            </button>

            <p>{error}</p>
          </form>
        </div>

        <div className={styles.formInfo}>
          <h2>Dygav propietarios y turistas</h2>

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
