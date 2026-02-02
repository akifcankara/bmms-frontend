'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import { BadgeCheck, Users, CheckCircle, Check } from 'lucide-react';

const HEADER_TITLE = 'Visa & PRO Requirements';
const HEADER_SUBTITLE = 'Visa and PRO service requirements';
const LABEL_VISAS_REQUIRED = 'Number of Visas Required';
const LABEL_VISA_TYPES = 'Visa Types Needed';
const LABEL_PRO_SERVICES = 'PRO Services Selected';

const ERROR_MESSAGE = 'Failed to load visa requirements';
const LOADING_TEXT = 'Loading visa requirements...';

export default function VisaProContent() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<VisaProResponse>({
    queryKey: ['kyc-visa-pro', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/visa-pro`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="bg-white border border-[#e5e7eb] border-solid rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-6">
        <p className="text-[12px] text-[#6b7280]">{LOADING_TEXT}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white border border-[#e5e7eb] border-solid rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-6">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="bg-white border border-[#e5e7eb] border-solid rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-6">
      <div className="border-b border-[#e5e7eb] pb-[25px]">
        <div className="flex items-center gap-4">
          <div
            className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(22, 163, 74) 100%)',
            }}
          >
            <BadgeCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-[#111827] leading-[28px]">
              {HEADER_TITLE}
            </h2>
            <p className="text-[14px] text-[#6b7280] leading-[20px]">
              {HEADER_SUBTITLE}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_VISAS_REQUIRED}
          </label>
          <div className="bg-[#dcfce7] px-4 py-2 rounded-[8px] flex items-center gap-2 w-fit">
            <Users className="w-5 h-5" />
            <span className="text-[24px] font-bold text-[#111827] leading-[32px]">
              {data.totalVisasRequired} Visas
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_VISA_TYPES}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 capitalize">
            {data.visaTypes.map((visaType) => (
              <div
                key={visaType}
                className="bg-[#f0fdf4] border border-[#bbf7d0] px-[17px] py-[13px] rounded-[8px] flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-[14px] font-bold text-[#111827] leading-[20px]">
                  {visaType}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_PRO_SERVICES}
          </label>
          <div className="flex flex-col gap-2">
            {data.proServices.map((service) => (
              <div
                key={service}
                className="bg-[#f9fafb] px-4 py-3 rounded-[8px] flex items-center gap-3"
              >
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-[14px] font-medium text-[#111827] leading-[20px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
