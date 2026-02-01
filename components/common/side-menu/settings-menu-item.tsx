'use client';

import { usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';
import MenuItem from '../menu-item';

export default function SettingsMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/settings' || pathname.startsWith('/settings/');

  return (
    <MenuItem
      to="/settings"
      label="Settings"
      icon={<Settings width={18} height={18} />}
      active={isActive}
    />
  );
}
