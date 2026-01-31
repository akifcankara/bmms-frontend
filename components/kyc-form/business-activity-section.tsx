import { Field, ErrorMessage } from 'formik';
import {
  Briefcase,
  Lightbulb,
  TrendingUp,
  ShoppingBag,
  Users,
  Factory,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FormikErrors, FormikTouched } from 'formik';

const LICENSE_TYPES = [
  {
    value: 'commercial',
    label: 'Commercial',
    description: 'Trading activities',
    icon: ShoppingBag,
  },
  {
    value: 'professional',
    label: 'Professional',
    description: 'Service-based',
    icon: Users,
  },
  {
    value: 'industrial',
    label: 'Industrial',
    description: 'Manufacturing',
    icon: Factory,
  },
];

const LOCAL_REVENUE_OPTIONS = [
  { value: 'yes', label: 'Yes', description: 'Local revenue generation' },
  { value: 'no', label: 'No', description: 'International only' },
  { value: 'not-sure', label: 'Not Sure', description: 'Need guidance' },
];

type BusinessSetupFormValues = {
  companySetupType: string;
  firstChoiceName: string;
  secondChoiceName: string;
  thirdChoiceName: string;
  preferredJurisdiction: string;
  specificLocation: string;
  expectedTimeline: string;
  primaryBusinessActivity: string;
  industrySector: string;
  additionalActivities: string;
  licenseTypes: string[];
  localRevenue: string;
  expectedAnnualRevenue: string;
};

interface BusinessActivitySectionProps {
  errors: FormikErrors<BusinessSetupFormValues>;
  touched: FormikTouched<BusinessSetupFormValues>;
  values: BusinessSetupFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function BusinessActivitySection({
  errors,
  touched,
  values,
  setFieldValue,
}: BusinessActivitySectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-2 md:p-8 mt-6">
      {/* Header */}
      <div className="flex flex-wrap gap-2 items-start justify-between mb-6">
        <div className="flex flex-wrap gap-2 items-center">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(234, 88, 12) 100%)',
            }}
          >
            <Briefcase size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Business Activity & Revenue
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Define your primary business activities and revenue expectations
            </p>
          </div>
        </div>
        <div className="flex items-center bg-orange-50 px-4 py-2 rounded-lg">
          <Lightbulb size={16} className="text-orange-700" />
          <span className="ml-2 text-sm font-medium text-orange-700">
            Section 3 of 7
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Primary Business Activity */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Primary Business Activity <span className="text-red-500">*</span>
          </label>
          <Field
            name="primaryBusinessActivity"
            type="text"
            placeholder="e.g., Software Development, Trading, Consulting"
            className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.primaryBusinessActivity && touched.primaryBusinessActivity
                ? 'border-red-300'
                : 'border-gray-300'
            }`}
          />
          <p className="text-xs text-gray-500 mt-1">
            Describe your main business activity in detail
          </p>
          <ErrorMessage
            name="primaryBusinessActivity"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Industry Sector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Industry Sector <span className="text-red-500">*</span>
          </label>
          <Select
            value={values.industrySector}
            onValueChange={(value) => setFieldValue('industrySector', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <ErrorMessage
            name="industrySector"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Additional Business Activities */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Business Activities
          </label>
          <Field
            as="textarea"
            name="additionalActivities"
            placeholder="List any secondary or additional business activities (optional)"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* License Type Required */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            License Type Required
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LICENSE_TYPES.map((license) => {
              const Icon = license.icon;
              const isChecked = values.licenseTypes?.includes(license.value);
              return (
                <label
                  key={license.value}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    isChecked
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex flex-col">
                    <Field
                      type="checkbox"
                      name="licenseTypes"
                      value={license.value}
                      className="mb-3"
                    />
                    <Icon size={24} className="text-orange-600 mb-2" />
                    <span className="text-base font-semibold text-gray-900">
                      {license.label}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {license.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Revenue Information Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center mb-6">
            <TrendingUp size={18} className="text-gray-700 mr-2" />
            <h3 className="text-lg font-bold text-gray-900">
              Revenue Information
            </h3>
          </div>

          {/* Local Revenue Generation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Will the company generate revenue locally?{' '}
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LOCAL_REVENUE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    values.localRevenue === option.value
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-start">
                    <Field
                      type="radio"
                      name="localRevenue"
                      value={option.value}
                      className="mt-1"
                    />
                    <div className="flex-1 ml-4">
                      <span className="text-base font-semibold text-gray-900 block">
                        {option.label}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <ErrorMessage
              name="localRevenue"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Expected Annual Revenue */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expected Annual Revenue (Estimate){' '}
              <span className="text-red-500">*</span>
            </label>
            <Select
              value={values.expectedAnnualRevenue}
              onValueChange={(value) =>
                setFieldValue('expectedAnnualRevenue', value)
              }
            >
              <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
                <SelectValue placeholder="Select revenue range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                <SelectItem value="5m-10m">$5,000,000 - $10,000,000</SelectItem>
                <SelectItem value="10m+">$10,000,000+</SelectItem>
              </SelectContent>
            </Select>
            <ErrorMessage
              name="expectedAnnualRevenue"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start">
          <Lightbulb size={16} className="text-orange-700 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-orange-900">
              License Requirements
            </p>
            <p className="text-xs text-orange-700 mt-1">
              Different activities may require specific licenses. Our team will
              guide you through the requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
