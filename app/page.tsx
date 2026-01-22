import ClientsTable from "@/components/home/clients-table";
import Stats from "@/components/home/stats";
import Modules from "@/components/home/modules";
import Revenues from "@/components/home/revenues";

export default function Home() {
  return (
    <>
          <Stats />
          <Modules />
          <ClientsTable />
          <Revenues />
    </>
  );
}
