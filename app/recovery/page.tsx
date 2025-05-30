import React from 'react';
import { EmailForm } from '../components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recuperar contraseña - Enviar correo',
  description: 'Recupera tu contraseña en el sistema de recuperación',
};

export default function RecoveryPasswordSendEmailPage() {
  return <EmailForm />;
}
