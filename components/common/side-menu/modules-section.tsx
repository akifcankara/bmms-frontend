'use client';

import ProMenuItem from './pro-menu-item';
import ExpansionMenuItem from './expansion-menu-item';
import MenaLeadersMenuItem from './mena-leaders-menu-item';

export default function ModulesSection() {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="text-xs uppercase tracking-wide font-semibold"
        style={{ color: 'var(--sidebar-foreground)' }}
      >
        Modules
      </div>
      <ProMenuItem />
      <ExpansionMenuItem />
      <MenaLeadersMenuItem />
    </div>
  );
}
