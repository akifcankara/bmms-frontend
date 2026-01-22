"use client"
import ClientsTable from "@/components/home/clients-table";
import Stats from "@/components/home/stats";
import Modules from "@/components/home/modules";
import Revenues from "@/components/home/revenues";
import PartnerPerformance from "@/components/home/partner-performance";
import { useEffect } from "react";
import { useBreadcrumb } from "@/store/breadcrumb";

export default function Home() {

  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent('Operations Dashboard', 'Manage clients, cases, and business operations', 'New Client');
  }, [])

  return (
    <>
          <Stats />
           <Modules />
          <ClientsTable />
          <Revenues />
          <PartnerPerformance />
    </>
  );
}
