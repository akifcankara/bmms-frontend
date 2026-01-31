import { Lightbulb } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ADDITIONAL_SERVICES = [
  {
    value: 'officeSpace',
    label: 'Office Space',
    description: 'Physical or virtual office',
  },
  {
    value: 'accounting',
    label: 'Accounting Services',
    description: 'Bookkeeping & accounting',
  },
  {
    value: 'vatRegistration',
    label: 'VAT Registration / Zakat registration',
    description: 'Tax registration services',
  },
  {
    value: 'legalConsultation',
    label: 'Legal Consultation',
    description: 'Legal advisory services',
  },
  {
    value: 'trademark',
    label: 'Trademark Registration',
    description: 'Brand protection services',
  },
  {
    value: 'hrPayroll',
    label: 'HR & Payroll',
    description: 'HR management services',
  },
];

type BankingComplianceFormValues = {
  requireBankSupport: string;
  bankingServices: string[];
  preferredBank: string;
  sourceOfFunds: string;
  transactionVolume: string;
  countriesOfOperation: string;
  clientType: string;
  additionalServices: string[];
  monthlyBudget: string;
};

interface AdditionalServicesSectionProps {
  values: BankingComplianceFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function AdditionalServicesSection({
  values,
  setFieldValue,
}: AdditionalServicesSectionProps) {
  const handleServiceChange = (service: string) => {
    const currentServices = values.additionalServices || [];
    if (currentServices.includes(service)) {
      setFieldValue(
        'additionalServices',
        currentServices.filter((s) => s !== service)
      );
    } else {
      setFieldValue('additionalServices', [...currentServices, service]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mt-6 w-full min-w-full">
      <div className="space-y-6">
        {/* Additional Services */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Additional Services
          </label>
          <div className="grid grid-cols-2 gap-3">
            {ADDITIONAL_SERVICES.map((service) => {
              const isSelected = values.additionalServices?.includes(
                service.value
              );
              return (
                <label
                  key={service.value}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleServiceChange(service.value)}
                    className="w-5 h-5 text-cyan-600 border-gray-400 rounded focus:ring-cyan-500"
                  />
                  <div className="flex-1 ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {service.label}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {service.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Monthly Budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Monthly Budget for Services
          </label>
          <Select
            value={values.monthlyBudget}
            onValueChange={(value) => setFieldValue('monthlyBudget', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-5k">$0 - $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k+">$50,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Premium Banking Info Box */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 flex items-start">
          <Lightbulb size={16} className="text-cyan-700 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-cyan-900">
              Premium Banking Packages
            </p>
            <p className="text-xs text-cyan-700 mt-1">
              We offer exclusive banking packages with preferential rates for
              our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
