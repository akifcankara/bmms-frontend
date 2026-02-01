'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import BankIcon from '../icons/bank-icon';
import CheckIcon from '../icons/check-icon';
import BankBuildingIcon from '../icons/bank-building-icon';
import MoneyIcon from '../icons/money-icon';

const HEADER_TITLE = 'Banking & Additional Services';
const HEADER_SUBTITLE = 'Banking and business service requirements';
const LABEL_BANKING_SERVICES = 'Banking Services Selected';
const LABEL_PREFERRED_BANK = 'Preferred Bank';
const LABEL_ADDITIONAL_SERVICES = 'Additional Services';
const LABEL_MONTHLY_BUDGET = 'Estimated Monthly Budget';

const ERROR_MESSAGE = 'Failed to load banking services';
const LOADING_TEXT = 'Loading banking services...';

export default function BankingServicesContent() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<BankingServicesResponse>({
    queryKey: ['kyc-banking-services', slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/banking-services`
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
                'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(8, 145, 178) 100%)',
            }}
          >
            <BankIcon />
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
        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_BANKING_SERVICES}
          </label>
          <div className="flex flex-col gap-2">
            {data.bankingServices.map((service) => (
              <div
                key={service}
                className="bg-[#f9fafb] px-4 py-3 rounded-[8px] flex items-center gap-3"
              >
                <CheckIcon />
                <span className="text-[14px] font-medium text-[#111827] leading-[20px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_PREFERRED_BANK}
          </label>
          <div className="bg-[#ecfeff] border border-[#a5f3fc] px-[17px] py-[13px] rounded-[8px] flex items-center gap-2">
            <BankBuildingIcon />
            <span className="text-[16px] font-bold text-[#111827] leading-[24px]">
              {data.preferredBank}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_ADDITIONAL_SERVICES}
          </label>
          <div className="grid grid-cols-2 gap-3 capitalize">
            {data.additionalServices.map((service) => (
              <div
                key={service}
                className="bg-[#f9fafb] px-4 py-3 rounded-[8px] flex items-center gap-2"
              >
                <CheckIcon />
                <span className="text-[14px] font-medium text-[#111827] leading-[20px]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_MONTHLY_BUDGET}
          </label>
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] px-[17px] py-[13px] rounded-[8px] flex items-center gap-2">
            <MoneyIcon />
            <span className="text-[16px] font-bold text-[#111827] leading-[24px]">
              {data.monthlyBudget}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
