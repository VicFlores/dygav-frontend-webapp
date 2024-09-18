import { informationCard } from '@/utils';
import Image from 'next/legacy/image';
import React, { FC } from 'react';
import { OwnersIcons } from './OwnersIcons';
import useDictionary from '@/app/hooks/useDictionary';
import sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';

export const VacationRentalHome: FC<{ typeOfPage?: string }> = ({
  typeOfPage,
}) => {
  const dictionary: any = useDictionary('owners');

  const sanitizeourRentalFeesDescriptionOne = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionOne || '',
    sanitizeHtmlConfig
  );

  const sanitizeourRentalFeesDescriptionTwo = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionTwo || '',
    sanitizeHtmlConfig
  );

  const sanitizeourRentalFeesDescriptionThree = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionThree || '',
    sanitizeHtmlConfig
  );

  const sanitizeourRentalFeesDescriptionFour = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionFour || '',
    sanitizeHtmlConfig
  );

  const sanitizeourRentalFeesDescriptionFive = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionFive || '',
    sanitizeHtmlConfig
  );

  const sanitizeourRentalFeesDescriptionSix = sanitizeHtml(
    dictionary.vacationRentalHome?.ourRentalFeesDescriptionSix || '',
    sanitizeHtmlConfig
  );

  const sanitizecontrolRentalDescriptionOne = sanitizeHtml(
    dictionary.vacationRentalHome?.controlRentalDescriptionOne || '',
    sanitizeHtmlConfig
  );

  const sanitizecontrolRentalDescriptionTwo = sanitizeHtml(
    dictionary.vacationRentalHome?.controlRentalDescriptionTwo || '',
    sanitizeHtmlConfig
  );

  return (
    <>
      <div className=' py-5 space-y-20 md:text-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4'>
          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Business_plan_re_0v81_pwrgvq-1.png'
              }
              alt={'Inversiones y Mejoras'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardOneTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardOneDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_product_photography_91i2_heu55s-1.png'
              }
              alt={'Reportaje Fotográfico Profesional'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardTwoTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardTwoDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Social_thinking_re_y8cc_bgut8y-1.png'
              }
              alt={'Marketing Y Promoción'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardThreeTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardThreeDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Savings_re_eq4w_x3aeo0-1.png'
              }
              alt={'Precio Dinámico por IA'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardFourTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardFourDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Online_calendar_re_wk3t_deptkr-1.png'
              }
              alt={'Check In Check Out'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardFiveTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardFiveDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_voice_control_ofo1_qw5akv-1.png'
              }
              alt={'Atención al Cliente'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardSixTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardSixDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Clean_up_re_504g_knants-1.png'
              }
              alt={'Limpieza y Mantenimiento'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardSevenTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardSevenDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_two_factor_authentication_namy_ks1ozk-1.png'
              }
              alt={'Gestión de Seguros'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardEightTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardEightDescription}
              </p>
            </div>
          </div>

          <div className=' w-fit  border-[1px] border-p600 text-center bg-gray300/20 py-5 rounded-lg'>
            <Image
              src={
                'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_reviews_lp8w_tqqbkq-1.png'
              }
              alt={'Gestión de Reseñas'}
              width={267}
              height={176}
            />

            <div className='space-y-4 px-4 mt-4'>
              <p className=' text-black700 text-sm md:text-lg lg:text-xl font-semibold'>
                {dictionary.vacationRentalHome?.cardNineTitle}
              </p>
              <p className='text-black900 text-justify lg:text-start text-sm md:text-lg px-4 lg:px-0'>
                {dictionary.vacationRentalHome?.cardNineDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-24 pb-2 font-semibold'>
        {dictionary.vacationRentalHome?.ourRentalFees}
      </h2>

      <div className='text-justify lg:text-start text-sm md:text-lg pt-4 space-y-4 mb-12'>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizeourRentalFeesDescriptionOne,
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: sanitizeourRentalFeesDescriptionTwo,
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: sanitizeourRentalFeesDescriptionThree,
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: sanitizeourRentalFeesDescriptionFour,
          }}
        />
      </div>

      <div className='flex justify-center items-center my-8'>
        <figure className='relative w-32 h-40 md:w-52 lg:w-60 md:h-72 lg:h-80'>
          <Image
            src='https://multimedia.dygav.es/wp-content/uploads/2024/04/Blue_Modern_Bold_Minimalist_Mineral_Water_Logo_awcm4u.svg'
            alt='15% comission image'
            layout='fill'
            objectFit='contain'
          />
        </figure>
      </div>

      <p
        dangerouslySetInnerHTML={{
          __html: sanitizeourRentalFeesDescriptionFive,
        }}
        className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'
      ></p>

      <p
        dangerouslySetInnerHTML={{
          __html: sanitizeourRentalFeesDescriptionSix,
        }}
        className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'
      ></p>

      <h2 className='text-center text-2xl md:text-3xl border-b-4 border-b-p600 mt-24 pb-2 font-semibold'>
        {dictionary.vacationRentalHome?.controlRental}
      </h2>

      <p
        dangerouslySetInnerHTML={{
          __html: sanitizecontrolRentalDescriptionOne,
        }}
        className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'
      ></p>

      <figure className='relative w-52 h-52 md:w-80 md:h-80 self-center mt-10'>
        <Image
          src={
            'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_home_settings_re_pkya_bvz343.svg'
          }
          alt=''
          layout='fill'
        />
      </figure>

      <p
        dangerouslySetInnerHTML={{
          __html: sanitizecontrolRentalDescriptionTwo,
        }}
        className='mt-8 text-justify lg:text-start text-sm md:text-lg px-2 md:px-0'
      ></p>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_smart_home_re_orvn_rd13cl.svg' />
    </>
  );
};
