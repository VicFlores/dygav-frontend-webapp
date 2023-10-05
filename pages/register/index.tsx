import { Layout, Register } from '@/components';
import { useSession } from 'next-auth/react';

export default function RegisterPage() {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+320px)] md:h-auto'
        }
      >
        <Layout title='Dygav Register'>
          <Register />
        </Layout>
      </div>
    </section>
  );
}
