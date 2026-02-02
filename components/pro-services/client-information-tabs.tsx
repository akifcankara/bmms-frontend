'use client';
import { useState, ReactNode } from 'react';

const TITLE = 'Client Information';
const SUBTITLE = 'Your business and contact details';

const TAB_LABELS = {
  BASIC_INFO: 'Basic Info',
  BUSINESS_INFO: 'Business Info',
  OWNERSHIP_STRUCTURE: 'Ownership & Structure',
  VISA_PRO: 'Visa & PRO Requirements',
  BANKING_SERVICES: 'Banking & Additional Services',
} as const;

type TabKey = keyof typeof TAB_LABELS;

interface TabContent {
  basicInfo: ReactNode;
  businessInfo: ReactNode;
  ownershipStructure: ReactNode;
  visaPro: ReactNode;
  bankingServices: ReactNode;
}

interface ClientInformationTabsProps {
  content: TabContent;
}

export default function ClientInformationTabs({
  content,
}: ClientInformationTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('BASIC_INFO');

  const tabs: Array<{ key: TabKey; label: string }> = [
    { key: 'BASIC_INFO', label: TAB_LABELS.BASIC_INFO },
    { key: 'BUSINESS_INFO', label: TAB_LABELS.BUSINESS_INFO },
    { key: 'OWNERSHIP_STRUCTURE', label: TAB_LABELS.OWNERSHIP_STRUCTURE },
    { key: 'VISA_PRO', label: TAB_LABELS.VISA_PRO },
    { key: 'BANKING_SERVICES', label: TAB_LABELS.BANKING_SERVICES },
  ];

  const renderContent = () => {
    const contentMap = {
      BASIC_INFO: content.basicInfo,
      BUSINESS_INFO: content.businessInfo,
      OWNERSHIP_STRUCTURE: content.ownershipStructure,
      VISA_PRO: content.visaPro,
      BANKING_SERVICES: content.bankingServices,
    };

    return contentMap[activeTab];
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[33px]">
      <div className="flex flex-col gap-6">
        <div className="border-b border-[#e5e7eb] pb-[25px]">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-[12px] flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%)',
              }}
            >
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 2.25H9.625C9.625 1.00781 8.61719 0 7.375 0H6.125C4.88281 0 3.875 1.00781 3.875 2.25H1.25C0.558594 2.25 0 2.80859 0 3.5V16.25C0 16.9414 0.558594 17.5 1.25 17.5H12.25C12.9414 17.5 13.5 16.9414 13.5 16.25V3.5C13.5 2.80859 12.9414 2.25 12.25 2.25ZM6.75 1.25C7.09375 1.25 7.375 1.53125 7.375 1.875C7.375 2.21875 7.09375 2.5 6.75 2.5C6.40625 2.5 6.125 2.21875 6.125 1.875C6.125 1.53125 6.40625 1.25 6.75 1.25ZM8 13.75H3.25C2.90625 13.75 2.625 13.4688 2.625 13.125C2.625 12.7812 2.90625 12.5 3.25 12.5H8C8.34375 12.5 8.625 12.7812 8.625 13.125C8.625 13.4688 8.34375 13.75 8 13.75ZM10.25 10.625H3.25C2.90625 10.625 2.625 10.3438 2.625 10C2.625 9.65625 2.90625 9.375 3.25 9.375H10.25C10.5938 9.375 10.875 9.65625 10.875 10C10.875 10.3438 10.5938 10.625 10.25 10.625ZM10.25 7.5H3.25C2.90625 7.5 2.625 7.21875 2.625 6.875C2.625 6.53125 2.90625 6.25 3.25 6.25H10.25C10.5938 6.25 10.875 6.53125 10.875 6.875C10.875 7.21875 10.5938 7.5 10.25 7.5Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <h2 className="text-[18px] font-bold text-[#111827] leading-[28px]">
                {TITLE}
              </h2>
              <p className="text-[14px] text-[#6b7280] leading-[20px]">
                {SUBTITLE}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`h-12 px-4 py-2 rounded-[8px] font-medium text-[14px] leading-[20px] transition-colors shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00a0d2] to-[#05dc82] text-white'
                    : 'bg-white border border-[#d1d5db] text-[#4b5563] hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}
