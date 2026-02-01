'use client';

import { usePathname } from 'next/navigation';
import MenuItem from './menu-item';
import {
  ChartLine,
  DollarSign,
  Handshake,
  Medal,
  Settings,
  User,
} from 'lucide-react';
import Clients from '../icons/clients';
import Company from '../icons/company';
import Pro from '../icons/pro';
import World from '../icons/world';
import Leader from '../icons/leader';
import { cn } from '@/lib/utils';

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
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + '/');

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
      <div className="flex flex-col gap-2">
        <div
          className="text-xs uppercase tracking-wide font-semibold"
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          Dashboard
        </div>
        <MenuItem
          to="/"
          label="Dashboard"
          icon={<ChartLine color="#4B5563" width={20} height={20} />}
          active={isActive('/')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="text-xs uppercase tracking-wide font-semibold"
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          Clients
        </div>
        <MenuItem
          to="/all-clients"
          label="All Clients"
          icon={<Clients />}
          count={248}
          countColor="#1D4ED8"
          countBg="#DBEAFE"
          active={isActive('/all-clients')}
        />
        <MenuItem
          to="/companies"
          label="Companies"
          icon={<Company />}
          count={89}
          active={isActive('/companies')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="text-xs uppercase tracking-wide font-semibold"
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          Modules
        </div>
        <MenuItem
          to="/pro-services"
          label="PRO"
          icon={<Pro />}
          count={67}
          countBg="#DEDEDE"
          countColor="#7E22CE"
          active={isActive('/pro-services')}
        />
        <MenuItem
          to="/"
          label="Expansion"
          icon={<World />}
          count={142}
          countBg="#DCFCE7"
          countColor="#15803D"
          active={isActive('/expansion')}
        />
        <MenuItem
          to="/"
          label="MENA Leaders"
          icon={<Medal width={18} height={18} />}
          count={39}
          countBg="#FFEDD5"
          countColor="#C2410C"
          active={isActive('/mena-leaders')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="text-xs uppercase tracking-wide font-semibold"
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          Management
        </div>
        <MenuItem
          to="/task-management"
          label="Task Management"
          icon={<Pro />}
          count={67}
          countBg="#FEE2E2"
          countColor="#B91C1C"
          active={isActive('/task-management')}
        />
        <MenuItem
          to="/all-partners"
          label="Partners"
          icon={<Handshake width={18} height={18} />}
          active={isActive('/all-partners')}
        />
        <MenuItem
          to="/financial-management"
          label="Financial"
          icon={<DollarSign width={18} height={18} />}
          active={isActive('/financial-management')}
        />
      </div>

      <div>
        <div
          className="text-xs uppercase tracking-wide font-semibold mb-2"
          style={{ color: 'var(--sidebar-foreground)' }}
        >
          System
        </div>
        <MenuItem
          to="/user-management"
          label="Users"
          icon={<User width={18} height={18} />}
          active={isActive('/user-management')}
        />
        <MenuItem
          to="/settings"
          label="Settings"
          icon={<Settings width={18} height={18} />}
          active={isActive('/settings')}
        />
      </div>
    </aside>
  );
}
