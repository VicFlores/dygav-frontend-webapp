import sanitizeHtml from 'sanitize-html';
import React from 'react';
import { OwnersIcons } from './OwnersIcons';
import useDictionary from '@/app/hooks/useDictionary';
import { sanitizeHtmlConfig } from '@/utils/static/sanitizeHtmlConfig';

export const PeachOwners = () => {
  const dictionary = useDictionary('owners');

  const sanitizedDescriptionTwo = sanitizeHtml(
    dictionary.peachOwners?.descriptionTwo || '',
    sanitizeHtmlConfig
  );

  return (
    <section className='mt-24 mb-16 px-6 md:px-12 lg:px-32 flex flex-col'>
      <h2 className='text-center text-2xl lg:text-3xl text-black700 font-semibold pb-4'>
        {dictionary.peachOwners?.title}
      </h2>

      <div className='w-auto text-justify lg:text-start text-sm md:text-lg border-t-4 border-t-p600 pt-5 space-y-4 text-black900 pr-3 pl-3'>
        <p>{dictionary.peachOwners?.descriptionOne}</p>

        <p
          dangerouslySetInnerHTML={{
            __html: sanitizedDescriptionTwo,
          }}
        ></p>
      </div>

      <OwnersIcons image='https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_sweet_home_dkhr_b0qc3r.svg' />
    </section>
  );
};
