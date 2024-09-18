'use client';

import { useLocale } from '@/app/context/LocaleContext';
import React from 'react';
import styles from './LanguageSwitcher.module.css';

enum Locale {
  EN = 'en',
  ES = 'es',
}

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as Locale);
  };

  return (
    <div>
      <select
        value={locale}
        onChange={handleChange}
        className={styles.buttonLikeSelect}
      >
        <option value={Locale.EN}>English</option>
        <option value={Locale.ES}>Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
