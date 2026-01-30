"use client";
import Table from "@/components/all-clients/table";
import Filter from "@/components/all-clients/filter";
import Stats from "@/components/all-clients/stats";
import AppShell from "@/components/common/app-shell";
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function AllClients() {

  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent('All Clients', 'Manage and view all client accounts', 'New Client');
  }, [])

  return <AppShell>
    <div className="flex flex-col gap-4">
      <Stats />
      <Filter />
      <Table />
    </div>
  </AppShell>
}