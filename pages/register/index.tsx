import { useSession } from 'next-auth/react';
import { NavBar, Register } from '@/components';

export default function RegisterPage() {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+320px)] md:h-screen'
        }
      >
        <NavBar session={session} />

        <Register />
      </div>
    </section>
  );
}
