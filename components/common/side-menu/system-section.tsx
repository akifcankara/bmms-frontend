'use client';

import UsersMenuItem from './users-menu-item';
import SettingsMenuItem from './settings-menu-item';

export default function SystemSection() {
  return (
    <div>
      <div
        className="text-xs uppercase tracking-wide font-semibold mb-2"
        style={{ color: 'var(--sidebar-foreground)' }}
      >
        System
      </div>
      <UsersMenuItem />
      <SettingsMenuItem />
    </div>
  );
}
