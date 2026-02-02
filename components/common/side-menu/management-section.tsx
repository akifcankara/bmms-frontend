'use client';

import TaskManagementMenuItem from './task-management-menu-item';
import PartnersMenuItem from './partners-menu-item';
import FinancialMenuItem from './financial-menu-item';

export default function ManagementSection() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="text-xs uppercase tracking-wide font-semibold"
        style={{ color: 'var(--sidebar-foreground)' }}
      >
        Management
      </div>
      <TaskManagementMenuItem />
      <PartnersMenuItem />
      <FinancialMenuItem />
    </div>
  );
}
