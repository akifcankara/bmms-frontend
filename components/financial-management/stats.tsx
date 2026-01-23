import Card from "../home/card";
import DollarBadge2 from "../icons/dollar-badge2";
import PendingBadge from "../icons/pending-badge";
import SuccessBadge from "../icons/success-badge";

export default function Stats() {
  return <section className="flex flex-col gap-3">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <Card
          icon={<DollarBadge2 />}
          title="Total Revenue"
          value={'$842,500'}
        />
      </div>
      <div>
        <Card
          icon={<SuccessBadge />}
          title="Collected Payments"
          value={'$721,300'}
        />
      </div>
      <div>
        <Card
          icon={<PendingBadge />}
          title="Outstanding Amount"
          value={'$121,200'} />
      </div>
      <div>
        <Card
          icon={<PendingBadge />}
          title="Monthly Recurring"
          value={'$68,400'}
        />
      </div>
    </div>
  </section>
}