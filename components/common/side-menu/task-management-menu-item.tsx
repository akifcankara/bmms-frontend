'use client';

import { usePathname } from 'next/navigation';
import { Star } from 'lucide-react';
import MenuItem from '../menu-item';

export default function TaskManagementMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/task-management' || pathname.startsWith('/task-management/');

  return (
    <MenuItem
      to="/task-management"
      label="Task Management"
      icon={<Star className="w-5 h-5" />}
      count={67}
      countBg="#FEE2E2"
      countColor="#B91C1C"
      active={isActive}
    />
  );
}
