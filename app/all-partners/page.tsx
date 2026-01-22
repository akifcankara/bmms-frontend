"use client"
import AllPartnersTable from "@/components/all-partners/allpartners-table"
import FilterTable from "@/components/companies/filter-table"

export default function AllPartners() {
    return (
        <main className="p-6">
           <FilterTable />
           <AllPartnersTable />
        </main>
    )
}