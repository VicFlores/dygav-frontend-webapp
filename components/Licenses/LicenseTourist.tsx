import Image from 'next/legacy/image';
import { LicenseTouristCardInfo } from '@/utils';
import { HelpYouForm } from '..';
import useDictionary from '@/app/hooks/useDictionary';
import sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';

export const LicenseTourist = () => {
  const dictionary: any = useDictionary('licenses');

  const sanitizeWhatCanWeDoOne = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatCanWeDoOne || '',
    sanitizeHtmlConfig
  );

  const sanitizeWhatCanWeDoTwo = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatCanWeDoTwo || '',
    sanitizeHtmlConfig
  );

  const sanitizeWhatCanWeDoThree = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatCanWeDoThree || '',
    sanitizeHtmlConfig
  );

  const sanitizeGetReadyDescriptionOne = sanitizeHtml(
    dictionary.licenseAditionalInfo?.getReadyDescriptionOne || '',
    sanitizeHtmlConfig
  );

  const sanitizeGetReadyDescriptionTwo = sanitizeHtml(
    dictionary.licenseAditionalInfo?.getReadyDescriptionTwo || '',
    sanitizeHtmlConfig
  );

  const sanitizeGetReadyDescriptionThree = sanitizeHtml(
    dictionary.licenseAditionalInfo?.getReadyDescriptionThree || '',
    sanitizeHtmlConfig
  );

  return (
    <section className='mt-16 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-16'>
        {dictionary.licenseAditionalInfo?.whatCanWeDo}
      </h2>

      <div className='w-auto pt-5 space-y-4 text-black900 px-3 text-justify lg:text-start text-sm md:text-lg'>
        <p dangerouslySetInnerHTML={{ __html: sanitizeWhatCanWeDoOne }}></p>

        <p dangerouslySetInnerHTML={{ __html: sanitizeWhatCanWeDoTwo }}></p>

        <p dangerouslySetInnerHTML={{ __html: sanitizeWhatCanWeDoThree }}></p>
      </div>

      <div
        id='CardContainer'
        className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-4 mt-10'
      >
        <div
          id='Card'
          className='bg-gray300/20 border-[1px] rounded-xl  border-p600 text-center py-6 '
        >
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_secure_files_re_6vdh_ocaelx-1.png'
            }
            alt={'Cumplimiento Normativo'}
            width={267}
            height={176}
            className='mt-4'
          />

          <div className='space-y-5 mt-4 px-4'>
            <p className='text-sm md:text-lg lg:text-xl font-semibold text-p600'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardOneTitle}
            </p>
            <p className='text-justify lg:text-start text-sm md:text-lg text-black900'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardOneDescription}
            </p>
          </div>
        </div>

        <div
          id='Card'
          className='bg-gray300/20 border-[1px] rounded-xl  border-p600 text-center py-6 '
        >
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_My_documents_re_13dc_oy8qvl-1.png'
            }
            alt={'Documentación Adecuada'}
            width={267}
            height={176}
            className='mt-4'
          />

          <div className='space-y-5 mt-4 px-4'>
            <p className='text-sm md:text-lg lg:text-xl font-semibold text-p600'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardTwoTitle}
            </p>
            <p className='text-justify lg:text-start text-sm md:text-lg text-black900'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardTwoDescription}
            </p>
          </div>
        </div>

        <div
          id='Card'
          className='bg-gray300/20 border-[1px] rounded-xl  border-p600 text-center py-6 '
        >
          <Image
            src={
              'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_Processing_re_tbdu_yuu38n-1.png'
            }
            alt={'Trámites Administrativos'}
            width={267}
            height={176}
            className='mt-4'
          />

          <div className='space-y-5 mt-4 px-4'>
            <p className='text-sm md:text-lg lg:text-xl font-semibold text-p600'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardThreeTitle}
            </p>
            <p className='text-justify lg:text-start text-sm md:text-lg text-black900'>
              {dictionary.licenseAditionalInfo?.whatCanWeDoCardThreeDescription}
            </p>
          </div>
        </div>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:px-10 mt-24'>
        {dictionary.licenseAditionalInfo?.getReadyTitle}
      </h2>

      <div className='pt-8 px-4 md:px-8 space-y-4 text-justify lg:text-start text-sm md:text-lg text-black900'>
        <p
          dangerouslySetInnerHTML={{ __html: sanitizeGetReadyDescriptionOne }}
        ></p>

        <p
          dangerouslySetInnerHTML={{ __html: sanitizeGetReadyDescriptionTwo }}
        ></p>

        <p
          dangerouslySetInnerHTML={{ __html: sanitizeGetReadyDescriptionThree }}
        ></p>
      </div>

      <HelpYouForm />
    </section>
  );
};
