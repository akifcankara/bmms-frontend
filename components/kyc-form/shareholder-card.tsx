import { Trash2, Upload, ShieldCheck } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

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

interface ShareholderCardProps {
  shareholder: Shareholder;
  index: number;
  canRemove: boolean;
  onUpdate: (id: string, field: string, value: any) => void;
  onRemove: (id: string) => void;
}

export default function ShareholderCard({
  shareholder,
  index,
  canRemove,
  onUpdate,
  onRemove,
}: ShareholderCardProps) {
  return (
    <div
      className="border-2 border-indigo-200 rounded-xl p-6"
      style={{
        backgroundImage:
          'linear-gradient(153.595deg, rgb(238, 242, 255) 0%, rgb(255, 255, 255) 100%)',
      }}
    >
      {/* Shareholder Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-bold text-gray-900">
              Shareholder {index + 1}
            </h3>
            <p className="text-xs text-gray-500">
              Complete all fields and upload required documents
            </p>
          </div>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(shareholder.id)}
            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={14} className="text-red-600" />
          </button>
        )}
      </div>

      {/* Row 1: Full Name, Nationality */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter shareholder name"
            value={shareholder.fullName}
            onChange={(e) =>
              onUpdate(shareholder.id, 'fullName', e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nationality <span className="text-red-500">*</span>
          </label>
          <Select
            value={shareholder.nationality}
            onValueChange={(value) =>
              onUpdate(shareholder.id, 'nationality', value)
            }
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uae">UAE</SelectItem>
              <SelectItem value="saudi">Saudi Arabia</SelectItem>
              <SelectItem value="egypt">Egypt</SelectItem>
              <SelectItem value="jordan">Jordan</SelectItem>
              <SelectItem value="lebanon">Lebanon</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="pakistan">Pakistan</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Row 2: Phone Number, Address */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareholder.phoneCode}
              onChange={(e) =>
                onUpdate(shareholder.id, 'phoneCode', e.target.value)
              }
              className="w-[137px] px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="50 123 4567"
              value={shareholder.phoneNumber}
              onChange={(e) =>
                onUpdate(shareholder.id, 'phoneNumber', e.target.value)
              }
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="City, Country"
            value={shareholder.address}
            onChange={(e) =>
              onUpdate(shareholder.id, 'address', e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Row 3: Ownership %, Passport Number */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ownership Percentage <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="100%"
            value={shareholder.ownershipPercentage}
            onChange={(e) =>
              onUpdate(shareholder.id, 'ownershipPercentage', e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Passport Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter passport number"
            value={shareholder.passportNumber}
            onChange={(e) =>
              onUpdate(shareholder.id, 'passportNumber', e.target.value)
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* KYC Documents */}
      <div className="border-t border-indigo-200 pt-6">
        <div className="flex items-center mb-4">
          <ShieldCheck size={14} className="text-gray-700 mr-2" />
          <h4 className="text-sm font-bold text-gray-900">
            KYC Documents for this Shareholder
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {/* Passport Copy */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Passport Copy <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
              <Upload size={24} className="mx-auto text-gray-400 mb-2" />
              <p className="text-xs font-medium text-gray-600">
                Upload Passport
              </p>
              <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG</p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  onUpdate(shareholder.id, 'passportCopy', e.target.files?.[0])
                }
              />
            </div>
          </div>

          {/* Emirates ID */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Emirates ID
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
              <Upload size={24} className="mx-auto text-gray-400 mb-2" />
              <p className="text-xs font-medium text-gray-600">
                Upload Emirates ID
              </p>
              <p className="text-xs text-gray-400 mt-1">If applicable</p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  onUpdate(shareholder.id, 'emiratesId', e.target.files?.[0])
                }
              />
            </div>
          </div>

          {/* Residence Visa */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Residence Visa
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
              <Upload size={24} className="mx-auto text-gray-400 mb-2" />
              <p className="text-xs font-medium text-gray-600">Upload Visa</p>
              <p className="text-xs text-gray-400 mt-1">If applicable</p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) =>
                  onUpdate(shareholder.id, 'residenceVisa', e.target.files?.[0])
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
