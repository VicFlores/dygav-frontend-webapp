import {
  UtilHead,
  MainHero,
  Layout,
  HeroLicense,
  Footer,
  Post,
} from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const BlogPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <UtilHead
        title='Dygav Blog'
        content='Ahora el descubre el nuevo blog de Dygav'
      />
      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title='Dygav Blog'
            subtitle='Ahora el descubre el nuevo blog de Dygav'
          />
        </Layout>
      </MainHero>

      <Post id={router.query.id as string} />

      <Footer />
    </>
  );
};

export default BlogPage;
