'use client';

import { usePathname } from 'next/navigation';
import MenuItem from '../menu-item';
import World from '../../icons/world';

export default function ExpansionMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/expansion' || pathname.startsWith('/expansion/');

  return (
    <MenuItem
      to="/expansion"
      label="Expansion"
      icon={<World />}
      count={142}
      countBg="#DCFCE7"
      countColor="#15803D"
      active={isActive}
    />
  );
}
