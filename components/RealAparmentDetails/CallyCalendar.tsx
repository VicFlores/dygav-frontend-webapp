import React from 'react';
import 'cally';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const CallyCalendar = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-10 md:py-8 md:px-12'>
      <calendar-range
        locale='es-sv'
        firstDayOfWeek={1}
        value='2024-04-10/2024-04-10'
      >
        <MdNavigateNext slot='next' size={25} />

        <MdNavigateBefore slot='previous' size={25} />

        <div className='grid'>
          <calendar-month />
        </div>
      </calendar-range>
    </div>
  );
};

export default CallyCalendar;
