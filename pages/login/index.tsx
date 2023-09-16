import { BurgerMenu, Login, NavBar } from '@/components';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+280px)] md:h-screen'
        }
      >
        <NavBar />
        <BurgerMenu />
        <Login session={session} />
      </div>
    </section>
  );
}
