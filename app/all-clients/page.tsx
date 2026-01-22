"use client";
import ClientsTable from "@/components/all-clients/clients-table";
import FilterTable from "@/components/all-clients/filter-table";
import Stats from "@/components/all-clients/stats";
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function AllClients(){

      const { setContent } = useBreadcrumb();
    
      useEffect(() => {
        setContent('All Clients', 'Manage and view all client accounts', 'New Client');
      }, [])
    

    return <div className="flex flex-col gap-4">
        <Stats />
        <FilterTable />
        <ClientsTable />
    </div>
}