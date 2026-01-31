import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik';
import { Shield } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const CLIENT_TYPES = [
  { value: 'b2b', label: 'B2B', description: 'Business to Business' },
  { value: 'b2c', label: 'B2C', description: 'Business to Consumer' },
  { value: 'both', label: 'Both', description: 'B2B & B2C' },
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

interface ComplianceSectionProps {
  errors: FormikErrors<BankingComplianceFormValues>;
  touched: FormikTouched<BankingComplianceFormValues>;
  values: BankingComplianceFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function ComplianceSection({
  errors,
  touched,
  values,
  setFieldValue,
}: ComplianceSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mt-6 w-full min-w-full">
      {/* Divider with heading */}
      <div className="border-t border-gray-200 pt-6 mb-6">
        <div className="flex items-center mb-6">
          <Shield size={18} className="text-cyan-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">
            Compliance &amp; Due Diligence
          </h3>
        </div>

        <div className="space-y-6">
          {/* Source of Funds & Transaction Volume */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Source of Funds <span className="text-red-500">*</span>
              </label>
              <Select
                value={values.sourceOfFunds}
                onValueChange={(value) => setFieldValue('sourceOfFunds', value)}
              >
                <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
                  <SelectValue placeholder="Select source of funds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personalSavings">
                    Personal Savings
                  </SelectItem>
                  <SelectItem value="businessRevenue">
                    Business Revenue
                  </SelectItem>
                  <SelectItem value="investment">
                    Investment/Inheritance
                  </SelectItem>
                  <SelectItem value="loan">Loan/Financing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <ErrorMessage
                name="sourceOfFunds"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Monthly Transaction Volume
              </label>
              <Select
                value={values.transactionVolume}
                onValueChange={(value) =>
                  setFieldValue('transactionVolume', value)
                }
              >
                <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
                  <SelectValue placeholder="Select transaction volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                  <SelectItem value="50k-200k">$50,000 - $200,000</SelectItem>
                  <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                  <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Countries of Operation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Countries of Operation / Client Base
            </label>
            <Field
              as="textarea"
              name="countriesOfOperation"
              placeholder="List the main countries where you will conduct business or have clients (e.g., UAE, Saudi Arabia, India, USA)"
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                errors.countriesOfOperation && touched.countriesOfOperation
                  ? 'border-red-300'
                  : 'border-gray-300'
              }`}
            />
          </div>

          {/* Client Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Client Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-4">
              {CLIENT_TYPES.map((type) => {
                const isSelected = values.clientType === type.value;
                return (
                  <label
                    key={type.value}
                    className={`border-2 rounded-lg p-5 cursor-pointer transition-colors ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start">
                      <Field
                        type="radio"
                        name="clientType"
                        value={type.value}
                        className="mt-1"
                      />
                      <div className="flex-1 ml-4">
                        <div className="text-base font-semibold text-gray-900">
                          {type.label}
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
              name="clientType"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
