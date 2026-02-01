import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface BasicInfoResponse {
  slug: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  currentLocation: string;
}

export function useBasicInfo(slug: string) {
  return useQuery<BasicInfoResponse>({
    queryKey: ['kyc-basic-info', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/basic-info`
      );
      return response.data;
    },
    enabled: !!slug,
  });
}
