import MenuItem from "./menu-item";
import { ChartLine, DollarSign, Handshake, Settings, User } from "lucide-react";
import Clients from "../icons/clients";
import Company from "../icons/company";
import Pro from "../icons/pro";
import World from "../icons/world";
import Leader from "../icons/leader";
import { cn } from "@/lib/utils";

type SideMenuProps = {
  isMobileOpen: boolean;
};

const SIDEBAR_BASE_CLASS_NAME =
  "flex flex-col gap-5 w-[255px] h-screen px-3 py-4 bg-white";
const SIDEBAR_MOBILE_CLASS_NAME =
  "fixed left-0 top-0 z-90 transform transition-transform md:sticky md:top-0 md:translate-x-0";
const SIDEBAR_MOBILE_OPEN_CLASS_NAME = "translate-x-0";
const SIDEBAR_MOBILE_CLOSED_CLASS_NAME = "-translate-x-full";

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
      style={{ borderRight: "1px solid var(--sidebar-border)" }}
    >
      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Dashboard
        </div>
        <MenuItem 
            to="/"
            label="Dashboard" 
            icon={<ChartLine color="#4B5563" width={20} height={20} />} 
            active 
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Clients
        </div>
        <MenuItem 
            to="/all-clients"
            label="All Clients" 
            icon={<Clients />} 
            count={248}
            countColor="#1D4ED8"
            countBg="#DBEAFE"
        />
        <MenuItem to="/companies" label="Companies" icon={<Company />} count={89} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Modules
        </div>
        <MenuItem 
          to="/pro-services"
            label="PRO" 
            icon={<Pro />} 
            count={67}
            countBg="#DEDEDE"
            countColor="#7E22CE"
        />
        <MenuItem 
          to="/"
            label="Expansion" 
            icon={<World/>} 
            count={142} 
            countBg="#DCFCE7"
            countColor="#15803D"
        />
        <MenuItem 
          to="/"
            label="MENA Leaders" 
            icon={<Leader />} 
            count={39}
            countBg="#FFEDD5"
            countColor="#C2410C"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Management
        </div>
        <MenuItem 
          to="/"
            label="Task Management" 
            icon={<Pro />} 
            count={67} 
            countBg="#FEE2E2"
            countColor="#B91C1C"
        />
        <MenuItem to="/" label="Partners" icon={<Handshake width={18} height={18}  />} />
        <MenuItem to="/" label="Financial" icon={<DollarSign width={18} height={18} />} />
      </div>

      <div>
        <div className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "var(--sidebar-foreground)" }}>
          System
        </div>
        <MenuItem to="/" label="Users" icon={<User width={18} height={18} /> } />
        <MenuItem to="/" label="Settings" icon={<Settings width={18} height={18} /> } />
      </div>
    </aside>
  );
}
