'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import InfoField from './info-field';
import { InfoFieldWithIcon } from './info-field-with-icon';
import { Plus, IdCard, Calendar, BadgeCheck } from 'lucide-react';

const TITLE = 'Business Setup Intent';
const SUBTITLE = 'Your business setup plans and preferences';
const LABEL_SETUP_TYPE = 'Setup Type';
const LABEL_PREFERRED_JURISDICTION = 'Preferred Jurisdiction';
const LABEL_SPECIFIC_LOCATION = 'Specific Location';
const LABEL_EXPECTED_TIMELINE = 'Expected Timeline';
const ERROR_MESSAGE = 'Failed to load business information';
const LOADING_TEXT = 'Loading business information...';
const QUERY_KEY_BUSINESS_INFO = 'kyc-business-info';

export default function BusinessInfoContent() {
  const params = useParams();
  const slug = params.client as string;

  const { data, isLoading, isError } = useQuery<BusinessInfoResponse>({
    queryKey: [QUERY_KEY_BUSINESS_INFO, slug],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/kyc/application/${slug}/business-info`
      );
      return response.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="bg-white w-full p-4">
        <p className="text-[12px] text-[#676a7b]">{LOADING_TEXT}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white w-full p-4">
        <p className="text-red-500 text-sm">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const setupTypeField: InfoFieldWithIconData = {
    label: LABEL_SETUP_TYPE,
    value: data.companySetupType,
    icon: (
      <div className="w-8 h-8 rounded-[8px] bg-[#ccfbf1] flex items-center justify-center">
        <Plus className="w-4 h-4 text-[#0D9488]" />
      </div>
    ),
  };

  const preferredJurisdictionField: InfoFieldWithIconData = {
    label: LABEL_PREFERRED_JURISDICTION,
    value: data.preferredJurisdiction,
    icon: (
      <div className="w-8 h-8 rounded-[8px] bg-[#dcfce7] flex items-center justify-center">
        <IdCard className="w-[14px] h-4 text-[#16A34A]" />
      </div>
    ),
  };

  const specificLocationField: InfoFieldData = {
    label: LABEL_SPECIFIC_LOCATION,
    value: data.specificLocation,
  };

  const expectedTimelineField: InfoFieldWithIconData = {
    label: LABEL_EXPECTED_TIMELINE,
    value: data.expectedTimeline,
    icon: (
      <div className="w-8 h-8 rounded-[8px] bg-[#dbeafe] flex items-center justify-center">
        <Calendar className="w-[14px] h-4 text-[#2563EB]" />
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-[#e5e7eb] pb-[25px]">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-[12px] flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(147, 51, 234) 100%)',
            }}
          >
            <BadgeCheck className="w-[18px] h-[18px] text-white" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-[#111827] leading-[28px]">
              {TITLE}
            </h3>
            <p className="text-[14px] text-[#6b7280] leading-[20px]">
              {SUBTITLE}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[76px] gap-x-[38px] capitalize">
        <InfoFieldWithIcon data={setupTypeField} />

        <InfoFieldWithIcon data={preferredJurisdictionField} />

        <InfoField data={specificLocationField} />

        <InfoFieldWithIcon data={expectedTimelineField} />
      </div>
    </div>
  );
}
