'use client';
import OwnershipIcon from '../icons/ownership-icon';
import PartnershipIcon from '../icons/partnership-icon';
import CheckCircleIcon from '../icons/check-circle-icon';

const HEADER_TITLE = 'Ownership & Structure';
const HEADER_SUBTITLE = 'Company ownership details and structure';
const LABEL_OWNERSHIP_TYPE = 'Ownership Type';
const LABEL_SHAREHOLDERS_COUNT = 'Number of Shareholders';
const LABEL_SHAREHOLDER_DETAILS = 'Shareholder Details';
const LABEL_LOCAL_SPONSOR = 'Local Sponsor';

interface Shareholder {
  id: number;
  name: string;
  nationality: string;
  ownership: string;
  passport: string;
}

const SHAREHOLDERS: Shareholder[] = [
  {
    id: 1,
    name: 'Ahmed Mohammed Al Rashid',
    nationality: 'United Arab Emirates',
    ownership: '60%',
    passport: 'AE1234567',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    nationality: 'United Kingdom',
    ownership: '40%',
    passport: 'UK9876543',
  },
];

export default function OwnershipStructureContent() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[33px] flex flex-col gap-6">
      <div className="border-b border-[#e5e7eb] pb-[25px]">
        <div className="flex items-center gap-4">
          <div
            className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%)',
            }}
          >
            <OwnershipIcon />
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
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
              {LABEL_OWNERSHIP_TYPE}
            </label>
            <div className="flex items-center">
              <div className="bg-[#e0e7ff] w-[32px] h-[32px] rounded-[8px] flex items-center justify-center">
                <PartnershipIcon />
              </div>
              <span className="text-[16px] font-bold text-[#111827] leading-[24px] pl-2">
                Partnership
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
              {LABEL_SHAREHOLDERS_COUNT}
            </label>
            <span className="text-[16px] font-bold text-[#111827] leading-[24px]">
              2 Shareholders
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_SHAREHOLDER_DETAILS}
          </label>
          <div className="flex flex-col gap-4">
            {SHAREHOLDERS.map((shareholder) => (
              <div
                key={shareholder.id}
                className="bg-[rgba(238,242,255,0.3)] border-2 border-[#e0e7ff] rounded-[12px] px-[22px] py-[22px] pb-[38px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#4f46e5] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                      <span className="text-[16px] font-bold text-white">
                        {shareholder.id}
                      </span>
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
                        {shareholder.name}
                      </p>
                      <p className="text-[14px] text-[#4b5563] leading-[20px]">
                        {shareholder.nationality}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="bg-[#4f46e5] px-3 py-1 rounded-[8px]">
                      <span className="text-[18px] font-bold text-white leading-[28px]">
                        {shareholder.ownership}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6b7280] leading-[16px]">
                      Passport: {shareholder.passport}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold text-[#6b7280] tracking-[0.3px] uppercase leading-[16px]">
            {LABEL_LOCAL_SPONSOR}
          </label>
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] px-[17px] py-[13px] rounded-[8px] flex items-center gap-2">
            <CheckCircleIcon />
            <span className="text-[16px] font-bold text-[#111827] leading-[24px]">
              No local sponsor required - 100% foreign ownership
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
