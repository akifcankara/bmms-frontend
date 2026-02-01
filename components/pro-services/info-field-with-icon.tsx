export function InfoFieldWithIcon({ value, icon }: InfoFieldWithIconProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-bold text-[#6b7280] uppercase tracking-[0.3px] leading-[16px]">
        SETUP TYPE
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
