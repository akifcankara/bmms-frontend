'use client';
import AppShell from '@/components/common/app-shell';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function MenaLeaders() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent(
      'MENA Leaders',
      'Manage platform expansion and growth strategies in the MENA region',
      'New Client',
      '/'
    );
  }, []);

  return (
    <AppShell>
      <main className="p-2 md:p-6">Coming soon...</main>
    </AppShell>
  );
}
