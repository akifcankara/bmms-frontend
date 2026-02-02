'use client';

import DashboardMenuItem from './dashboard-menu-item';

export default function DashboardSection() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="text-xs uppercase tracking-wide font-semibold"
        style={{ color: 'var(--sidebar-foreground)' }}
      >
        Dashboard
      </div>
      <DashboardMenuItem />
    </div>
  );
}
