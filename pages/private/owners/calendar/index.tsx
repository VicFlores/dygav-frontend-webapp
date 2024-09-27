import React from 'react';
import { useSession } from 'next-auth/react';
import { Layout, CalendarOwner } from '@/components';
import Head from 'next/head';

const CalendarPage = () => {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Calendar</title>
      </Head>

      <Layout session={session}>
        {session ? (
          <CalendarOwner session={session} />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
};

export default CalendarPage;
