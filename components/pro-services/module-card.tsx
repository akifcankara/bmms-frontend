import BagBadge from '../icons/bag-badge';

interface ModuleCardProps {
  title: string;
  description: string;
  status: string;
  details: ModuleDetail[];
}

export function ModuleCard({
  title,
  description,
  status,
  details,
}: ModuleCardProps) {
  return (
    <div className="border border-[#e5e7eb] rounded-[8px] p-[17px]">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-3">
        <div className="flex items-center gap-3">
          <BagBadge />
          <div className="flex flex-col">
            <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
              {title}
            </p>
            <p className="text-[12px] text-[#6b7280] leading-[16px]">
              {description}
            </p>
          </div>
        </div>
        <div className="bg-[#dcfce7] px-3 py-1 rounded-full w-fit">
          <span className="text-[12px] font-medium text-[#15803d] leading-[16px]">
            {status}
          </span>
        </div>
      </div>

      <div className="border-t border-[#e5e7eb] pt-3">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {details.map((detail, index) => (
            <div key={index} className="flex-1">
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-[#6b7280] leading-[16px]">
                  {detail.label}
                </p>
                <p className="text-[14px] font-medium text-[#111827] leading-[20px]">
                  {detail.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
