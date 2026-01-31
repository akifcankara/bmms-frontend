import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

export function useKYCApplications() {
  return useQuery({
    queryKey: ['kyc-applications'],
    queryFn: async () => {
      const response = await axiosInstance.get('/kyc/applications');
      return response.data;
    },
  });
}
