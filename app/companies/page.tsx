'use client';

import AppShell from '@/components/common/app-shell';
import CompaniesTable from '@/components/companies/companies-table';
import Filter from '@/components/pro-services/filter';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useEffect } from 'react';

export default function Companies() {
  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent(
      'Companies',
      'Manage corporate entities and their associated clients',
      'New Company',
      '/'
    );
  }, []);

  return (
    <AppShell>
      <p>Coming Soon</p>
      {/* <main className="p-2 md:p-6">
        <Filter onSearchChange={() => {}} />
        <CompaniesTable data={[]} isError={false} isLoading={false} />
      </main> */}
    </AppShell>
  );
}
