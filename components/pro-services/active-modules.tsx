'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import ActiveModulesSkeleton from './active-modules-skeleton';
import { ModuleCard } from './module-card';

const ERROR_MESSAGE = 'Failed to load active modules';

export default function ActiveModules() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<ActiveModulesResponse>({
    queryKey: ['kyc-active-modules', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/active-modules`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return <ActiveModulesSkeleton />;
  }

  if (isError) {
    return (
      <div className="bg-white border border-[#e5e7eb] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-8 text-center">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data || !data.modules || data.modules.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] font-bold text-[#111827] leading-[28px]">
          Active Modules
        </h2>

        <div className="flex flex-col gap-4">
          {data.modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              status={module.status}
              details={module.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
