'use client';

import { usePathname } from 'next/navigation';
import { DollarSign } from 'lucide-react';
import MenuItem from '../menu-item';

export default function FinancialMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/financial-management' ||
    pathname.startsWith('/financial-management/');

  return (
    <MenuItem
      to="/financial-management"
      label="Financial"
      icon={<DollarSign width={18} height={18} />}
      active={isActive}
    />
  );
}
