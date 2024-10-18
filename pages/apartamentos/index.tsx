import {
  Footer,
  HeroSearcher,
  Layout,
  MainHero,
  SearcherCards,
  SearcherRealCards,
  UtilHead,
} from '@/components';
import { TSession } from '@/types';
import { getUserFromCookies, searcherCard } from '@/utils';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUserFromCookies(context);

  return {
    props: {
      user,
    },
  };
};

export default function SearcherPage({ user }: { user: TSession }) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getAllAccomodations = async () => {
      const { data } = await axios.get(
        'https://api.avaibook.com/api/owner/accommodations/',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
          },
        }
      );

      const dataArray = [];

      for (const item of data) {
        const { data: dataAvaibook } = await axios.get(
          `https://api.avaibook.com/api/owner/accommodations/${item.id}/`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-AUTH-TOKEN': process.env.AVAIBOOK_API_TOKEN,
            },
          }
        );

        dataArray.push(dataAvaibook);
      }

      setData(dataArray);
    };

    getAllAccomodations();
  }, []);

  return (
    <section>
      <UtilHead title='Dygav Apartamentos' content='' />

      <MainHero>
        <Layout user={user}>
          <HeroSearcher />
        </Layout>
      </MainHero>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 mb-56 gap-y-20'>
        {data.map((item, index) => (
          <SearcherRealCards key={index} item={item} />
        ))}

        {searcherCard.map((item, index) => (
          <SearcherCards key={index} item={item} />
        ))}
      </div>

      <Footer />
    </section>
  );
}
