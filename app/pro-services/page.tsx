import ProServicesTable from "@/components/companies/companies-table";
import FilterTable from "@/components/pro-services/filter-table";

export default function ProServicesPage() {
    return  <main className="p-6">
               <FilterTable />
               <ProServicesTable />
            </main>
}