import { OwnerDashboard } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react';

export const metadata: Metadata = {
  title: 'Owner Dashboard',
  description: 'Owner Dashboard page',
};

const OwnerPanel = async () => {
  const accessToken = cookies().get('access_token');

  return (
    <section>
      <Navbar accessToken={accessToken?.value} />

      <OwnerDashboard />
    </section>
  );
};

export default OwnerPanel;
