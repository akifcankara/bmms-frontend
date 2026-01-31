'use client';

import { useEffect } from 'react';
import FormShell from '@/components/common/form-shell';
import CompanyInfoForm from '@/components/kyc-form/company-info-form';
import BusinessSetupForm from '@/components/kyc-form/business-setup-form';
import OwnershipForm from '@/components/kyc-form/ownership-form';
import VisaProRequirementsForm from '@/components/kyc-form/visa-pro-requirements-form';
import BankingComplianceForm from '@/components/kyc-form/banking-compliance-form';
import ConfirmationSummaryForm from '@/components/kyc-form/confirmation-summary-form';
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
  const fillRandomData = useKYCFormStore((state) => state.fillRandomData);
  const resetForm = useKYCFormStore((state) => state.resetForm);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

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

    if (currentStep === 3) {
      return <VisaProRequirementsForm />;
    }

    if (currentStep === 4) {
      return <BankingComplianceForm />;
    }

    if (currentStep === 5) {
      return <ConfirmationSummaryForm />;
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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-4 sm:py-6 md:py-8">
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={fillRandomData}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              🎲 Use Random Values
            </button>
          </div>
        )}
        {renderCurrentForm()}
      </div>
    </FormShell>
  );
}
