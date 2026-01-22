import Card from "@/components/home/card";
import ClientsTable from "@/components/home/clients-table";
import SideMenu from "@/components/common/side-menu";
import ModuleCard from "@/components/home/module-card";
import RevenueCard from "@/components/home/revenue-card";
import PartnersTable from "@/components/home/partners-table";
import Header from "@/components/common/header";
import UserBadge from "@/components/icons/user-badge";
import BagBadge from "@/components/icons/bag-badge";
import GlobalBadge from "@/components/icons/global-badge";
import MedalBadge from "@/components/icons/medal-badge";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideMenu />
        <main className="flex-1 p-6">
            <section className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <Card 
                  icon={<UserBadge />}
                  title="Total Clients" 
                  value={248} 
                  hint="23 new this month" 
                />
              </div>
              <div>
                <Card 
                  icon={<BagBadge />}
                  title="PRO Cases" 
                  value={67} 
                  hint="15 pending approval" 
                />
              </div>
              <div>
                <Card 
                  icon={<GlobalBadge />}
                  title="Expansion Projects" 
                  value={142} 
                  hint="28 in progress" />
              </div>
              <div>
                <Card 
                  icon={<MedalBadge />}
                  title="MENA Leaders" 
                  value={39} 
                  hint="7 under review" 
                />
              </div>
            </section>
            <section className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <ModuleCard
                  title="PRO Module"
                  subtitle="Business Registration"
                  accentColor="#9333EA"
                  icon={<BagBadge/>}
                  items={[
                    { label: "Active", value: 32, color: "bg-green-500" },
                    { label: "Pending", value: 15, color: "bg-yellow-500" },
                    { label: "In progress", value: 12, color: "bg-blue-500" },
                    { label: "Completed", value: 8, color: "bg-purple-500" },
                  ]}
                  completion={68}
                />
              </div>
              <div>
                <ModuleCard 
                  icon={<GlobalBadge />}
                  title="Expansion Module"
                  subtitle="Market Expansion"
                  accentColor="#16A34A"
                  items={[
                    { label: "Active", value: 56, color: "bg-green-500" },
                    { label: "Planning", value: 28, color: "bg-yellow-500" },
                    { label: "In progress", value: 34, color: "bg-blue-500" },
                    { label: "Completed", value: 24, color: "bg-purple-500" },
                  ]}
                  completion={75}
                />
              </div>
              <div>
                <ModuleCard
                  icon={<MedalBadge />}
                  title="MENA Leaders"
                  subtitle="Leadership Program"
                  accentColor="#EA580C"
                  items={[
                    { label: "Approved", value: 18, color: "bg-green-500" },
                    { label: "In Review", value: 7, color: "bg-yellow-500" },
                    { label: "In Progress", value: 9, color: "bg-blue-500" },
                    { label: "Rejected", value: 5, color: "bg-purple-500" },
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
        </main>
      </div>
    </>
    // <div className="min-h-screen bg-gray-50">
    //   <div className="flex">
    //     <SideMenu />
    //   </div>
    // </div>
  );
}
