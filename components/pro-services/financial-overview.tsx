'use client';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const LABEL_PAID_AMOUNT = 'Paid Amount';
const LABEL_TOTAL_COMMISSION = 'Total Comession';
const BUTTON_SAVE_TEXT = 'save';

export default function FinancialOverview() {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] font-bold text-[#111827] leading-[28px]">
          Financial Overview
        </h2>

        <div className="flex flex-col gap-3">
          <Select>
            <SelectTrigger className="w-full h-[44px] border-[#dcdcdc]">
              <SelectValue placeholder="Select Partner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="partner1">Partner 1</SelectItem>
              <SelectItem value="partner2">Partner 2</SelectItem>
              <SelectItem value="partner3">Partner 3</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-[526px]">
              <label className="text-[14px] font-bold text-[#374151] leading-[20px]">
                {LABEL_PAID_AMOUNT}
              </label>
              <Input
                type="text"
                value="$12.500"
                className="border-[#d1d5db] px-[17px] py-[15px] h-auto text-[16px] text-[#656565]"
                readOnly
              />
            </div>

            <div className="flex flex-col gap-2 w-[526px]">
              <label className="text-[14px] font-bold text-[#374151] leading-[20px]">
                {LABEL_TOTAL_COMMISSION}
              </label>
              <Input
                type="text"
                value="$1.875"
                className="border-[#d1d5db] px-[17px] py-[15px] h-auto text-[16px] text-[#656565]"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-gradient-to-r from-[#00a0d2] to-[#05dc82] text-white px-5 py-2.5 rounded-[8px] w-[160px] h-[40px] font-medium text-[16px] leading-[22px]">
            {BUTTON_SAVE_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
}
