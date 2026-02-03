'use client';

import { usePathname } from 'next/navigation';
import { Building2 } from 'lucide-react';
import MenuItem from '../menu-item';

export default function CompaniesMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/companies' || pathname.startsWith('/companies/');

  return (
    <MenuItem
      to="/companies"
      label="Companies"
      icon={<Building2 className="w-5 h-5" />}
      count={89}
      active={isActive}
    />
  );
}
