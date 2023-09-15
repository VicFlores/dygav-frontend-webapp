import { getSession, useSession } from 'next-auth/react';
import { Layout, OwnerDashboard } from '@/components';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { axiosConfig } from '@/utils';
import { Accomodations } from '@/types';
import { Session } from 'next-auth';

type OwnerDash = {
  session: Session | null;
  data: Accomodations[];
};

export const getServerSideProps: GetServerSideProps<OwnerDash> = async (
  ctx
) => {
  const session = await getSession(ctx);

  const id = session?.user?._id;

  const res = await fetch(
    `https://dygav-fronted-webapp.vercel.app/api/accomodations/findByUserId/${id}`,
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  return { props: { session, data } };
};

export default function OwnerDashboardPage({
  session,
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section>
      <Layout session={session} title='Dygav Dash'>
        <OwnerDashboard data={data} />
      </Layout>
    </section>
  );
}
