import BagBadge from "../icons/bag-badge";
import Calendar from "../icons/calendar";
import GlobalBadge from "../icons/global-badge";
import MedalBadge from "../icons/medal-badge";
import UserBadge from "../icons/user-badge";
import Card from "./card";

export default function Stats(){
    return  <section className="flex flex-col gap-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="cursor-pointer flex-1 bg-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                    All
                  </button>
                  <button className="cursor-pointer flex-1 bg-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                    Today
                  </button>
                  <button className="cursor-pointer flex-1 bg-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                    Yesterday
                  </button>
                  <button className="cursor-pointer flex items-center justify-center gap-2 flex-1 bg-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                    <Calendar />
                    10 Jan 2026 - 20 Jan 2026
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                </div>
              </section>
}