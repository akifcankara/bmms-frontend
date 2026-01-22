"use client"

import CompaniesTable from "@/components/companies/companies-table"
import FilterTable from "@/components/companies/filter-table"

export default function Companies() {
    return (
        <main className="p-6">
           <FilterTable />
           <CompaniesTable />
        </main>
    )
}