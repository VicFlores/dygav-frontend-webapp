import { GenerateLink, UtilHead } from '@/components';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';

export default function GenerateLinkPage() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Recovery' content='' />

      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+240px)] md:h-screen'
        }
      >
        <Layout>
          <div className='flex  justify-center lg:mt-10'>
            <GenerateLink session={session} />
          </div>
        </Layout>
      </div>
    </section>
  );
}
