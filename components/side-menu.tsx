import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const icons = {
  dashboard: "http://localhost:3845/assets/be82c2fbcda2430f25f61c05e5c441b8cc2d93be.svg",
  clients: "http://localhost:3845/assets/d0dc73b5ae3976eaefc33beba21b6499226934b4.svg",
  companies: "http://localhost:3845/assets/061f123f26ae2d76c38f9fe61ed162a80842f477.svg",
};

function MenuItem({ label, icon, count, active }: { label: string; icon?: string; count?: number; active?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 rounded-md",
        active ? "bg-[rgba(5,220,130,0.1)]" : "hover:bg-gray-50"
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <img src={icon} alt="" className="w-5 h-5" />}
        <span className={cn("text-sm text-slate-700")}>{label}</span>
      </div>
      {typeof count === "number" && (
        <div className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", active ? "bg-[#dbeafe] text-[#1d4ed8]" : "bg-gray-100 text-slate-600")}>{count}</div>
      )}
    </div>
  );
}

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
        <MenuItem label="Dashboard" icon={icons.dashboard} active />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Clients
        </div>
        <MenuItem label="All Clients" icon={icons.clients} count={248} />
        <MenuItem label="Companies" icon={icons.companies} count={89} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: "var(--sidebar-foreground)" }}>
          Modules
        </div>
        <MenuItem label="PRO" count={67} />
        <MenuItem label="Expansion" count={142} />
        <MenuItem label="MENA Leaders" count={39} />
      </div>

      <div className="mt-auto">
        <div className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: "var(--sidebar-foreground)" }}>
          System
        </div>
        <MenuItem label="Users" />
        <MenuItem label="Settings" />
      </div>
    </aside>
  );
}
