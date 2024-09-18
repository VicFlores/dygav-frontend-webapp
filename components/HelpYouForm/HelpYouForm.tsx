import useDictionary from '@/app/hooks/useDictionary';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';
import Image from 'next/legacy/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GrContactInfo } from 'react-icons/gr';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineAddIcCall } from 'react-icons/md';
import sanitizeHtml from 'sanitize-html';

type Inputs = {
  name: string;
  email: string;
  phone: number;
  description: string;
};

export const HelpYouForm = () => {
  const [message, setMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch('/api/mailing', requestOptions).then((response) => response.json());

    setMessage('Mensaje enviado correctamente');
  };

  const dictionary = useDictionary('owners');

  const sanitizeSubtitle = sanitizeHtml(
    dictionary.helpYouForm?.subtitle || '',
    sanitizeHtmlConfig
  );

  const sanitizeDescription = sanitizeHtml(
    dictionary.helpYouForm?.description || '',
    sanitizeHtmlConfig
  );

  return (
    <section
      id='formulario'
      className='flex flex-col lg:flex-row lg:justify-evenly justify-center items-center my-24 px-4  lg:space-x-8 bg-gray300/30 py-10 md:p-14 rounded-xl border border-p600'
    >
      <div className='space-y-2 text-lg md:text-xl text-center'>
        <h3 className='text-p600 font-semibold uppercase'>
          {dictionary.helpYouForm?.title}
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: sanitizeSubtitle }}
          className='font-semibold capitalize'
        ></p>
        <p
          dangerouslySetInnerHTML={{ __html: sanitizeDescription }}
          className='capitalize'
        ></p>

        <figure className='h-60 w-60 md:h-64 md:w-64 relative m-0'>
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_contact_us_re_4qqt_jvl1zy.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>
      </div>

      <form
        id='formulario'
        onSubmit={handleSubmit(onSubmit)}
        className='grid gap-8 px-2 lg:px-10 py-6 pt-4 border-0 md:border border-p600 rounded-xl'
      >
        <p className='text-xl text-center'>
          {dictionary.helpYouForm?.formTitle}
        </p>

        <label className='relative'>
          <GrContactInfo className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            type='text'
            placeholder={dictionary.helpYouForm?.inputOne}
            {...register('name', { required: true })}
            className='bg-white py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.name && (
            <span className='text-red-500'>Este campo es obligatorio</span>
          )}
        </label>

        <label className='relative'>
          <HiOutlineMail className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            type='email'
            placeholder={dictionary.helpYouForm?.inputTwo}
            {...register('email', { required: true })}
            className='bg-white py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.email && (
            <span className='text-red-500'>Este campo es obligatorio</span>
          )}
        </label>

        <label className='relative'>
          <MdOutlineAddIcCall className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
          <input
            type='number'
            placeholder={dictionary.helpYouForm?.inputThree}
            {...register('phone', { required: true })}
            className='bg-white py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.phone && (
            <span className='text-red-500'>Este campo es obligatorio</span>
          )}
        </label>

        <label className='relative'>
          <HiOutlineLocationMarker className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
          <textarea
            placeholder={dictionary.helpYouForm?.inputFour}
            {...register('description', { required: true })}
            className='bg-white py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
          />
          {errors.description && (
            <span className='text-red-500'>Este campo es obligatorio</span>
          )}
        </label>

        <button
          id='toggle'
          type='submit'
          className='bg-p600 hover:bg-p800 text-center text-sm md:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
        >
          {dictionary.helpYouForm?.button}
        </button>
        {message && <p className='text-center text-green-500'>{message}</p>}
      </form>
    </section>
  );
};
