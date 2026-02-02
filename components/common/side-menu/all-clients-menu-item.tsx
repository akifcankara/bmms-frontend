'use client';

import { usePathname } from 'next/navigation';
import { Users } from 'lucide-react';
import MenuItem from '../menu-item';

export default function AllClientsMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/all-clients' || pathname.startsWith('/all-clients/');

  return (
    <MenuItem
      to="/all-clients"
      label="All Contacts"
      icon={<Users className="w-5 h-5" />}
      count={248}
      countColor="#1D4ED8"
      countBg="#DBEAFE"
      active={isActive}
    />
  );
}
