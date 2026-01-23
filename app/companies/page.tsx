"use client"

import CompaniesTable from "@/components/companies/companies-table"
import FilterTable from "@/components/companies/filter-table"
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function Companies() {

      const { setContent } = useBreadcrumb();
        
          useEffect(() => {
            setContent('Companies', 'Manage corporate entities and their associated clients', 'New Company');
          }, [])

    return (
        <main className="p-2 md:p-6">
           <FilterTable />
           <CompaniesTable />
        </main>
    )
}