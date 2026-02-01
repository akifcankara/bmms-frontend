'use client';

import { usePathname } from 'next/navigation';
import MenuItem from '../menu-item';
import Pro from '../../icons/pro';

export default function TaskManagementMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/task-management' || pathname.startsWith('/task-management/');

  return (
    <MenuItem
      to="/task-management"
      label="Task Management"
      icon={<Pro />}
      count={67}
      countBg="#FEE2E2"
      countColor="#B91C1C"
      active={isActive}
    />
  );
}
