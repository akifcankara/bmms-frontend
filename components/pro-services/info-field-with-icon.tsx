export function InfoFieldWithIcon({ data }: InfoFieldWithIconProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-bold text-[#6b7280] uppercase tracking-[0.3px] leading-[16px]">
        {data.label}
      </label>
      <div className="flex items-center gap-2">
        {data.icon}
        <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
          {data.value}
        </p>
      </div>
    </div>
  );
}
