'use client';

import { cn } from '@/lib/utils';
import DashboardSection from './side-menu/dashboard-section';
import ClientsSection from './side-menu/clients-section';
import ModulesSection from './side-menu/modules-section';
import ManagementSection from './side-menu/management-section';
import SystemSection from './side-menu/system-section';

type SideMenuProps = {
  isMobileOpen: boolean;
};

const SIDEBAR_BASE_CLASS_NAME =
  'flex flex-col gap-5 w-[255px] h-screen px-3 py-4 bg-white';
const SIDEBAR_MOBILE_CLASS_NAME =
  'fixed left-0 top-0 z-90 transform transition-transform md:sticky md:top-0 md:translate-x-0';
const SIDEBAR_MOBILE_OPEN_CLASS_NAME = 'translate-x-0';
const SIDEBAR_MOBILE_CLOSED_CLASS_NAME = '-translate-x-full';

export default function SideMenu(props: SideMenuProps) {
  const mobileStateClassName = props.isMobileOpen
    ? SIDEBAR_MOBILE_OPEN_CLASS_NAME
    : SIDEBAR_MOBILE_CLOSED_CLASS_NAME;

  return (
    <aside
      className={cn(
        SIDEBAR_BASE_CLASS_NAME,
        SIDEBAR_MOBILE_CLASS_NAME,
        mobileStateClassName
      )}
      style={{ borderRight: '1px solid var(--sidebar-border)' }}
    >
      <DashboardSection />
      <ClientsSection />
      <ModulesSection />
      <ManagementSection />
      <SystemSection />
    </aside>
  );
}
