import { Receipt, TrendingUp, Coins, DollarSign } from 'lucide-react';
import RevenueCard from './revenue-card';

export default function Revenues() {
  return (
    <section className="grid grid-col-1 md:grid-cols-3 gap-4 mb-6">
      <RevenueCard
        leftIcon={<DollarSign className="w-5 h-5" />}
        rightIcon={<TrendingUp className="w-5 h-5" />}
        title="$963,600"
        value="$963,600"
        subtitle="Total Revenue (This Month)"
        colorFrom="#2563EB"
        colorTo="#1E40AF"
        footer={{
          title: 'vs Last Month',
          value: '+16.8%',
        }}
      />
      <RevenueCard
        leftIcon={<TrendingUp className="w-5 h-5" />}
        rightIcon={<TrendingUp className="w-5 h-5" />}
        title="$144,540"
        value="$144,540"
        subtitle="Partner Commissions"
        colorFrom="#16A34A"
        colorTo="#166534"
        footer={{
          title: '15% Average Rate',
          value: '4 Partners',
        }}
      />
      <RevenueCard
        leftIcon={<Receipt className="w-5 h-5" />}
        rightIcon={<Coins className="w-5 h-5" />}
        title="$819,060"
        value="$819,060"
        subtitle="Net Revenue"
        colorFrom="#9333EA"
        colorTo="#6B21A8"
        footer={{
          title: 'After Commissions',
          value: '+18.2%',
        }}
      />
    </section>
  );
}
