import { Layout, Register } from '@/components';

export default function RegisterPage() {
  return (
    <section>
      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-screen'
        }
      >
        <Layout title='DyGav Register' />
        <Register />
      </div>
    </section>
  );
}
