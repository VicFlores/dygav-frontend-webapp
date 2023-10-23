import { getSession, useSession } from "next-auth/react";
import { Layout, OwnerDashboard } from "@/components";
import Head from "next/head";

export default function OwnerDashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Dash</title>
      </Head>

      <Layout session={session}>
        {session ? (
          <OwnerDashboard session={session} />
        ) : (
          <>
            <h1>Waiting</h1>
          </>
        )}
      </Layout>
    </section>
  );
}
