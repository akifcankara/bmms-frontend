"use client";

import { useState } from "react";
import Header from "./header";
import SideMenu from "./side-menu";

type AppShellProps = {
  children: React.ReactNode;
};

const DEFAULT_SIDEBAR_OPEN = false;
const OVERLAY_CLASS_NAME = "fixed inset-0 bg-black/40 md:hidden z-30";
const OVERLAY_LABEL = "Close menu";

export default function AppShell(props: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(DEFAULT_SIDEBAR_OPEN);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onMenuToggle={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex">
        <SideMenu isMobileOpen={isSidebarOpen} />
        <main className="flex flex-col flex-1 min-w-0 p-6 gap-5">
          {props.children}
        </main>
      </div>
      {isSidebarOpen && (
        <button
          aria-label={OVERLAY_LABEL}
          type="button"
          className={OVERLAY_CLASS_NAME}
          onClick={handleCloseSidebar}
        />
      )}
    </div>
  );
}
