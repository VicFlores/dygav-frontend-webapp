'use client';

import React, { FormEvent, useState } from 'react';
import { PiCity, PiCalendarDuotone, PiUsersThree } from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';
import { InputPickCalendar } from '@/app/shared';
import styles from './SearchForm.module.css';
import { useRouter } from 'next/navigation';

export const SearchForm = () => {
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);

  const router = useRouter();

  const handleDateRangeSelect = (startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
    setCheckin(startDate);
    setCheckout(endDate);
    setShowCalendar(false);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(
      `/apartamentos/busqueda?city=${city}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`
    );
  };

  return (
    <form className={styles.search_form} onSubmit={handleSearch}>
      <div className={styles.input_group}>
        <PiCity className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <select
            id='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value='' disabled>
              Seleccione una ciudad
            </option>
            <option value='Santa Pola'>Santa Pola</option>
            <option value='Madrid'>Madrid</option>
            <option value='Elx/Elche'>Elx/Elche</option>
            <option value='Torrevieja'>Torrevieja</option>
            <option value='Finestrat'>Finestrat</option>
            <option value='Panticosa (Pueblo)'>Panticosa (Pueblo)</option>
            <option value='Pueyo De Jaca, El'>Pueyo De Jaca, El</option>
            <option value='Formigal'>Formigal</option>
            <option value='Alicante/Alacant'>Alicante/Alacant</option>
            <option value='Monte Zenia'>Monte Zenia</option>
            <option value='Pagan, Lo'>Pagan, Lo</option>
            <option value='Oros Alto'>Oros Alto</option>
          </select>
          <label htmlFor='city'>Escoge tu cuidad</label>
        </div>
      </div>

      <div className={styles.input_group}>
        <PiCalendarDuotone className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <input
            id='date'
            type='text'
            value={
              dateRange.startDate && dateRange.endDate
                ? `${dateRange.startDate} / ${dateRange.endDate}`
                : 'Checkin - Checkout'
            }
            onFocus={() => setShowCalendar(true)}
            readOnly
          />
          <label htmlFor='date'>Fecha de reserva</label>
          {showCalendar && (
            <InputPickCalendar
              onDateRangeSelect={handleDateRangeSelect}
              onClose={() => setShowCalendar(false)}
            />
          )}
        </div>
      </div>

      <div className={styles.input_group}>
        <PiUsersThree className={styles.input_group_icon} />

        <div className={styles.input_container}>
          <input
            id='travelers'
            type='number'
            min='1'
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            placeholder='Número de viajeros'
          />
          <label htmlFor='travelers'>Huespedes</label>
        </div>
      </div>

      <button className={styles.search_button} type='submit'>
        <CiSearch className={styles.search_button_icon} />
        Buscar
      </button>
    </form>
  );
};
