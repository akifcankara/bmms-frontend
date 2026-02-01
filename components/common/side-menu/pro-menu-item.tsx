'use client';

import { usePathname } from 'next/navigation';
import MenuItem from '../menu-item';
import Pro from '../../icons/pro';

export default function ProMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/pro-services' || pathname.startsWith('/pro-services/');

  return (
    <MenuItem
      to="/pro-services"
      label="PRO"
      icon={<Pro />}
      count={67}
      countBg="#DEDEDE"
      countColor="#7E22CE"
      active={isActive}
    />
  );
}
