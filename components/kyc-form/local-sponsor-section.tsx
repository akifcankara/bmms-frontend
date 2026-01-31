import { Field, ErrorMessage } from 'formik';
import { ShieldCheck } from 'lucide-react';

const LOCAL_SPONSOR_OPTIONS = [
  {
    value: 'yes',
    label: 'Yes, I have a local sponsor',
    description: 'Sponsor details will be collected later',
  },
  {
    value: 'no',
    label: 'No, please arrange one',
    description: 'We will assist with sponsor services',
  },
];

interface LocalSponsorSectionProps {
  values: any;
}

export default function LocalSponsorSection({
  values,
}: LocalSponsorSectionProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Do you already have a local sponsor (if required)?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LOCAL_SPONSOR_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                values.hasLocalSponsor === option.value
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-start">
                <Field
                  type="radio"
                  name="hasLocalSponsor"
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
          name="hasLocalSponsor"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* KYC & Compliance Info Box */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 flex items-start">
        <ShieldCheck size={16} className="text-indigo-700 mt-1 flex-shrink-0" />
        <div className="ml-3">
          <p className="text-sm font-medium text-indigo-900">
            KYC & Compliance
          </p>
          <p className="text-xs text-indigo-700 mt-1">
            All documents are securely stored and used only for compliance
            purposes. We ensure full GDPR compliance.
          </p>
        </div>
      </div>
    </>
  );
}
