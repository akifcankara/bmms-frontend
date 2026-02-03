import Card from '../home/card';
import { ShieldCheck, Clock, CheckCircle, Users } from 'lucide-react';

export default function Stats() {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Card
            icon={<Users className="w-5 h-5" />}
            title="Total Users"
            value={248}
          />
        </div>
        <div>
          <Card
            icon={<CheckCircle className="w-5 h-5" />}
            title="Active Users"
            value={67}
          />
        </div>
        <div>
          <Card
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Admin Users"
            value={142}
          />
        </div>
        <div>
          <Card
            icon={<Clock className="w-5 h-5" />}
            title="Pending Invites"
            value={39}
          />
        </div>
      </div>
    </section>
  );
}
