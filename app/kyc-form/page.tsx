'use client';

import FormShell from '@/components/common/form-shell';
import CompanyInfoForm from '@/components/kyc-form/company-info-form';
import BusinessSetupForm from '@/components/kyc-form/business-setup-form';
import OwnershipForm from '@/components/kyc-form/ownership-form';
import Indicator from '@/components/kyc-form/indicator';
import { useKYCFormStore } from '@/stores/kyc-form-store';

const KYC_STEPS = [
  { label: 'Company Info', completed: false },
  { label: 'Business Setup', completed: false },
  { label: 'Ownership', completed: false },
  { label: 'Visa & PRO', completed: false },
  { label: 'Banking', completed: false },
  { label: 'Confirmation', completed: false },
];

const TOTAL_STEPS = 6;

export default function KYCFormPage() {
  const currentStep = useKYCFormStore((state) => state.currentStep);

  const steps = KYC_STEPS.map((step, index) => ({
    ...step,
    completed: index < currentStep,
  }));

  const currentProgress = Math.round((currentStep / TOTAL_STEPS) * 100);

  const renderCurrentForm = () => {
    if (currentStep === 0) {
      return <CompanyInfoForm />;
    }

    if (currentStep === 1) {
      return <BusinessSetupForm />;
    }

    if (currentStep === 2) {
      return <OwnershipForm />;
    }

    return (
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
        <p className="text-gray-500 mt-2">This section is under development.</p>
      </div>
    );
  };

  return (
    <FormShell>
      <Indicator currentProgress={currentProgress} steps={steps} />
      <div className="max-w-[1280px] mx-auto px-20 py-8">
        {renderCurrentForm()}
      </div>
    </FormShell>
  );
}
