import { BiExtension, BiPhoneCall } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import {useForm} from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
  name: string,
  email: string,
  phone: number,
  description: string
}

export const ContactYouLicense = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

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
    <section className='grid justify-center items-center gap-4 mb-24 '>
      <p className='text-center text-2xl px-14 md:text-3xl  text-black700 font-semibold'>
        Nos Ponemos en Contacto Contigo
      </p>

      <div className='w-[350px] md:w-[450px] lg:w-full md:px-4 self-center justify-self-center pt-5 md:text-sm text-black900 border-t-4 border-t-p600'>
        <form className='grid gap-8 px-6 lg:px-10 py-6 pt-4 border-2 border-gray300'
          onClick={handleSubmit(onSubmit)}
        >
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              {...register('name', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.name && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              {...register('email', {required: true})}
              placeholder='Escribe tu correo electronico'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              {...register('phone', {required: true})}
              placeholder='Escribe tu telefono'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.phone && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/3 -translate-y-1/2 left-3 text-black900' />
            <textarea
              placeholder='Ayúdanos a prepararnos: Cuéntanos tu caso para que podamos atenderte mejor cuando te contactemos.'
              {...register('description', {required: true})}
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.description && <span className='text-red-500'>Este campo es obligatorio</span>}
          </label>

          <div className='relative justify-self-center'>
            <BsMailbox className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-4 md:right-3 lg:right-4' />
            <button
              id='toggle'
              type='submit'
              className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Contacta con nosotros
            </button>
          </div>
            {message && <span className='text-green-500 text-center'>{message}</span>}
        </form>
      </div>

      <div className='grid grid-cols-1 gap-y-6 md:grid-cols-2 mt-10'>
        <div className='relative self-center justify-self-center'>
          <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-8 lg:right-12' />
          <a href='tel:+34614165736'>
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              +34 614 165 736
            </button>
          </a>
        </div>

        <div className='relative self-center justify-self-center'>
          <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-10 md:right-8 lg:right-12' />
          <a href='tel:+34614214250'>
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              +34 614 214 250
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
