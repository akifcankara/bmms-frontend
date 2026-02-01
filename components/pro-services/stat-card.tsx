export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid flex-1 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-6 capitalize">
      <div className="flex flex-col gap-6">
        <div>{icon}</div>
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-bold text-[#111827] leading-[32px]">
            {value}
          </p>
          <p className="text-[14px] text-[#6b7280] leading-[20px]">{label}</p>
        </div>
      </div>
    </div>
  );
}
