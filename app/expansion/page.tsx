'use client';
import AppShell from '@/components/common/app-shell';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function Expansion() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent(
      'Expansion',
      'Manage platform expansion and growth strategies',
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
