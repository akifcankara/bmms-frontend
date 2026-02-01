'use client';
import BagBadge from '../icons/bag-badge';

interface ModuleDetail {
  label: string;
  value: string;
}

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
  details: ModuleDetail[];
}

function ModuleCard({
  icon,
  title,
  description,
  status,
  details,
}: ModuleCardProps) {
  return (
    <div className="border border-[#e5e7eb] rounded-[8px] p-[17px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon}
          <div className="flex flex-col">
            <p className="text-[16px] font-bold text-[#111827] leading-[24px]">
              {title}
            </p>
            <p className="text-[12px] text-[#6b7280] leading-[16px]">
              {description}
            </p>
          </div>
        </div>
        <div className="bg-[#dcfce7] px-3 py-1 rounded-full">
          <span className="text-[12px] font-medium text-[#15803d] leading-[16px]">
            {status}
          </span>
        </div>
      </div>

      <div className="border-t border-[#e5e7eb] pt-3">
        <div className="flex gap-[366px]">
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

export default function ActiveModules() {
  const modules = [
    {
      icon: <BagBadge />,
      title: 'PRO Module',
      description: 'Business Registration Services',
      status: 'Active',
      details: [
        { label: 'Case ID', value: 'PRO-2024-001' },
        { label: 'Status', value: 'License Issued' },
        { label: 'Last Updated', value: '2 days ago' },
      ],
    },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] font-bold text-[#111827] leading-[28px]">
          Active Modules
        </h2>

        <div className="flex flex-col gap-4">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              icon={module.icon}
              title={module.title}
              description={module.description}
              status={module.status}
              details={module.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
