import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik';
import { Briefcase, Users, Clipboard, Lightbulb } from 'lucide-react';

const VISA_TYPES = [
  {
    value: 'investor',
    label: 'Investor Visa',
    description: 'For business owners and investors',
    icon: Briefcase,
  },
  {
    value: 'employee',
    label: 'Employee Visa',
    description: 'For staff members and employees',
    icon: Users,
  },
];

type VisaProFormValues = {
  totalVisasRequired: string;
  visaTypes: string[];
  proServices: string[];
};

interface VisaRequirementsSectionProps {
  errors: FormikErrors<VisaProFormValues>;
  touched: FormikTouched<VisaProFormValues>;
  values: VisaProFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function VisaRequirementsSection({
  errors,
  touched,
  values,
  setFieldValue,
}: VisaRequirementsSectionProps) {
  const handleVisaTypeChange = (visaType: string) => {
    const currentTypes = values.visaTypes || [];
    if (currentTypes.includes(visaType)) {
      setFieldValue(
        'visaTypes',
        currentTypes.filter((type) => type !== visaType)
      );
    } else {
      setFieldValue('visaTypes', [...currentTypes, visaType]);
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
                'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(22, 163, 74) 100%)',
            }}
          >
            <Clipboard size={20} className="text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Visa &amp; PRO Requirements
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Specify your visa and PRO service needs
            </p>
          </div>
        </div>
        <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
          <Lightbulb size={16} className="text-green-700" />
          <span className="ml-2 text-sm font-medium text-green-700">
            Section 5 of 7
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Total Number of Visas Required */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Number of Visas Required{' '}
            <span className="text-red-500">*</span>
          </label>
          <Field
            name="totalVisasRequired"
            type="number"
            placeholder="Enter total number of visas"
            className={`w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errors.totalVisasRequired && touched.totalVisasRequired
                ? 'border-red-300'
                : 'border-gray-300'
            }`}
          />
          <p className="text-xs text-gray-500 mt-2">
            This should match the total of all visa types selected below
          </p>
          <ErrorMessage
            name="totalVisasRequired"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        {/* Visa Types Needed */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Visa Types Needed
          </label>
          <div className="space-y-3">
            {VISA_TYPES.map((visaType) => {
              const Icon = visaType.icon;
              const isSelected = values.visaTypes?.includes(visaType.value);
              return (
                <label
                  key={visaType.value}
                  className={`border-2 rounded-lg p-5 cursor-pointer transition-colors flex items-center ${
                    isSelected
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleVisaTypeChange(visaType.value)}
                      className="w-5 h-5 text-green-600 border-gray-400 rounded-full focus:ring-green-500 cursor-pointer"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon size={16} className="text-green-600 mr-2" />
                        <span className="text-base font-semibold text-gray-900">
                          {visaType.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {visaType.description}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
