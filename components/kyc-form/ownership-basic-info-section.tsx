import { Field, ErrorMessage } from 'formik';
import { Users, Building2, Lightbulb } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const OWNERSHIP_TYPES = [
  {
    value: 'sole-proprietorship',
    label: 'Sole Proprietorship',
    description: 'Single owner',
    icon: Users,
  },
  {
    value: 'partnership',
    label: 'Partnership',
    description: 'Multiple partners',
    icon: Building2,
  },
];

interface OwnershipBasicInfoSectionProps {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

export default function OwnershipBasicInfoSection({
  errors,
  touched,
  values,
  setFieldValue,
}: OwnershipBasicInfoSectionProps) {
  return (
    <>
      {/* Ownership Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Ownership Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OWNERSHIP_TYPES.map((type) => {
            const Icon = type.icon;
            return (
              <label
                key={type.value}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  values.ownershipType === type.value
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="flex items-start">
                  <Field
                    type="radio"
                    name="ownershipType"
                    value={type.value}
                    className="mt-1"
                  />
                  <div className="flex-1 ml-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-gray-900">
                        {type.label}
                      </span>
                      <Icon size={16} className="text-indigo-600" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {type.description}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <ErrorMessage
          name="ownershipType"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Company Share Capital */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Company Share Capital <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Field
            name="shareCapital"
            type="text"
            placeholder="Enter share capital amount"
            className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.shareCapital && touched.shareCapital
                ? 'border-red-300'
                : 'border-gray-300'
            }`}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="text-gray-600 font-medium">AED</span>
          </div>
        </div>
        <ErrorMessage
          name="shareCapital"
          component="div"
          className="text-red-500 text-sm mt-1"
        />

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start mt-2">
          <Lightbulb size={16} className="text-blue-700 mt-0.5 flex-shrink-0" />
          <div className="ml-2">
            <p className="text-xs text-blue-900">
              Please note that the declared share capital is a notional value
              defined by the company owner. This amount is not required to be
              paid and is used for regulatory and administrative purposes only.
            </p>
          </div>
        </div>
      </div>

      {/* Number of Shareholders */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of Shareholders <span className="text-red-500">*</span>
        </label>
        <Select
          value={values.numberOfShareholders}
          onValueChange={(value) =>
            setFieldValue('numberOfShareholders', value)
          }
        >
          <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
            <SelectValue placeholder="Select number of shareholders" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Shareholder</SelectItem>
            <SelectItem value="2">2 Shareholders</SelectItem>
            <SelectItem value="3">3 Shareholders</SelectItem>
            <SelectItem value="4">4 Shareholders</SelectItem>
            <SelectItem value="5">5 Shareholders</SelectItem>
            <SelectItem value="6">6+ Shareholders</SelectItem>
          </SelectContent>
        </Select>
        <ErrorMessage
          name="numberOfShareholders"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
