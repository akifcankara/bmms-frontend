import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

export function useKYCApplications(query?: string) {
  return useQuery({
    queryKey: ['kyc-applications', query],
    refetchOnMount: true,
    queryFn: async () => {
      const params = query ? { query } : {};
      const response = await axiosInstance.get('/kyc/applications', { params });
      return response.data;
    },
  });
}
