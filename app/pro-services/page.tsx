'use client';
import AppShell from '@/components/common/app-shell';
import ProServicesTable from '@/components/companies/companies-table';
import Filter from '@/components/pro-services/filter';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useDebounce } from '@/hooks/use-debounce';
import { useKYCApplications } from '@/hooks/use-kyc-applications';
import { useEffect, useState } from 'react';

export default function ProServicesPage() {
  const { setContent } = useBreadcrumb();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 500);
  const { data, isLoading, isError } = useKYCApplications(debouncedQuery);

  useEffect(() => {
    setContent('PRO services', 'PRO services', 'New Client', '/kyc-form');
  }, []);

  return (
    <AppShell>
      <main className="p-2 md:p-6">
        <Filter onSearchChange={setSearchQuery} />
        <ProServicesTable data={data} isLoading={isLoading} isError={isError} />
      </main>
    </AppShell>
  );
}
