import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { TSession } from '@/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import styles from '@/app/components/shared/RegisterLoginRecovery/RegisterLoginRecovery.module.css';
import Link from 'next/link';

interface IFormInput {
  email: string;
  password: string;
}

export const Login: FC<TSession> = ({ session }) => {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();

  useEffect(() => {
    if (session !== null && session !== undefined) {
      if (session?.user?.role === 'tourist') {
        return router.push('/private/tourist/dashboard');
      }
      if (session?.user?.role === 'owner') {
        return router.push('/private/owners/dashboard');
      }
      if (session?.user?.role === 'admin') {
        return router.push('/private/admin/dashboard');
      }
    }
  }, [session, router]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const handleLogin = async () => {
    const { email, password } = getValues();

    setError('');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    setError('Cargando...');
  };

  const handleGoogleLogin = async () => {
    const res = await signIn('google');

    if (res?.error) return setError(res.error);

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
            <h1 className={styles.formContainer__title}>Iniciar Sesion</h1>

            <p className={styles.formContainer__subtitle}>
              Hola, Bienvenido a DYGAV 👋
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

            <button type='submit' onClick={handleLogin}>
              Iniciar sesión
            </button>

            <button type='button' onClick={handleGoogleLogin}>
              Iniciar sesión con Google
            </button>

            <Link className={styles.recov_pass} href='/recovery'>
              ¿Olvidaste tu contraseña?
            </Link>

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
