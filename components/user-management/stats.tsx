import Card from "../home/card";
import ActiveUsersBadge from "../icons/active-users-badge";
import AdminBadge from "../icons/admin-badge";
import BuildingBadge from "../icons/building-badge";
import ClientsBadge from "../icons/clients-badge";
import IndividualBadge from "../icons/individual-badge";
import PendingBadge from "../icons/pending-badge";
import SuccessBadge from "../icons/success-badge";
import TotalUsersBadge from "../icons/total-users-badge";

export default function Stats(){
    return  <section className="flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Card
                      icon={<TotalUsersBadge />}
                      title="Total Users"
                      value={248}
                    />
                  </div>
                  <div>
                    <Card
                      icon={<SuccessBadge />}
                      title="Active Users"
                      value={67}
                    />
                  </div>
                  <div>
                    <Card
                      icon={<AdminBadge />}
                      title="Admin Users"
                      value={142} />
                  </div>
                  <div>
                    <Card
                      icon={<PendingBadge />}
                      title="Pending Invites"
                      value={39}
                    />
                  </div>
                </div>
              </section>
}