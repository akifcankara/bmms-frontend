'use client';

import { usePathname } from 'next/navigation';
import MenuItem from '../menu-item';
import Company from '../../icons/company';

export default function CompaniesMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/companies' || pathname.startsWith('/companies/');

  return (
    <MenuItem
      to="/companies"
      label="Companies"
      icon={<Company />}
      count={89}
      active={isActive}
    />
  );
}
