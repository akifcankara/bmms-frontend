'use client';

import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import MenuItem from '../menu-item';

export default function UsersMenuItem() {
  const pathname = usePathname();
  const isActive =
    pathname === '/user-management' || pathname.startsWith('/user-management/');

  return (
    <MenuItem
      to="/user-management"
      label="Users"
      icon={<User width={18} height={18} />}
      active={isActive}
    />
  );
}
