import Card from '../home/card';
import { DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function Stats() {
  return (
    <section className="flex flex-col gap-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Card
            icon={<DollarSign className="w-5 h-5" />}
            title="Total Revenue"
            value={'$842,500'}
          />
        </div>
        <div>
          <Card
            icon={<CheckCircle className="w-5 h-5" />}
            title="Collected Payments"
            value={'$721,300'}
          />
        </div>
        <div>
          <Card
            icon={<Clock className="w-5 h-5" />}
            title="Outstanding Amount"
            value={'$121,200'}
          />
        </div>
        <div>
          <Card
            icon={<Clock className="w-5 h-5" />}
            title="Monthly Recurring"
            value={'$68,400'}
          />
        </div>
      </div>
    </section>
  );
}
