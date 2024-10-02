import { OwnerDashboard } from '@/app/components';
import { Navbar } from '@/app/components/shared';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Owner Dashboard',
  description: 'Owner Dashboard page',
};

const OwnerPanel = () => {
  return (
    <section>
      <Navbar />

      <OwnerDashboard />
    </section>
  );
};

export default OwnerPanel;
