import { Plus } from 'lucide-react';
import ShareholderCard from './shareholder-card';

interface Shareholder {
  id: string;
  fullName: string;
  nationality: string;
  phoneCode: string;
  phoneNumber: string;
  address: string;
  ownershipPercentage: string;
  passportNumber: string;
  passportCopy: File | null;
  emiratesId: File | null;
  residenceVisa: File | null;
}

interface ShareholdersSectionProps {
  shareholders: Shareholder[];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: any) => void;
  onRemove: (id: string) => void;
}

export default function ShareholdersSection({
  shareholders,
  onAdd,
  onUpdate,
  onRemove,
}: ShareholdersSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Shareholder Details & KYC Documents
        </label>
        <button
          type="button"
          onClick={onAdd}
          className="border border-teal-600 text-teal-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-teal-50 transition-colors"
        >
          <Plus size={14} className="mr-2" />
          Add Shareholder
        </button>
      </div>

      <div className="space-y-4">
        {shareholders.map((shareholder, index) => (
          <ShareholderCard
            key={shareholder.id}
            shareholder={shareholder}
            index={index}
            canRemove={shareholders.length > 1}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
