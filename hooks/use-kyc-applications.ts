import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface KYCApplication {
  id: string;
  slug: string;
  initials: string;
  name: string;
  type: string;
  module: string;
}

export function useKYCApplications(query?: string) {
  return useQuery<KYCApplication[]>({
    queryKey: ['kyc-applications', query],
    refetchOnMount: true,
    queryFn: async () => {
      const params = query ? { query } : {};
      const response = await axiosInstance.get('/kyc/applications', { params });
      return response.data;
    },
  });
}
