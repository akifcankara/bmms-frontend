"use client"
import AppShell from "@/components/common/app-shell";
import PendingInvitations from "@/components/user-management/pending-invitationts";
import RolesPermissions from "@/components/user-management/roles-permissions";
import Stats from "@/components/user-management/stats";
import Table from "@/components/user-management/table";
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function UserManagement() {

    const { setContent } = useBreadcrumb();

    useEffect(() => {
        setContent('User Managment', 'Manage team members, roles, and permissions across the platform', 'New Client');
    }, [])

    return <AppShell> <main className="flex flex-col gap-3">
        <Stats />
        <Table />
        <div className="flex flex-wrap gap-2">
            <PendingInvitations />
            <RolesPermissions />
        </div>
    </main>
    </AppShell>
}