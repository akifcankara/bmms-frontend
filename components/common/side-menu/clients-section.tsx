'use client';

import AllClientsMenuItem from './all-clients-menu-item';
import CompaniesMenuItem from './companies-menu-item';
export default function ClientsSection() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="text-xs uppercase tracking-wide font-semibold"
        style={{ color: 'var(--sidebar-foreground)' }}
      >
        Clients
      </div>
      <AllClientsMenuItem />
      <CompaniesMenuItem />
    </div>
  );
}
