import { Field, ErrorMessage } from 'formik';
import {
  Rocket,
  Building2,
  GitBranch,
  Network,
  Globe,
  Zap,
  Calendar,
  CalendarDays,
  CalendarRange,
  Lightbulb,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FormikErrors, FormikTouched } from 'formik';

const COMPANY_SETUP_TYPES = [
  {
    value: 'new',
    label: 'New Company',
    description: 'Start a new business entity',
    icon: Building2,
  },
  {
    value: 'branch',
    label: 'Branch',
    description: 'Branch of existing company',
    icon: GitBranch,
  },
  {
    value: 'subsidiary',
    label: 'Subsidiary',
    description: 'Subsidiary entity',
    icon: Network,
  },
];

const JURISDICTIONS = [
  {
    value: 'uae',
    label: 'UAE',
    description: 'Dubai, Abu Dhabi, Sharjah',
    flag: '🇦🇪',
  },
  {
    value: 'saudi',
    label: 'Saudi Arabia',
    description: 'Riyadh, Jeddah, Dammam',
    flag: '🇸🇦',
  },
  {
    value: 'both',
    label: 'Both Markets',
    description: 'UAE & Saudi Arabia',
    icon: Globe,
  },
];

const TIMELINES = [
  {
    value: 'immediate',
    label: 'Immediate',
    description: 'Within 2 weeks',
    icon: Zap,
  },
  {
    value: '1month',
    label: '1 Month',
    description: '2-4 weeks',
    icon: Calendar,
  },
  {
    value: '3months',
    label: '3 Months',
    description: '1-3 months',
    icon: CalendarDays,
  },
  {
    value: '6months',
    label: '6+ Months',
    description: 'Long-term planning',
    icon: CalendarRange,
  },
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

interface BusinessSetupIntentSectionProps {
  errors: FormikErrors<BusinessSetupFormValues>;
  touched: FormikTouched<BusinessSetupFormValues>;
  values: BusinessSetupFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function BusinessSetupIntentSection({
  errors,
  touched,
  values,
  setFieldValue,
}: BusinessSetupIntentSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-2 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-wrap gap-3 items-center">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(147, 51, 234) 100%)',
            }}
          >
            <Rocket size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Business Setup Intent
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Tell us about your business setup plans
            </p>
          </div>
        </div>
        <div className="flex items-center bg-purple-50 px-4 py-2 rounded-lg">
          <Lightbulb size={16} className="text-purple-700" />
          <span className="ml-2 text-sm font-medium text-purple-700">
            Section 2 of 7
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Company Setup Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Company Setup Type <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPANY_SETUP_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <label
                  key={type.value}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    values.companySetupType === type.value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-start">
                    <Field
                      type="radio"
                      name="companySetupType"
                      value={type.value}
                      className="mt-1"
                    />
                    <div className="flex-1 ml-4">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-gray-900">
                          {type.label}
                        </span>
                        <Icon size={16} className="text-teal-600" />
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
            name="companySetupType"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Proposed Company Names */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Proposed Company Names <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 mb-3">
            Please provide three name options in order of preference
          </p>
          <div className="space-y-3">
            {[
              {
                name: 'firstChoiceName',
                label: 'First choice company name',
                number: '1',
              },
              {
                name: 'secondChoiceName',
                label: 'Second choice company name',
                number: '2',
              },
              {
                name: 'thirdChoiceName',
                label: 'Third choice company name',
                number: '3',
              },
            ].map((field) => (
              <div key={field.name} className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-teal-700">
                    {field.number}
                  </span>
                </div>
                <div className="flex-1 ml-3">
                  <Field
                    name={field.name}
                    type="text"
                    placeholder={field.label}
                    className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors[field.name as keyof typeof errors] &&
                      touched[field.name as keyof typeof touched]
                        ? 'border-red-300'
                        : 'border-gray-300'
                    }`}
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Jurisdiction */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Jurisdiction <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JURISDICTIONS.map((jurisdiction) => {
              const Icon = jurisdiction.icon;
              return (
                <label
                  key={jurisdiction.value}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-colors relative ${
                    values.preferredJurisdiction === jurisdiction.value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Field
                    type="radio"
                    name="preferredJurisdiction"
                    value={jurisdiction.value}
                    className="absolute top-3 right-3"
                  />
                  <div className="flex flex-col items-center">
                    {jurisdiction.flag ? (
                      <div className="text-5xl mb-2">{jurisdiction.flag}</div>
                    ) : Icon ? (
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                        style={{
                          backgroundImage:
                            'linear-gradient(135deg, rgb(45, 212, 191) 0%, rgb(20, 184, 166) 100%)',
                        }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                    ) : null}
                    <span className="text-base font-semibold text-gray-900">
                      {jurisdiction.label}
                    </span>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      {jurisdiction.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
          <ErrorMessage
            name="preferredJurisdiction"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Specific Location Preference */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Specific Location Preference
          </label>
          <Select
            value={values.specificLocation}
            onValueChange={(value) => setFieldValue('specificLocation', value)}
          >
            <SelectTrigger className="w-full h-12 px-4 text-base border-gray-300">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
              <SelectItem value="riyadh">Riyadh</SelectItem>
              <SelectItem value="jeddah">Jeddah</SelectItem>
              <SelectItem value="dammam">Dammam</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expected Timeline */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Expected Timeline <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {TIMELINES.map((timeline) => {
              const Icon = timeline.icon;
              return (
                <label
                  key={timeline.value}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    values.expectedTimeline === timeline.value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Field
                      type="radio"
                      name="expectedTimeline"
                      value={timeline.value}
                      className="mb-2"
                    />
                    <Icon size={24} className="text-teal-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-900">
                      {timeline.label}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {timeline.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
          <ErrorMessage
            name="expectedTimeline"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Info Box */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-start">
          <Lightbulb size={16} className="text-purple-700 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-purple-900">
              Expert Guidance Available
            </p>
            <p className="text-xs text-purple-700 mt-1">
              Our team will help you choose the best jurisdiction based on your
              business needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
