import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik';
import { Building2, Lightbulb } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const BANKING_SERVICES = [
  {
    value: 'corporateAccount',
    label: 'Corporate Bank Account Opening',
    description: 'Assistance with opening business bank accounts',
  },
  {
    value: 'paymentGateway',
    label: 'Payment Gateway Setup',
    description: 'Integration of online payment solutions',
  },
  {
    value: 'multiCurrency',
    label: 'Multi-Currency Account',
    description: 'Accounts supporting multiple currencies',
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

interface BankingServicesSectionProps {
  errors: FormikErrors<BankingComplianceFormValues>;
  touched: FormikTouched<BankingComplianceFormValues>;
  values: BankingComplianceFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function BankingServicesSection({
  values,
  setFieldValue,
}: BankingServicesSectionProps) {
  const handleServiceChange = (service: string) => {
    const currentServices = values.bankingServices || [];
    if (currentServices.includes(service)) {
      setFieldValue(
        'bankingServices',
        currentServices.filter((s) => s !== service)
      );
    } else {
      setFieldValue('bankingServices', [...currentServices, service]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(8, 145, 178) 100%)',
            }}
          >
            <Building2 size={20} className="text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Banking &amp; Compliance Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Banking services and compliance requirements
            </p>
          </div>
        </div>
        <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-lg">
          <Lightbulb size={16} className="text-cyan-700" />
          <span className="ml-2 text-sm font-medium text-cyan-700">
            Section 6 of 7
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Bank Account Support */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Do you require bank account opening support?{' '}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-4">
            {['yes', 'no'].map((option) => {
              const isSelected = values.requireBankSupport === option;
              return (
                <label
                  key={option}
                  className={`border-2 rounded-lg p-5 cursor-pointer transition-colors flex items-center justify-center h-20 ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Field
                    type="radio"
                    name="requireBankSupport"
                    value={option}
                    className="mr-4"
                  />
                  <span className="text-base font-semibold text-gray-900 capitalize">
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
          <ErrorMessage
            name="requireBankSupport"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Banking Services Required */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Banking Services Required
          </label>
          <div className="space-y-3">
            {BANKING_SERVICES.map((service) => {
              const isSelected = values.bankingServices?.includes(
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

        {/* Preferred Bank */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Bank (Optional)
          </label>
          <Select
            value={values.preferredBank}
            onValueChange={(value) => setFieldValue('preferredBank', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="No preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No preference</SelectItem>
              <SelectItem value="emiratesNbd">Emirates NBD</SelectItem>
              <SelectItem value="adcb">Abu Dhabi Commercial Bank</SelectItem>
              <SelectItem value="mashreq">Mashreq Bank</SelectItem>
              <SelectItem value="enbd">Emirates Islamic</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
