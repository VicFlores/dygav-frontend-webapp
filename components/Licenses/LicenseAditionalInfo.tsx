import React from 'react';
import Link from 'next/link';
import { AlquilerVacacional } from '..';
import { CityCards } from './CityCards';
import sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';
import useDictionary from '@/app/hooks/useDictionary';
import {
  generalImages,
  madridImages,
  pirineosAragonImages,
} from '@/utils/static/licenseImages';

export const LicenseAditionalInfo = () => {
  const dictionary: any = useDictionary('licenses');

  const sanitizewhatIsdescriptionOne = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatIsdescriptionOne || '',
    sanitizeHtmlConfig
  );

  const sanitizewhatIsdescriptionTwo = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatIsdescriptionTwo || '',
    sanitizeHtmlConfig
  );

  const sanitizewhatIsdescriptionThree = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatIsdescriptionThree || '',
    sanitizeHtmlConfig
  );

  const sanitizewhatIsdescriptionFour = sanitizeHtml(
    dictionary.licenseAditionalInfo?.whatIsdescriptionFour || '',
    sanitizeHtmlConfig
  );

  const sanitizelicenseMadridCarouselTitle = sanitizeHtml(
    dictionary.licenseAditionalInfo?.licenseMadridCarouselTitle || '',
    sanitizeHtmlConfig
  );

  const sanitizelicenseCostaBlancaDescriptionTwo = sanitizeHtml(
    dictionary.licenseAditionalInfo?.licenseCostaBlancaDescriptionTwo || '',
    sanitizeHtmlConfig
  );

  const sanitizelicenseCostaBlancaDescriptionFour = sanitizeHtml(
    dictionary.licenseAditionalInfo?.licenseCostaBlancaDescriptionFour || '',
    sanitizeHtmlConfig
  );

  const sanitizelicenseCostaBlancaDescriptionFive = sanitizeHtml(
    dictionary.licenseAditionalInfo?.licenseCostaBlancaDescriptionFive || '',
    sanitizeHtmlConfig
  );

  const sanitizelicensePirioneosDescriptionOne = sanitizeHtml(
    dictionary.licenseAditionalInfo?.licensePirioneosDescriptionOne || '',
    sanitizeHtmlConfig
  );

  const sanitizelicensePirioneosDescriptionTwo =
    dictionary.licenseAditionalInfo?.licensePirioneosDescriptionTwo.map(
      (item: any) => ({
        ...item,
        text: sanitizeHtml(item.text, sanitizeHtmlConfig),
      })
    );

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h1 className='text-center text-2xl md:text-3xl pb-4 mb-6 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        {dictionary.licenseAditionalInfo?.whatIstitle}
      </h1>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p dangerouslySetInnerHTML={{ __html: sanitizewhatIsdescriptionOne }} />
        <p dangerouslySetInnerHTML={{ __html: sanitizewhatIsdescriptionTwo }} />
        <p
          dangerouslySetInnerHTML={{ __html: sanitizewhatIsdescriptionThree }}
        />
        <p
          dangerouslySetInnerHTML={{ __html: sanitizewhatIsdescriptionFour }}
        />
      </div>

      <AlquilerVacacional />

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-72 lg:px-10 mt-16'>
        {dictionary.licenseAditionalInfo?.whereHelpYou}
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4 mb-14'>
        <p>{dictionary.licenseAditionalInfo?.whereHelpYouOne}</p>
        <p>{dictionary.licenseAditionalInfo?.whereHelpYouTwo}</p>
        <p>{dictionary.licenseAditionalInfo?.whereHelpYouThree}</p>
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-4 mt-16'>
        {dictionary.licenseAditionalInfo?.licenseMadridTitle}
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p>{dictionary.licenseAditionalInfo?.licenseMadridDescriptionOne}</p>
        <p>{dictionary.licenseAditionalInfo?.licenseMadridDescriptionTwo}</p>
        <p>{dictionary.licenseAditionalInfo?.licenseMadridDescriptionThree}</p>
        <p>{dictionary.licenseAditionalInfo?.licenseMadridDescriptionFour}</p>
        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={
              dictionary.licenseAditionalInfo
                ?.licenseMadridDescriptionNormative[0] || ''
            }
          >
            {
              dictionary.licenseAditionalInfo
                ?.licenseMadridDescriptionNormative[1]
            }
          </Link>
        </p>
      </div>

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2
            dangerouslySetInnerHTML={{
              __html: sanitizelicenseMadridCarouselTitle,
            }}
            className='text-2xl lg:text-[31px] md:text-[26px]'
          ></h2>
          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            {dictionary.licenseAditionalInfo?.licenseMadridCarouselSubtitle}
          </h3>
        </div>
        <CityCards images={madridImages} />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-40 lg:px-4 mt-16'>
        {dictionary.licenseAditionalInfo?.licenseCostaBlancaTitle}
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p>
          {dictionary.licenseAditionalInfo?.licenseCostaBlancaDescriptionOne}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizelicenseCostaBlancaDescriptionTwo,
          }}
        ></p>
        <p>
          {dictionary.licenseAditionalInfo?.licenseCostaBlancaDescriptionThree}
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizelicenseCostaBlancaDescriptionFour,
          }}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizelicenseCostaBlancaDescriptionFive,
          }}
        ></p>
        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={
              dictionary.licenseAditionalInfo
                ?.licenseCostaBlancaDescriptionNormative[0] || ''
            }
          >
            {
              dictionary.licenseAditionalInfo
                ?.licenseCostaBlancaDescriptionNormative[1]
            }
          </Link>
        </p>
      </div>

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2
            dangerouslySetInnerHTML={{
              __html: sanitizelicenseMadridCarouselTitle,
            }}
            className='text-2xl lg:text-[31px] md:text-[26px]'
          ></h2>
          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            {
              dictionary.licenseAditionalInfo
                ?.licenseCostaBlancaCarouselSubtitle
            }
          </h3>
        </div>
        <CityCards images={generalImages} />
      </div>

      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-60 lg:px-4 mt-16'>
        {dictionary.licenseAditionalInfo?.licensePirioneosTitle}
      </h2>

      <div className='text-justify text-sm md:text-lg pt-4 space-y-4'>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizelicensePirioneosDescriptionOne,
          }}
        ></p>
        {sanitizelicensePirioneosDescriptionTwo?.map(
          (item: any, index: any) => (
            <span key={index}>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
              {item.link && (
                <Link href={item.link.href} className='underline text-p600'>
                  {item.link.text}
                </Link>
              )}
            </span>
          )
        )}
        <p>
          <Link
            className='underline text-p600'
            target='_blank'
            href={
              dictionary.licenseAditionalInfo
                ?.licensePirineosDescriptionNormative[0] || ''
            }
          >
            {
              dictionary.licenseAditionalInfo
                ?.licensePirineosDescriptionNormative[1]
            }
          </Link>
        </p>
      </div>

      <div className='w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-10 px-6 md:px-2 lg:px-0 gap-x-4 mb-14'>
        <div className='md:self-center md:justify-self-center divide-y-4 divide-p600 text-center md:text-start'>
          <h2
            dangerouslySetInnerHTML={{
              __html: sanitizelicenseMadridCarouselTitle,
            }}
            className='text-2xl lg:text-[31px] md:text-[26px]'
          ></h2>
          <h3 className='text-center md:text-start text-2xl  md:text-3xl font-semibold pt-3'>
            {dictionary.licenseAditionalInfo?.licensePirioneosCarouselSubtitle}
          </h3>
        </div>
        <CityCards images={pirineosAragonImages} />
      </div>
    </section>
  );
};
