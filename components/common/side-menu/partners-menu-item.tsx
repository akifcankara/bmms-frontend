'use client';

import { usePathname } from 'next/navigation';
import { Handshake } from 'lucide-react';
import MenuItem from '../menu-item';

export default function PartnersMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/all-partners' || pathname.startsWith('/all-partners/');

  return (
    <MenuItem
      to="/all-partners"
      label="Partners"
      icon={<Handshake width={18} height={18} />}
      active={isActive}
    />
  );
}
