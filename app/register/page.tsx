import { Register } from '../components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dygav - Registro',
  description:
    'Crea una cuenta en Dygav y comienza a disfrutar de todos los beneficios que tenemos para ti.',
};

export default function RegisterPage() {
  return <Register />;
}
