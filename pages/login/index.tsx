import { Login, UtilHead } from '@/components';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav - Inicio de sesion' content='' />

      <Login session={session} />
    </section>
  );
}
