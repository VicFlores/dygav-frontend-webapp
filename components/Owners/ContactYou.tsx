import { useState } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineAddIcCall } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/legacy/image';

type Inputs = {
  name: string,
  email: string,
  phone: number,
  description: string
}
export const ContactYou = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()

  const [message, setMessage] = useState<string>()

  const onSubmit = (data: Inputs) => {

   
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
    fetch('/api/mailing', requestOptions)
        .then(response => response.json())
  
        setMessage("Mensaje enviado correctamente")
  }


  return (
    <section className='flex flex-col lg:flex-row lg:justify-evenly justify-center items-center my-24  lg:space-x-8'>
      <div className='space-y-2 text-lg md:text-xl text-center'>
        <h3 className='text-p600 font-semibold uppercase'>¿Necesitas ayuda?</h3>
        <p className='font-semibold capitalize'>
          Llámanos, escríbenos o <br /> acercate a nuestras <br /> oficinas
        </p>
        <p className='capitalize'>
          Resolvemos todos tus dudas sin <br /> compromiso.
        </p>

        <figure className='h-60 w-60 md:h-64 md:w-64 relative m-0'>
          <Image
            src={
              'https://res.cloudinary.com/vicflores11/image/upload/v1697737435/Dygav/undraw_contact_us_re_4qqt_jvl1zy.svg'
            }
            alt={'Map Logo'}
            layout='fill'
            className='rounded-full'
          />
        </figure>
      </div>

      <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-8 px-6 lg:px-10 py-6 pt-4 border-2 border-gray300'
        >
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <GrContactInfo className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              {...register('name', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.name && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <HiOutlineMail className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu correo electronico'
              {...register('email', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <MdOutlineAddIcCall className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              {...register('phone', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.phone && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <HiOutlineLocationMarker className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
            <textarea
              placeholder='Ayúdanos a prepararnos: Cuéntanos tu caso para que podamos atenderte mejor cuando te contactemos.'
              {...register('description', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.description && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <button
            id='toggle'
            type="submit"
            className='bg-p600 hover:bg-p800 text-center text-sm md:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            Solicitar informacion
          </button>
          {
            message && <p className='text-center text-green-500'>{message}</p>
          }
        </form>
    </section>
  );
};
