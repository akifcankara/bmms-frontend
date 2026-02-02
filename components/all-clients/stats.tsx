import Card from '../home/card';
import BuildingBadge from '../icons/building-badge';
import ClientsBadge from '../icons/clients-badge';
import IndividualBadge from '../icons/individual-badge';
import SuccessBadge from '../icons/success-badge';

export default function Stats() {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Card icon={<ClientsBadge />} title="All Contacts" value={248} />
        </div>
        <div>
          <Card icon={<SuccessBadge />} title="Active Clients" value={67} />
        </div>
        <div>
          <Card icon={<BuildingBadge />} title="Company Entities" value={142} />
        </div>
        <div>
          <Card
            icon={<IndividualBadge />}
            title="Individual Clients"
            value={39}
          />
        </div>
      </div>
    </section>
  );
}
