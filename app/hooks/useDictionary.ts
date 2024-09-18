// app/hooks/useDictionary.ts
import { useState, useEffect } from 'react';
import { useLocale } from '../context/LocaleContext';
import { getDictionary } from '../dictionaries/dictionaries';
import { Dictionary, PageKeys } from '../types';

const useDictionary = (page: PageKeys) => {
  const { locale } = useLocale();
  const [dictionary, setDictionary] = useState<Dictionary>({});

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(locale, page);

      setDictionary(dict);
    };

    loadDictionary();
  }, [locale, page]);

  return dictionary;
};

export default useDictionary;
