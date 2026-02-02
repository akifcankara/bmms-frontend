import { Briefcase, Calendar, Globe, Award, User } from 'lucide-react';
import Card from './card';

export default function Stats() {
  return (
    <section className="flex flex-col gap-3">
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
          <Calendar className="w-4 h-4" />
          10 Jan 2026 - 20 Jan 2026
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Card
            icon={<User className="w-5 h-5" />}
            title="Total Clients"
            value={248}
            hint="23 new this month"
          />
        </div>
        <div>
          <Card
            icon={<Briefcase className="w-5 h-5" />}
            title="PRO Cases"
            value={67}
            hint="15 pending approval"
          />
        </div>
        <div>
          <Card
            icon={<Globe className="w-5 h-5" />}
            title="Expansion Projects"
            value={142}
            hint="28 in progress"
          />
        </div>
        <div>
          <Card
            icon={<Award className="w-5 h-5" />}
            title="MENA Leaders"
            value={39}
            hint="7 under review"
          />
        </div>
      </div>
    </section>
  );
}
