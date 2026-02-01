'use client';

const TITLE = 'Business Setup Intent';
const SUBTITLE = 'Your business setup plans and preferences';

const LABEL_SETUP_TYPE = 'SETUP TYPE';
const LABEL_PREFERRED_JURISDICTION = 'PREFERRED JURISDICTION';
const LABEL_SPECIFIC_LOCATION = 'SPECIFIC LOCATION';
const LABEL_EXPECTED_TIMELINE = 'EXPECTED TIMELINE';

interface InfoFieldWithIconProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface InfoFieldProps {
  label: string;
  value: string;
}

function InfoFieldWithIcon({ label, value, icon }: InfoFieldWithIconProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-bold text-[#6b7280] uppercase tracking-[0.3px] leading-[16px]">
        {label}
      </label>
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
          {value}
        </p>
      </div>
    </div>
  );
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

export default function BusinessInfoContent() {
  const setupType = 'New Company Formation';
  const preferredJurisdiction = 'United Arab Emirates';
  const specificLocation = 'Dubai - Free Zone (DMCC)';
  const expectedTimeline = '1 Month (2-4 weeks)';

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
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.15625 0.28125C8.34375 0.09375 8.65625 0 9 0C9.3125 0 9.625 0.09375 9.8125 0.28125L11.5 2L13.9688 1.65625C14.2812 1.625 14.5938 1.71875 14.8438 1.90625C15.0625 2.125 15.1875 2.40625 15.1875 2.71875L15.5 5.1875L17.1875 6.875C17.375 7.0625 17.5 7.375 17.5 7.6875C17.5 8 17.4062 8.3125 17.2188 8.5L15.5312 10.1875L15.8438 12.6562C15.875 12.9688 15.7812 13.2812 15.5938 13.5312C15.375 13.75 15.0938 13.875 14.7812 13.875L12.3125 14.1875L10.625 15.875C10.4375 16.0625 10.125 16.1875 9.8125 16.1875C9.5 16.1875 9.1875 16.0938 9 15.9062L7.3125 14.2188L4.84375 14.5312C4.53125 14.5625 4.21875 14.4688 3.96875 14.2812C3.75 14.0625 3.625 13.7812 3.625 13.4688L3.3125 11L1.625 9.3125C1.4375 9.125 1.3125 8.8125 1.3125 8.5C1.3125 8.1875 1.40625 7.875 1.59375 7.6875L3.28125 6L2.96875 3.53125C2.9375 3.21875 3.03125 2.90625 3.21875 2.65625C3.4375 2.4375 3.71875 2.3125 4.03125 2.3125L6.5 2L8.15625 0.28125ZM5 9.21875L7.40625 11.625C7.71875 11.9375 8.21875 11.9375 8.53125 11.625L13.4062 6.75C13.7188 6.4375 13.7188 5.9375 13.4062 5.625C13.0938 5.3125 12.5938 5.3125 12.2812 5.625L7.96875 9.9375L6.125 8.09375C5.8125 7.78125 5.3125 7.78125 5 8.09375C4.6875 8.40625 4.6875 8.90625 5 9.21875ZM9 18L12.5625 17.5312L15.0312 15.0625L15.5 11.5L18 9L15.5312 6.4375L15.0625 2.875L11.5 2.40625L9 0L6.4375 2.46875L2.875 2.9375L2.40625 6.5L0 9L2.46875 11.5625L2.9375 15.125L6.5 15.5938L9 18Z"
                fill="white"
              />
            </svg>
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

      <div className="grid grid-cols-2 gap-y-[76px] gap-x-[38px]">
        <InfoFieldWithIcon
          label={LABEL_SETUP_TYPE}
          value={setupType}
          icon={
            <div className="w-8 h-8 rounded-[8px] bg-[#ccfbf1] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7H9V2C9 1.45 8.55 1 8 1C7.45 1 7 1.45 7 2V7H2C1.45 7 1 7.45 1 8C1 8.55 1.45 9 2 9H7V14C7 14.55 7.45 15 8 15C8.55 15 9 14.55 9 14V9H14C14.55 9 15 8.55 15 8C15 7.45 14.55 7 14 7Z"
                  fill="#0D9488"
                />
              </svg>
            </div>
          }
        />

        <InfoFieldWithIcon
          label={LABEL_PREFERRED_JURISDICTION}
          value={preferredJurisdiction}
          icon={
            <div className="w-8 h-8 rounded-[8px] bg-[#dcfce7] flex items-center justify-center">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1H1C0.45 1 0 1.45 0 2V14C0 14.55 0.45 15 1 15H13C13.55 15 14 14.55 14 14V2C14 1.45 13.55 1 13 1ZM3.5 4.5C3.5 3.67 4.17 3 5 3C5.83 3 6.5 3.67 6.5 4.5C6.5 5.33 5.83 6 5 6C4.17 6 3.5 5.33 3.5 4.5ZM9 12H2V11C2 9.34 5.33 8.5 7 8.5C8.67 8.5 12 9.34 12 11V12H9Z"
                  fill="#16A34A"
                />
              </svg>
            </div>
          }
        />

        <InfoField label={LABEL_SPECIFIC_LOCATION} value={specificLocation} />

        <InfoFieldWithIcon
          label={LABEL_EXPECTED_TIMELINE}
          value={expectedTimeline}
          icon={
            <div className="w-8 h-8 rounded-[8px] bg-[#dbeafe] flex items-center justify-center">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2H10V1C10 0.45 9.55 0 9 0C8.45 0 8 0.45 8 1V2H6V1C6 0.45 5.55 0 5 0C4.45 0 4 0.45 4 1V2H3C1.89 2 1.01 2.9 1.01 4L1 14C1 15.1 1.89 16 3 16H11C12.1 16 13 15.1 13 14V4C13 2.9 12.1 2 11 2ZM11 14H3V7H11V14ZM11 5H3V4H11V5Z"
                  fill="#2563EB"
                />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
}
