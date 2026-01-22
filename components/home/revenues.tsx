import BillBadge from "../icons/bill-badge";
import ChartBadge from "../icons/chart-badge";
import CoinIcon from "../icons/coin";
import DollarBadge from "../icons/dollar-badge";
import Increase from "../icons/increase";
import RevenueCard from "./revenue-card";

export default function Revenues(){
    return    <section className="grid grid-cols-3 gap-4 mb-6">
                <RevenueCard
                  leftIcon={<DollarBadge />}
                  rightIcon={<Increase />}
                  title="$963,600"
                  value="$963,600"
                  subtitle="Total Revenue (This Month)"
                  colorFrom="#2563EB"
                  colorTo="#1E40AF"
                  footer={{
                    title: 'vs Last Month',
                    value: '+16.8%'
                  }}
                />
                <RevenueCard
                  leftIcon={<ChartBadge />}
                  rightIcon={<Increase />}
                  title="$144,540"
                  value="$144,540"
                  subtitle="Partner Commissions"
                  colorFrom="#16A34A"
                  colorTo="#166534"
                                footer={{
                    title: '15% Average Rate',
                    value: '4 Partners'
                  }}
    
                />
                <RevenueCard
                  leftIcon={<BillBadge />}
                  rightIcon={<CoinIcon />}
                  title="$819,060"
                  value="$819,060"
                  subtitle="Net Revenue"
                  colorFrom="#9333EA"
                  colorTo="#6B21A8"
                                footer={{
                    title: 'After Commissions',
                    value: '+18.2%'
                  }}
    
                />
              </section>
}