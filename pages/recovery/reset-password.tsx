import { ResetPassword, UtilHead } from '@/components';
import React from 'react';

export default function ResetPasswordPage() {
  return (
    <section>
      <UtilHead title='Dygav Recovery' content='' />

      <div
        className={
          'w-full bg-brandContent bg-center bg-cover bg-no-repeat h-screen'
        }
      >
        <div className='flex  justify-center pt-16 lg:pt-28'>
          <ResetPassword />
        </div>
      </div>
    </section>
  );
}
