import { Footer, Layout, Login, UtilHead } from '@/components';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Login' content='' />

      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+280px)] md:h-screen'
        }
      >
        <Layout>
          <Login session={session} />
        </Layout>
      </div>

      <Footer />
    </section>
  );
}
