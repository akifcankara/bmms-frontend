'use client';
import AppShell from '@/components/common/app-shell';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function Settings() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent(
      'Settings',
      'Manage platform settings and configurations',
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
