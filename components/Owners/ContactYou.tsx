import { BiExtension, BiPhoneCall } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';

export const ContactYou = () => {
  return (
    <section className='grid justify-center items-center gap-4 mb-24 '>
      <p className='text-center text-[34px] text-black700 border-b-4 border-b-p600 pb-2'>
        Nos Ponemos en Contacto Contigo
      </p>

      <div className='w-[450px] self-center justify-self-center pt-5 text-black900'>
        <form className='grid gap-8 px-6 py-6 pt-4 border-2 border-gray300'>
          <p className='text-xl text-center'>Completa tu información</p>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Escribe tu nombre completo'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='email'
              placeholder='Escribe tu correo electronico'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Escribe tu telefono'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Cuentanos un poco mas'
              className='py-3 pl-10 pr-4 bg-transparent shadow appearance-none border-r-2 border-r-black900 placeholder:text-black900 w-full text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>

          <div className='relative'>
            <BsMailbox className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-6 md:right-5 lg:right-7' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
            >
              Contacta con nosotros
            </button>
          </div>
        </form>
      </div>

      <div className='grid grid-cols-2 mt-10'>
        <div className='relative'>
          <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-6 md:right-5 lg:right-7' />
          <button
            id='toggle'
            className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            +34 614 165 736
          </button>
        </div>

        <div className='relative'>
          <BiPhoneCall className='w-4 h-4 md:w-5 md:h-5 text-white absolute top-1/2 -translate-y-1/2 right-6 md:right-5 lg:right-7' />
          <button
            id='toggle'
            className='bg-p600 hover:bg-p800 text-center text-xs md:text-sm lg:text-base py-2 px-4 w-[220px] md:w-[240px] lg:w-[280px] text-white justify-self-center self-center'
          >
            +34 614 214 250
          </button>
        </div>
      </div>
    </section>
  );
};
