import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import { Llamanos } from '..';
import useDictionary from '@/app/hooks/useDictionary';
import sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';

export const GetLicense = () => {
  const dictionary: any = useDictionary('licenses');

  const sanitizeCloserParagraphOne = sanitizeHtml(
    dictionary.licenseAditionalInfo?.closerParagraphOne || '',
    sanitizeHtmlConfig
  );

  const sanitizeCloserParagraphTwo = sanitizeHtml(
    dictionary.licenseAditionalInfo?.closerParagraphTwo || '',
    sanitizeHtmlConfig
  );

  return (
    <section className='mt-16 md:mb-16 px-6 md:px-12 lg:px-32 flex flex-col items-center'>
      <h2 className='text-center text-2xl md:text-3xl pb-4 font-semibold border-b-4 border-b-p600 w-auto lg:mx-60 lg:px-2 mt-16'>
        {dictionary.heroLicense?.description}
      </h2>

      <div className='w-auto pt-5 text-black900 pr-3 pl-3 text-justify lg:text-start text-sm md:text-lg mb-14'>
        <p
          dangerouslySetInnerHTML={{ __html: sanitizeCloserParagraphOne }}
          className='mb-4'
        ></p>

        <p
          dangerouslySetInnerHTML={{ __html: sanitizeCloserParagraphTwo }}
          className='mb-4'
        ></p>

        <Link
          href={dictionary.licenseAditionalInfo?.closerLink[0] || ''}
          passHref
        >
          <span className='text-p600 pt-4 text-sm md:text-lg'>
            {dictionary.licenseAditionalInfo?.closerLink[1]}
          </span>
        </Link>
      </div>

      <Llamanos paddingX='lg:px-36' />
    </section>
  );
};
