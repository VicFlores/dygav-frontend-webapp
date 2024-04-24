/* eslint-disable react-hooks/exhaustive-deps */
import { ReservationInfoContext } from '@/context';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const ReservationCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [blockedDates, setBlockedDates] = useState<
    { start: Date; end: Date }[]
  >([
    { start: new Date(2024, 3, 20), end: new Date(2024, 3, 25) },
    { start: new Date(2024, 3, 27), end: new Date(2024, 3, 28) },
  ]);
  const { reservationInfo, setReservationInfo } = React.useContext(
    ReservationInfoContext
  );

  useEffect(() => {
    const getBlockedDates = async () => {
      const res = await axios.get(
        `https://api.avaibook.com/api/owner/accommodations/377390/calendar/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      const formattedBlockedDates = res.data.map((item: any) => ({
        start: new Date(item.startDate),
        end: new Date(item.endDate),
      }));

      setBlockedDates(formattedBlockedDates);
    };

    getBlockedDates();
  }, []);

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const days = [...Array(daysInMonth).keys()].map((i) => i + 1);

  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  const firstDayOfMonth =
    (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;

  const lastDayOfMonth =
    (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() + 6) % 7;

  const prevDays = [...Array(firstDayOfMonth).keys()]
    .map((i) => new Date(date.getFullYear(), date.getMonth(), 0).getDate() - i)
    .reverse()
    .slice(-2);

  const nextDays = [...Array(6 - lastDayOfMonth).keys()]
    .map((_, index) => index + 1)
    .slice(0, 2);

  const allDays = [...prevDays, ...days, ...nextDays];

  const selectDate = (day: number, monthOffset: number): void => {
    const selectedDate = new Date(
      date.getFullYear(),
      date.getMonth() + monthOffset,
      day
    );
    // If the selected date is in the past or blocked, do not allow selection
    if (selectedDate < new Date() || isBlocked(day, monthOffset)) {
      return;
    }
    if (startDate && endDate) {
      setStartDate(selectedDate);
      setReservationInfo({
        ...reservationInfo,
        startDate: selectedDate,
        endDate: null,
      });
      setEndDate(null);
      return;
    }
    if (startDate === null) {
      setStartDate(selectedDate);
      setReservationInfo({
        ...reservationInfo,
        startDate: selectedDate,
      });
    } else if (selectedDate < startDate) {
      if (isRangeBlocked(selectedDate, startDate)) {
        return;
      }
      setEndDate(startDate);
      setStartDate(selectedDate);
      setReservationInfo({
        ...reservationInfo,
        startDate: selectedDate,
        endDate: startDate,
      });
    } else {
      if (isRangeBlocked(startDate, selectedDate)) {
        return;
      }
      setEndDate(selectedDate);
      setReservationInfo({
        ...reservationInfo,
        endDate: selectedDate,
      });
    }
  };

  const nextMonth = (): void => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const prevMonth = (): void => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  useEffect(() => {
    setDate(new Date(date.getFullYear(), date.getMonth(), 1));
  }, [startDate, endDate]);

  const isBlocked = (day: number, monthOffset: number): boolean => {
    const selectedDate = new Date(
      date.getFullYear(),
      date.getMonth() + monthOffset,
      day
    );
    return blockedDates.some(
      (range) => selectedDate >= range.start && selectedDate <= range.end
    );
  };

  const isRangeBlocked = (start: Date, end: Date): boolean => {
    for (let i = 0; i < blockedDates.length; i++) {
      if (
        (start >= blockedDates[i].start && start <= blockedDates[i].end) ||
        (end >= blockedDates[i].start && end <= blockedDates[i].end) ||
        (start <= blockedDates[i].start && end >= blockedDates[i].end)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-10 md:py-8 md:px-12'>
      <div className='bg-white rounded-lg shadow-lg p-10 md:py-8 md:px-8'>
        <div className='flex justify-between items-center mb-4'>
          <button onClick={prevMonth}>
            <FiChevronLeft size={20} />
          </button>

          <div className='text-center font-bold'>
            {months[date.getMonth()]} {date.getFullYear()}
          </div>

          <button onClick={nextMonth}>
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className='grid grid-cols-7 gap-2'>
          {daysOfWeek.map((day) => (
            <div key={day} className='p-2 font-bold text-center'>
              {day}
            </div>
          ))}

          {allDays.map((day, index) => {
            const isToday =
              new Date().getDate() === day &&
              new Date().getMonth() ===
                date.getMonth() +
                  (index < prevDays.length
                    ? -1
                    : index < prevDays.length + days.length
                    ? 0
                    : 1) &&
              new Date().getFullYear() === date.getFullYear();

            const isPast =
              new Date(
                date.getFullYear(),
                date.getMonth() +
                  (index < prevDays.length
                    ? -1
                    : index < prevDays.length + days.length
                    ? 0
                    : 1),
                day
              ) < new Date();

            const isBlockedDay = isBlocked(
              day,
              index < prevDays.length
                ? -1
                : index < prevDays.length + days.length
                ? 0
                : 1
            );

            return (
              <button
                key={`${day}-${index}`}
                onClick={() =>
                  !isBlockedDay &&
                  selectDate(
                    day,
                    index < prevDays.length
                      ? -1
                      : index < prevDays.length + days.length
                      ? 0
                      : 1
                  )
                }
                className={`rounded-lg p-2 ${
                  isBlockedDay
                    ? 'bg-gray300 text-black900 cursor-not-allowed hover:opacity-50' // color for blocked days
                    : isToday
                    ? 'bg-p600 text-white' // color for today
                    : isPast
                    ? 'bg-gray300 text-black900 cursor-not-allowed hover:opacity-50' // color for past days
                    : (startDate &&
                        date.getFullYear() === startDate.getFullYear() &&
                        date.getMonth() +
                          (index < prevDays.length
                            ? -1
                            : index < prevDays.length + days.length
                            ? 0
                            : 1) ===
                          startDate.getMonth() &&
                        day === startDate.getDate()) ||
                      (endDate &&
                        date.getFullYear() === endDate.getFullYear() &&
                        date.getMonth() +
                          (index < prevDays.length
                            ? -1
                            : index < prevDays.length + days.length
                            ? 0
                            : 1) ===
                          endDate.getMonth() &&
                        day === endDate.getDate())
                    ? 'bg-p400 text-white'
                    : startDate &&
                      endDate &&
                      new Date(
                        date.getFullYear(),
                        date.getMonth() +
                          (index < prevDays.length
                            ? -1
                            : index < prevDays.length + days.length
                            ? 0
                            : 1),
                        day
                      ) >= startDate &&
                      new Date(
                        date.getFullYear(),
                        date.getMonth() +
                          (index < prevDays.length
                            ? -1
                            : index < prevDays.length + days.length
                            ? 0
                            : 1),
                        day
                      ) <= endDate
                    ? 'bg-p400 text-white'
                    : // : index < prevDays.length ||
                      //   index >= prevDays.length + days.length
                      // ? 'bg-gray300' // color for days before and after the current month
                      'text-black' // color for days of the current month
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
