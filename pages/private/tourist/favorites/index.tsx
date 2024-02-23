import { Layout, TouristFavorites } from "@/components";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function FavoritesPage() {
  const { data: session } = useSession();

  return (
    <section>
      <Head>
        <title>Dygav Favorites</title>
      </Head>

      <Layout session={session}>
        <TouristFavorites />
      </Layout>
    </section>
  );
}
