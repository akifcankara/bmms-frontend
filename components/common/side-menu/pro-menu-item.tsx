'use client';

import { usePathname } from 'next/navigation';
import { Star } from 'lucide-react';
import MenuItem from '../menu-item';

export default function ProMenuItem({ counts }: { counts?: SideMenuCounts }) {
  const pathname = usePathname();
  const isActive =
    pathname === '/pro-services' || pathname.startsWith('/pro-services/');

  return (
    <MenuItem
      to="/pro-services"
      label="PRO"
      icon={<Star className="w-5 h-5" />}
      count={counts?.kycApplicationCount}
      countBg="#DEDEDE"
      countColor="#7E22CE"
      active={isActive}
    />
  );
}
