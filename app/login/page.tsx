import { Metadata } from 'next';
import { Login } from '../components';

export const metadata: Metadata = {
  title: 'Dygav - Iniciar sesión',
  description:
    'Inicia sesión en Dygav para disfrutar de todas las funcionalidades de la plataforma',
};

export default function LoginPage() {
  return <Login />;
}
