'use client';

import { usePathname } from 'next/navigation';
import MenuItem from '../menu-item';
import Clients from '../../icons/clients';

export default function AllClientsMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/all-clients' || pathname.startsWith('/all-clients/');

  return (
    <MenuItem
      to="/all-clients"
      label="All Contacts"
      icon={<Clients />}
      count={248}
      countColor="#1D4ED8"
      countBg="#DBEAFE"
      active={isActive}
    />
  );
}
