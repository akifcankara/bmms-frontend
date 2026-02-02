import Card from '../home/card';
import { Building, Users, User, CheckCircle } from 'lucide-react';

export default function Stats() {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Card
            icon={<Users className="w-5 h-5" />}
            title="All Contacts"
            value={248}
          />
        </div>
        <div>
          <Card
            icon={<CheckCircle className="w-5 h-5" />}
            title="Active Clients"
            value={67}
          />
        </div>
        <div>
          <Card
            icon={<Building className="w-5 h-5" />}
            title="Company Entities"
            value={142}
          />
        </div>
        <div>
          <Card
            icon={<User className="w-5 h-5" />}
            title="Individual Clients"
            value={39}
          />
        </div>
      </div>
    </section>
  );
}
