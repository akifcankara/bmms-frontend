"use client"
import ProServicesTable from "@/components/companies/companies-table";
import FilterTable from "@/components/pro-services/filter-table";
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function ProServicesPage() {

       const { setContent } = useBreadcrumb();
            
              useEffect(() => {
                setContent('PRO services', 'PRO services', 'New Client');
              }, [])

    return  <main className="p-6">
               <FilterTable />
               <ProServicesTable />
            </main>
}

