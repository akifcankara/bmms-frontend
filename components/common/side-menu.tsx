import MenuItem from "./menu-item";
import { ChartLine, DollarSign, Handshake, Settings, User } from "lucide-react";
import Clients from "../icons/clients";
import Company from "../icons/company";
import Pro from "../icons/pro";
import World from "../icons/world";
import Leader from "../icons/leader";

export default function SideMenu() {
  return (
    <aside
      className="flex flex-col gap-5 w-[255px] h-screen px-3 py-4 bg-white"
      style={{ borderRight: "1px solid var(--sidebar-border)" }}
    >
      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Dashboard
        </div>
        <MenuItem 
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
            label="All Clients" 
            icon={<Clients />} 
            count={248}
            countColor="#1D4ED8"
            countBg="#DBEAFE"
        />
        <MenuItem label="Companies" icon={<Company />} count={89} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Modules
        </div>
        <MenuItem 
            label="PRO" 
            icon={<Pro />} 
            count={67}
            countBg="#DEDEDE"
            countColor="#7E22CE"
        />
        <MenuItem 
            label="Expansion" 
            icon={<World/>} 
            count={142} 
            countBg="#DCFCE7"
            countColor="#15803D"
        />
        <MenuItem 
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
            label="Task Management" 
            icon={<Pro />} 
            count={67} 
            countBg="#FEE2E2"
            countColor="#B91C1C"
        />
        <MenuItem label="Partners" icon={<Handshake width={18} height={18}  />} />
        <MenuItem label="Financial" icon={<DollarSign width={18} height={18} />} />
      </div>

      <div>
        <div className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "var(--sidebar-foreground)" }}>
          System
        </div>
        <MenuItem label="Users" icon={<User width={18} height={18} /> } />
        <MenuItem label="Settings" icon={<Settings width={18} height={18} /> } />
      </div>
    </aside>
  );
}
