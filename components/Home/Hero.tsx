import { BiExtension } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Hero = () => {
  return (
    <section className='w-full  text-white px-[66px] py-[70px]'>
      <div>
        <p className='lg:text-[45px] md:text-[38px] text-[26px]'>
          Bienvenidos a DYGAV
        </p>
        <p className='lg:text-[27px] md:text-[20px] text-[18px]'>
          Donde la excelencia en la gestión de apartamentos <br /> turísticos
          cobra vida respaldada por la experiencia y el renombre del Grupo
          Pacitel.
        </p>
      </div>

      <form className='grid lg:grid-cols-4 lg:gap-4 md:gap-8 gap-10 p-[30px] mt-16 bg-p600/50'>
        <div className='self-center justify-self-center relative'>
          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Ubicacion'
              className='pl-10 lg:w-64 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 rounded py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='self-center justify-self-center relative'>
          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='text'
              placeholder='Fecha'
              onFocus={(e) => (e.target.type = 'date')}
              className='pl-10 pr-4 lg:w-64 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 rounded py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='self-center justify-self-center relative'>
          <label className='relative'>
            <BiExtension className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 text-black900' />
            <input
              type='number'
              placeholder='Huespedes'
              className='pl-10 pr-4 lg:w-64 md:w-96 w-full bg-transparent shadow appearance-none bg-white border border-white placeholder:text-black900 rounded py-2 text-black900 leading-tight focus:outline-none focus:shadow-outline'
            />
          </label>
        </div>

        <div className='self-center justify-self-center relative'>
          <div className='relative'>
            <AiOutlineCheckCircle className='w-5 h-5 absolute top-1/2 -translate-y-1/2 right-7' />
            <button
              id='toggle'
              className='bg-p600 hover:bg-p800 py-2 px-4 w-[180px] text-left text-white justify-self-center self-center'
            >
              Buscar ahora
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
