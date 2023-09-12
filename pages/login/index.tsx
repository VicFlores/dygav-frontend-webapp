import { useSession } from 'next-auth/react';
import { Login, NavBar } from '@/components';

export default function LoginPage() {
  const { data: session } = useSession();
  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+280px)] md:h-screen'
        }
      >
        <NavBar session={session} />
        <Login />
      </div>
    </section>
  );
}
