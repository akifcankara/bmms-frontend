'use client';
import AppShell from '@/components/common/app-shell';
import ProServicesTable from '@/components/companies/companies-table';
import Filter from '@/components/pro-services/filter';
import { useBreadcrumb } from '@/store/breadcrumb';
import { useDebounce } from '@/hooks/use-debounce';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

export default function ProServicesPage() {
  const { setContent } = useBreadcrumb();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, isError } = useQuery<KYCApplication[]>({
    queryKey: ['kyc-applications', debouncedQuery],
    refetchOnMount: true,
    queryFn: async () => {
      const params = debouncedQuery ? { query: debouncedQuery } : {};
      const response = await axiosInstance.get<KYCApplication[]>(
        '/kyc/applications',
        { params }
      );
      return response.data;
    },
  });

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
