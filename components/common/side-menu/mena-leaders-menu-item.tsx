'use client';

import { usePathname } from 'next/navigation';
import { Medal } from 'lucide-react';
import MenuItem from '../menu-item';

export default function MenaLeadersMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/mena-leaders' || pathname.startsWith('/mena-leaders/');

  return (
    <MenuItem
      to="/mena-leaders"
      label="MENA Leaders"
      icon={<Medal width={18} height={18} />}
      count={39}
      countBg="#FFEDD5"
      countColor="#C2410C"
      active={isActive}
    />
  );
}
