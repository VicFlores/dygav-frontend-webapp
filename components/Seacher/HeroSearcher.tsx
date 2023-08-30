import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const HeroSearcher = () => {
  return (
    <section className='w-full text-white px-[66px] py-[70px]'>
      <p className='lg:text-[45px] text-center md:text-start text-[30px] md:text-[38px] font-semibold'>
        ¿A Donde Te Apetece Ir?
      </p>

      <form className='lg:flex space-y-12 lg:space-x-8 lg:space-y-0 md:block md:space-y-8 p-[30px] mt-5 bg-p600/70'>
        <div className='grid lg:grid-cols-3 gap-10 lg:gap-5 md:gap-8'>
          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                type='text'
                placeholder='Tipo de propiedad'
                className='pl-10 bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 w-full py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                type='text'
                placeholder='Servicios'
                className='pl-10 pr-4 bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 w-full py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                type='text'
                placeholder='Prestaciones'
                className='pl-10 pr-4 bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 w-full py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center md:justify-center lg:justify-normal relative lg:col-start-1 lg:col-end-3'>
            <label className='relative'>
              <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                type='text'
                placeholder='Servicios basicos'
                className='pl-10 pr-4 bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 w-full py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>

          <div className='grid items-center justify-center relative'>
            <label className='relative'>
              <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
              <input
                type='text'
                placeholder='Huespedes'
                className='pl-10 pr-4 bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 w-full py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
              />
            </label>
          </div>
        </div>

        <div className='flex justify-center items-center relative'>
          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-11 md:right-5 lg:right-7' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 py-2 px-4 w-[250px] md:w-[200px] lg:w-[180px] text-center lg:text-left text-white justify-self-center self-center'
            >
              Buscar ahora
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
