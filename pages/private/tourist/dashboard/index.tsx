import { useSession } from "next-auth/react";
import { TouristDashboard, Layout } from "@/components";
import Head from "next/head";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Dash</title>
      </Head>

      <Layout session={session}>
        <TouristDashboard />
      </Layout>
    </section>
  );
}
