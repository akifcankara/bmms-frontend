"use client";

import { useState } from "react";
import Header from "./header";
import SideMenu from "./side-menu";
import Image from "next/image";

type AppShellProps = {
    children: React.ReactNode;
};

const DEFAULT_SIDEBAR_OPEN = false;
const OVERLAY_CLASS_NAME = "fixed inset-0 bg-black/40 md:hidden z-30";
const OVERLAY_LABEL = "Close menu";

export default function FormShell(props: AppShellProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(DEFAULT_SIDEBAR_OPEN);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((isOpen) => !isOpen);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-50 flex items-center justify-between gap-5 bg-white p-5 px-10 border-b-1 border-gray-200">
                <div className="flex items-center w-full">
                    <Image src={"/logo.jpg"} alt="BMMS" width={125} height={42} />
                    <h1 className="text-2xl font-bold mx-auto">{'KYC PRO Form'}</h1>
                </div>
            </header>
            <div className="flex">
                <main className="flex flex-col flex-1 min-w-0 gap-5">
                    {props.children}
                </main>
            </div>
        </div>
    );
}
