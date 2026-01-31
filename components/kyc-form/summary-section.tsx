import { CheckCircle, Lightbulb } from 'lucide-react';

interface SummarySectionProps {
  formData: any;
}

export default function SummarySection({ formData }: SummarySectionProps) {
  const completedSections = 6; // Update based on actual completion
  const totalSections = 7;

  // Extract key information from formData
  const summaryData = [
    {
      label: 'Setup Type',
      value: formData.businessSetup.companySetupType || 'Not specified',
    },
    {
      label: 'Jurisdiction',
      value:
        formData.businessSetup.preferredJurisdiction?.toUpperCase() ||
        'Not specified',
    },
    {
      label: 'Timeline',
      value: formData.businessSetup.expectedTimeline || 'Not specified',
    },
    {
      label: 'Total Visas',
      value: formData.visaPro.totalVisasRequired
        ? `${formData.visaPro.totalVisasRequired} Visas`
        : 'Not specified',
    },
    {
      label: 'Shareholders',
      value: formData.ownership.numberOfShareholders
        ? `${formData.ownership.numberOfShareholders} Shareholder${
            parseInt(formData.ownership.numberOfShareholders) > 1 ? 's' : ''
          }`
        : 'Not specified',
    },
    {
      label: 'Local Revenue',
      value: formData.businessSetup.localRevenue || 'Not specified',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(20, 184, 166) 0%, rgb(13, 148, 136) 100%)',
            }}
          >
            <CheckCircle size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Confirmation &amp; Submission
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Review and confirm your application details
            </p>
          </div>
        </div>
        <div className="flex items-center bg-teal-50 px-4 py-2 rounded-lg">
          <Lightbulb size={16} className="text-teal-700" />
          <span className="ml-2 text-sm font-medium text-teal-700">
            Section 7 of 7
          </span>
        </div>
      </div>

      {/* Application Summary */}
      <div
        className="rounded-xl p-4 sm:p-6"
        style={{
          backgroundImage:
            'linear-gradient(160.688deg, rgb(240, 253, 250) 0%, rgb(236, 254, 255) 100%)',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-white rounded-full p-3 flex-shrink-0">
            <CheckCircle size={20} className="text-teal-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Application Summary
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Please review all the information you&apos;ve provided before
              submitting your application.
            </p>

            {/* Summary Grid */}
            <div className="flex flex-col gap-4 mb-6">
              {summaryData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-teal-200 rounded-lg p-3"
                >
                  <p className="text-xs text-gray-500 mb-1">{item.label}:</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Completeness Badge */}
            <div className="border-t border-teal-200 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle size={12} className="text-gray-500 mr-2" />
                  <span className="text-xs text-gray-600">
                    Section Completeness:
                  </span>
                </div>
                <div className="bg-green-100 px-2 py-1 rounded">
                  <span className="text-xs text-green-700 font-medium">
                    Complete: {completedSections}/{totalSections}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
