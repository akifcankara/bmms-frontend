import { Lightbulb } from 'lucide-react';

const PRO_SERVICES = [
  {
    value: 'visaProcessing',
    label: 'Visa Processing & Stamping',
    description: 'Complete visa application and stamping services',
  },
  {
    value: 'emiratesId',
    label: 'Emirates ID Processing',
    description: 'Application and collection of Emirates ID',
  },
  {
    value: 'medicalTest',
    label: 'Medical Test Arrangements',
    description: 'Schedule and coordinate medical examinations',
  },
  {
    value: 'laborContract',
    label: 'Labor Contract Registration',
    description: 'Register employment contracts with authorities',
  },
  {
    value: 'documentAttestation',
    label: 'Document Attestation',
    description: 'Attestation of educational and personal documents',
  },
];

type VisaProFormValues = {
  totalVisasRequired: string;
  visaTypes: string[];
  proServices: string[];
};

interface ProServicesSectionProps {
  values: VisaProFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function ProServicesSection({
  values,
  setFieldValue,
}: ProServicesSectionProps) {
  const handleServiceChange = (service: string) => {
    const currentServices = values.proServices || [];
    if (currentServices.includes(service)) {
      setFieldValue(
        'proServices',
        currentServices.filter((s) => s !== service)
      );
    } else {
      setFieldValue('proServices', [...currentServices, service]);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mt-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            PRO Services Required
          </label>
          <div className="space-y-3">
            {PRO_SERVICES.map((service) => {
              const isSelected = values.proServices?.includes(service.value);
              return (
                <label
                  key={service.value}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center ${
                    isSelected
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleServiceChange(service.value)}
                    className="w-5 h-5 text-green-600 border-gray-400 rounded focus:ring-green-500"
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

        {/* Fast-Track Info Box */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
          <Lightbulb size={16} className="text-green-700 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-sm font-medium text-green-900">
              Fast-Track Processing Available
            </p>
            <p className="text-xs text-green-700 mt-1">
              We offer expedited visa processing services to get you started
              quickly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
