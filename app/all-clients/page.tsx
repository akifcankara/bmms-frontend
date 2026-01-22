import ClientsTable from "@/components/all-clients/clients-table";
import FilterTable from "@/components/all-clients/filter-table";
import Stats from "@/components/all-clients/stats";

export default function AllClients(){
    return <div className="flex flex-col gap-4">
        <Stats />
        <FilterTable />
        <ClientsTable />
    </div>
}