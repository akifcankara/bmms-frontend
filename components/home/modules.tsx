import BagBadge from "../icons/bag-badge";
import GlobalBadge from "../icons/global-badge";
import MedalBadge from "../icons/medal-badge";
import ModuleCard from "./module-card";

export default function Modules(){
    return  <section className="grid grid-cols-3 gap-4">
            <div>
              <ModuleCard
                title="PRO Module"
                subtitle="Business Registration"
                accentColor="#9333EA"
                icon={<BagBadge />}
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
}