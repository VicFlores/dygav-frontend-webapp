import React from 'react';

const BlockCalendarDaysForm = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <form className='mt-4'>
        <div className='mb-4'>
          <label
            className='text-gray-700 font-semibold block mb-2'
            htmlFor='name'
          >
            Date
          </label>
          <input
            className='border border-gray-400 p-2 w-full rounded-lg'
            type='date'
            id='name'
            name='name'
            required
          />
        </div>

        <button
          className='bg-blue-500 text-p600 py-2 px-4 rounded-lg hover:bg-blue-600'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlockCalendarDaysForm;
