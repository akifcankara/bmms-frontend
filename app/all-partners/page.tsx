"use client"
import AllPartnersTable from "@/components/all-partners/allpartners-table"
import FilterTable from "@/components/companies/filter-table"
import { useBreadcrumb } from "@/store/breadcrumb";
import { useEffect } from "react";

export default function AllPartners() {


  const { setContent } = useBreadcrumb();

  useEffect(() => {
    setContent('All Partners', 'Manage corporate entities and their associated clients', 'New Company');
  }, [])

  return (
    <main className="p-2 md:p-6">
      <FilterTable />
      <AllPartnersTable />
    </main>
  )
}