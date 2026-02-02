'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import { CheckCircle, Users, Briefcase, Calendar } from 'lucide-react';
import ClientStatsSkeleton from './client-stats-skeleton';
import StatCard from './stat-card';

const LABEL_CLIENT_STATUS = 'Client Status';
const LABEL_CLIENT_TYPE = 'Client Type';
const LABEL_MODULES = 'Modules';
const LABEL_JOINED_DATE = 'Joined Date';
const ERROR_MESSAGE = 'Failed to load client stats';

export default function ClientStats() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<ClientStatsResponse>({
    queryKey: ['kyc-client-stats', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/client-stats`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return <ClientStatsSkeleton />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-[24px] w-full">
      <StatCard
        icon={<CheckCircle className="w-5 h-5" />}
        value={data.status}
        label={LABEL_CLIENT_STATUS}
      />
      <StatCard
        icon={<Users className="w-5 h-5" />}
        value={data.clientType}
        label={LABEL_CLIENT_TYPE}
      />
      <StatCard
        icon={<Briefcase className="w-5 h-5" />}
        value={`${data.activeModules} Active`}
        label={LABEL_MODULES}
      />
      <StatCard
        icon={<Calendar className="w-5 h-5" />}
        value={data.joinedDate}
        label={LABEL_JOINED_DATE}
      />
    </div>
  );
}
