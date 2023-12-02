import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  faqs: FAQ[];
};

export const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs }) => {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(0);

  const toggleVisibility = (index: number) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  return (
    <>
      <h3 className='mt-8 text-sm md:text-lg lg:text-xl px-2 md:px-0 text-center md:text-start font-semibold mb-4'>
        {title}
      </h3>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} className='space-y-4 py-4'>
            <h2
              onClick={() => toggleVisibility(index)}
              className='bg-p600/70 hover:cursor-pointer hover:underline px-4 py-4 flex justify-between items-center rounded-xl text-white'
            >
              {faq.question}
              {visibleAnswer === index ? <FaChevronUp /> : <FaChevronDown />}
            </h2>

            {visibleAnswer === index && (
              <p className='px-4 py-4 bg-p600/90 rounded-xl text-white'>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
