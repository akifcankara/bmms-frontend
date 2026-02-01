'use client';
import PassportIcon from '../icons/passport-icon';
import PeopleIcon from '../icons/people-icon';
import CheckCircleIcon from '../icons/check-circle-icon';
import CheckIcon from '../icons/check-icon';

const HEADER_TITLE = 'Visa & PRO Requirements';
const HEADER_SUBTITLE = 'Visa and PRO service requirements';
const LABEL_VISAS_REQUIRED = 'Number of Visas Required';
const LABEL_VISA_TYPES = 'Visa Types Needed';
const LABEL_PRO_SERVICES = 'PRO Services Selected';

const VISA_TYPES = [
  { label: 'Investor Visa (2)', count: 2 },
  { label: 'Employee Visa (3)', count: 3 },
];

const PRO_SERVICES = [
  'Visa Processing & Stamping',
  'Emirates ID Processing',
  'Medical Test Arrangements',
  'Labor Contract Registration',
];

export default function VisaProContent() {
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
            <PassportIcon />
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
            <PeopleIcon />
            <span className="text-[24px] font-bold text-[#111827] leading-[32px]">
              5 Visas
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_VISA_TYPES}
          </label>
          <div className="grid grid-cols-2 gap-3">
            {VISA_TYPES.map((visa) => (
              <div
                key={visa.label}
                className="bg-[#f0fdf4] border border-[#bbf7d0] px-[17px] py-[13px] rounded-[8px] flex items-center gap-2"
              >
                <CheckCircleIcon />
                <span className="text-[14px] font-bold text-[#111827] leading-[20px]">
                  {visa.label}
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
            {PRO_SERVICES.map((service) => (
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
      </div>
    </div>
  );
}
