import { BurgerMenu, Layout, NavBar, Register } from '@/components';

export default function RegisterPage() {
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
