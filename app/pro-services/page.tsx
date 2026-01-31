'use client';
import AppShell from '@/components/common/app-shell';
import ProServicesTable from '@/components/companies/companies-table';
import Filter from '@/components/pro-services/filter';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function ProServicesPage() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent('PRO services', 'PRO services', 'New Client', '/kyc-form');
  }, []);

  return (
    <AppShell>
      <main className="p-2 md:p-6">
        <Filter />
        <ProServicesTable />
      </main>
    </AppShell>
  );
}
