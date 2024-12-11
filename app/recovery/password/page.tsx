import React from 'react';
import { Metadata } from 'next';
import { PasswordForm } from '@/app/components';

export const metadata: Metadata = {
  title: 'Recuperar contraseña - Cambiar contraseña',
  description: 'Recupera tu contraseña en el sistema de recuperación',
};

export default function RecoveryPasswordSendEmailPage() {
  return <PasswordForm />;
}
