'use client';

import { usePathname } from 'next/navigation';
import { ChartLine } from 'lucide-react';
import MenuItem from '../menu-item';

export default function DashboardMenuItem() {
  const pathname = usePathname();
  const isActive = pathname === '/';

  return (
    <MenuItem
      to="/"
      label="Dashboard"
      icon={<ChartLine color="#4B5563" width={20} height={20} />}
      active={isActive}
    />
  );
}
