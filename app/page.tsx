import Card from "@/components/card";
import ClientsTable from "@/components/clients-table";
import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import ModuleCard from "@/components/module-card";
import RevenueCard from "@/components/revenue-card";
import PartnersTable from "@/components/partners-table";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <SideMenu />
        <main className="flex-1 p-6">
          <div className="max-w-[1184px] mx-auto">
            <header className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Operations Dashboard</h1>
                <p className="text-sm text-slate-500">Manage clients, cases, and business operations</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="secondary">+ New Client</Button>
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center">JA</div>
              </div>
            </header>

            <section className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <Card title="Total Clients" value={248} hint="23 new this month" />
              </div>
              <div>
                <Card title="PRO Cases" value={67} hint="15 pending approval" />
              </div>
              <div>
                <Card title="Expansion Projects" value={142} hint="28 in progress" />
              </div>
              <div>
                <Card title="MENA Leaders" value={39} hint="7 under review" />
              </div>
            </section>
            <section className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <ModuleCard
                  title="PRO Module"
                  subtitle="Business Registration"
                  items={[
                    { label: "Active", value: 32 },
                    { label: "Pending", value: 15 },
                    { label: "In progress", value: 12 },
                    { label: "Completed", value: 8 },
                  ]}
                  completion={68}
                />
              </div>
              <div>
                <ModuleCard
                  title="Expansion Module"
                  subtitle="Market Expansion"
                  items={[
                    { label: "Active", value: 56 },
                    { label: "Planning", value: 28 },
                    { label: "In progress", value: 34 },
                    { label: "Completed", value: 24 },
                  ]}
                  completion={75}
                />
              </div>
              <div>
                <ModuleCard
                  title="MENA Leaders"
                  subtitle="Leadership Program"
                  items={[
                    { label: "Approved", value: 18 },
                    { label: "In Review", value: 7 },
                    { label: "In Progress", value: 9 },
                    { label: "Rejected", value: 5 },
                  ]}
                  completion={82}
                />
              </div>
            </section>

            <section className="grid grid-cols-3 gap-4 mb-6">
              <RevenueCard title="$963,600" value="$963,600" subtitle="Total Revenue (This Month)" colorFrom="#1e40af" colorTo="#06b6d4" />
              <RevenueCard title="$144,540" value="$144,540" subtitle="Partner Commissions" colorFrom="#059669" colorTo="#10b981" />
              <RevenueCard title="$819,060" value="$819,060" subtitle="Net Revenue" colorFrom="#7c3aed" colorTo="#a78bfa" />
            </section>

            <ClientsTable />
            <PartnersTable />
          </div>
        </main>
      </div>
    </div>
  );
}
