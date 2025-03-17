'use client';

import Image from 'next/legacy/image';
import React, { FC, useState, useEffect } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { validateAccessToken } from '@/app/utils';
import { delCookies } from '@/app/actions';
import { useRouter } from 'next/navigation';

export const Navbar: FC<{ accessToken: string | undefined }> = ({
  accessToken,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [userInfo, setUserInfo] = useState({ data: { username: '' } });
  const router = useRouter();

  useEffect(() => {
    try {
      const getUserByAccessToken = async () => {
        if (accessToken) {
          const res = await validateAccessToken(accessToken);

          const user = await res.json();

          setUserInfo(user);
        }
      };

      getUserByAccessToken();
    } catch (error) {
      console.log(error);
    }
  }, [accessToken]);

  const handleLogout = () => {
    delCookies();

    router.push('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoBurgerMenu}>
        <figure className={styles.navbar__logo}>
          <Image
            src='https://res.cloudinary.com/feraguilar695/image/upload/v1725208668/DYGAV_g6gpci.svg'
            alt='Logo'
            layout='fill'
          />
        </figure>

        <div className={styles.navbar__burgerMenu}>
          <button
            className={isActive ? styles.active : styles.inactive}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.navbar__navigationContainer} ${
          isActive ? styles.burgerMenu__active : styles.burgerMenu__inactive
        }`}
      >
        <div>
          <ul className={styles.navbar__linkContainer}>
            <Link
              className={styles.navbar__link}
              href={'/private/owners/dashboard'}
            >
              Panel General
            </Link>
            <Link
              className={styles.navbar__link}
              href={'/private/owners/reservations'}
            >
              Reservas
            </Link>
            <Link
              className={styles.navbar__link}
              href={'/private/owners/finanzas'}
            >
              Mis Finanzas
            </Link>
            <Link
              className={styles.navbar__link}
              href={'/private/owners/calendar'}
            >
              Calendario
            </Link>
            {/* <Link className={styles.navbar__link} href={'/'}>
              Favoritos
            </Link> */}
          </ul>
        </div>

        <div className={styles.navbar__linkContainer}>
          <LanguageSwitcher />

          <figure className={styles.navbar__user}>
            <Image
              src='https://dygav-storage.nyc3.cdn.digitaloceanspaces.com/dygav_official/undraw_pic-profile_nr49.svg'
              alt='Profile'
              layout='fill'
            />
          </figure>

          <p className={styles.username}>{userInfo?.data?.username}</p>

          <button className={styles.logout__button} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
