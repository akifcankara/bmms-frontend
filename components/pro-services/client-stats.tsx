'use client';
import SuccessBadge from '../icons/success-badge';
import ClientsBadge from '../icons/clients-badge';
import BagBadge from '../icons/bag-badge';
import CalendarBadge from '../icons/calendar-badge';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid flex-1 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-6">
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

export default function ClientStats() {
  const status = 'Active';
  const clientType = 'Individual';
  const activeModules = 1;
  const joinedDate = 'Jan 15, 2024';

  return (
    <div className="flex gap-[24px] w-full">
      <StatCard icon={<SuccessBadge />} value={status} label="Client Status" />
      <StatCard
        icon={<ClientsBadge />}
        value={clientType}
        label="Client Type"
      />
      <StatCard
        icon={<BagBadge />}
        value={`${activeModules} Active`}
        label="Modules"
      />
      <StatCard
        icon={<CalendarBadge />}
        value={joinedDate}
        label="Joined Date"
      />
    </div>
  );
}
