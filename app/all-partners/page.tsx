'use client';
import AllPartnersTable from '@/components/all-partners/allpartners-table';
import AppShell from '@/components/common/app-shell';
import Filter from '@/components/companies/filter';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function AllPartners() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent(
      'All Partners',
      'Manage corporate entities and their associated clients',
      'New Company',
      '/'
    );
  }, []);

  return (
    <AppShell>
      <p>Coming Soon</p>
      {/* <main className="p-2 md:p-6">
        <Filter />
        <AllPartnersTable />
      </main> */}
    </AppShell>
  );
}
