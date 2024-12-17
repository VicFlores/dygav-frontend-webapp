'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@/app/components/shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { setLoginCookies } from '@/app/actions';
import { AxiosError } from 'axios';
import { crmFinanzas, getOwnerInfo, validateAccessToken } from '@/app/utils';
import { useRouter } from 'next/navigation';
import Partners from '../shared/Partners/Partners';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const handleLogin = async () => {
    try {
      const { email, password } = getValues();

      if (!email || !password) {
        return;
      }

      const response = await crmFinanzas.post('/auth/login', {
        username_email: email,
        password,
      });

      const { data } = response.data;

      await setLoginCookies(data.access_token, data.refresh_token);

      const userRole = await getOwnerInfo();

      setErrorMessage(null);
      setSuccessMessage('Inicio de sesión exitoso!, redirigiendo...');

      if (userRole?.role === 'OWNER') {
        router.push('/private/owners/dashboard');
      } else {
        router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setErrorMessage(
          error.response?.data.message || 'Credenciales invalidas'
        );
      } else {
        setErrorMessage('Credenciales invalidas');
      }
      setSuccessMessage(null);
    }
  };

  const handleGoogleLoginSuccess = async (response: any) => {
    try {
      const { credential } = response;
      const decodedToken: any = jwtDecode(credential);
      const googleEmail = decodedToken.email;

      const googleResponse = await crmFinanzas.post('/auth/google-auth', {
        email: googleEmail,
      });

      const { data } = googleResponse.data;

      await setLoginCookies(data.access_token, data.refresh_token);

      const userRole = await getOwnerInfo();

      setErrorMessage(null);
      setSuccessMessage('Inicio de sesión exitoso!, redirigiendo...');

      if (userRole?.role === 'OWNER') {
        router.push('/private/owners/dashboard');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Error al iniciar sesión con Google');
      setSuccessMessage(null);
    }
  };

  const handleGoogleLoginFailure = () => {
    setErrorMessage('Error al iniciar sesión con Google');
    setSuccessMessage(null);
  };

  return (
    <GoogleOAuthProvider clientId='323679128892-mtoavkrqmogdml1a10ugfe3hulso2u10.apps.googleusercontent.com'>
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
              <h1 className={styles.formContainer__title}>Iniciar Sesion</h1>

              <p className={styles.formContainer__subtitle}>
                Hola, Bienvenido a DYGAV 👋
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formInputContainer}>
                <input
                  type='text'
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

              {errorMessage && <p className={styles.error}>{errorMessage}</p>}

              {successMessage && (
                <p className={styles.successMessage}>{successMessage}</p>
              )}

              <button type='submit' onClick={handleLogin}>
                Iniciar sesión
              </button>

              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
                containerProps={{ className: styles.googleLoginButton }}
              />

              <Link className={styles.recov_pass} href='/recovery'>
                ¿Olvidaste tu contraseña?
              </Link>
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
    </GoogleOAuthProvider>
  );
};
