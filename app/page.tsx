import ClientsTable from "@/components/home/clients-table";
import SideMenu from "@/components/common/side-menu";
import Header from "@/components/common/header";
import Stats from "@/components/home/stats";
import Modules from "@/components/home/modules";
import Revenues from "@/components/home/revenues";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideMenu />
        <main className="flex flex-col flex-1 p-6 gap-5">
          <Stats />
          <Modules />
          <ClientsTable />
          <Revenues />
        </main>
      </div>
    </>
  );
}
