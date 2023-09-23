import Link from 'next/link';
import { BiExtension } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { GrInstagram, GrFacebook } from 'react-icons/gr';
import {useForm, SubmitHandler} from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react';

type Inputs = {
  email: string,
}

export const Footer = () => {

  const {register, handleSubmit, formState: {errors}, reset} = useForm<Inputs>();
  const [message , setMessage] = useState<string>('')


  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    try {
      
      const response = await axios.post('https://dygav-suite-default-rtdb.firebaseio.com/email.json', data)
      await response.data
      setMessage('Email enviado correctamente')
      reset()


    } catch (error) {
      setMessage('Error al enviar el email')
    }
  }


  return (
    <footer className='bg-p600 space-y-10 pt-8 pb-8 lg:pt-0 lg:pb-0 lg:space-y-0 h-auto lg:h-80 lg:flex lg:justify-around lg:items-center text-white text-center'>
      <div className='flex flex-col space-y-4'>
        <p className='text-xl'>Enlaces útiles</p>
        <Link href=''>Registrarse</Link>
        <Link href=''>Iniciar Sesion</Link>
        <Link href=''>Apartamentos</Link>
        <Link href=''>Busquedas</Link>
      </div>

      <div>
        <p className='text-xl mb-8'>Boletin informativo</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              {...register('email', {required:"Email es requerido", pattern: {value: /^\S+@\S+$/i, message: "El formato del email es incorrecto"} })}
              placeholder='Escribe tu email y presiona enter'
              className='pl-10  lg:h-11 md:w-96 w-auto bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
          
        </form>
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        {message && <span className='text-green-500'>{message}</span>}
      
      

      </div>

      <div className='flex flex-col space-y-6'>
        <p className='text-xl'>Contacto</p>

        <p>
          Avenida Gregorio <br /> Marañón 7, 7 29
        </p>

        <div className='flex justify-center space-x-6 lg:space-x-0 lg:justify-around items-center'>
          <GrInstagram className='w-8 h-8  text-black900' />
          <GrFacebook className='w-8 h-8  text-black900' />
          <BsWhatsapp className='w-8 h-8  text-black900' />
        </div>
      </div>
    </footer>
  );
};
