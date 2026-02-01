export default function InfoField({ value }: InfoFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-bold text-[#6b7280] uppercase tracking-[0.3px] leading-[16px]">
        SPECIFIC LOCATION
      </label>
      <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
        {value}
      </p>
    </div>
  );
}
