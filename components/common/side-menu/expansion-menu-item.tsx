'use client';

import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import MenuItem from '../menu-item';

export default function ExpansionMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/expansion' || pathname.startsWith('/expansion/');

  return (
    <MenuItem
      to="/expansion"
      label="Expansion"
      icon={<Globe className="w-5 h-5" />}
      count={142}
      countBg="#DCFCE7"
      countColor="#15803D"
      active={isActive}
    />
  );
}
