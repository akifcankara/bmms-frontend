'use client';

const LABEL_FULL_NAME = 'FULL NAME';
const LABEL_EMAIL_ADDRESS = 'EMAIL ADDRESS';
const LABEL_PHONE_NUMBER = 'PHONE NUMBER';
const LABEL_COMPANY_NAME = 'COMPANY NAME';
const LABEL_CURRENT_LOCATION = 'CURRENT LOCATION';

interface InfoFieldProps {
  label: string;
  value: string;
}

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-bold text-[#6b7280] uppercase tracking-[0.3px] leading-[16px]">
        {label}
      </label>
      <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
        {value}
      </p>
    </div>
  );
}

export default function BasicInfoContent() {
  const fullName = 'Ahmed Mohammed Al Rashid';
  const emailAddress = 'ahmed.alrashid@example.com';
  const phoneNumber = '+971 50 123 4567';
  const companyName = 'TechVenture Solutions LLC';
  const currentLocation = 'Dubai, United Arab Emirates';

  return (
    <div className="grid grid-cols-2 gap-y-[68px] gap-x-[38px]">
      <InfoField label={LABEL_FULL_NAME} value={fullName} />
      <InfoField label={LABEL_EMAIL_ADDRESS} value={emailAddress} />
      <InfoField label={LABEL_PHONE_NUMBER} value={phoneNumber} />
      <InfoField label={LABEL_COMPANY_NAME} value={companyName} />
      <div className="col-span-2">
        <InfoField label={LABEL_CURRENT_LOCATION} value={currentLocation} />
      </div>
    </div>
  );
}
