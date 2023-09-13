import { BurgerMenu, Login, NavBar } from '@/components';

export default function LoginPage() {
  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+280px)] md:h-screen'
        }
      >
        <NavBar />
        <BurgerMenu />
        <Login />
      </div>
    </section>
  );
}
