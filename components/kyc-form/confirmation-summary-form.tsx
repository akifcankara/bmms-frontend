'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/confirmation.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import { useSubmitKYC } from '@/hooks/use-submit-kyc';
import SummarySection from './summary-section';
import ConfirmationCheckboxesSection from './confirmation-checkboxes-section';
import SuccessModal from './success-modal';

export default function ConfirmationSummaryForm() {
  const { formData, setFormData, prevStep, resetForm } = useKYCFormStore();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { mutate: submitKYC, isPending, isError, isSuccess } = useSubmitKYC();

  const handleSubmit = (values: typeof formData.confirmation) => {
    setFormData('confirmation', values);

    const completeFormData = {
      ...formData,
      confirmation: values,
    };

    submitKYC(completeFormData, {
      onSuccess: (data) => {
        console.log('=== KYC APPLICATION SUBMITTED SUCCESSFULLY ===');
        console.log('Response:', data);
        console.log('==============================================');
        setShowSuccessModal(true);
      },
      onError: (error) => {
        console.error('=== KYC SUBMISSION FAILED ===');
        console.error('Error:', error);
        console.error('=============================');
      },
    });
  };

  return (
    <>
      <Formik
        initialValues={formData.confirmation}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="w-full md:min-w-[850px]">
            <SummarySection formData={formData} />

            <ConfirmationCheckboxesSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            {isError && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-semibold text-red-800">
                  Submission failed. Please try again.
                </p>
              </div>
            )}

            <div className="w-full flex items-center justify-between mt-6">
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="px-10 py-5"
                disabled={isPending}
              >
                <ChevronLeft />
                Previous
              </Button>
              <Button
                type="submit"
                className="text-white px-10 py-5 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(90deg, #00A0D2 10.38%, #05DC82 100%)',
                }}
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2" size={20} />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {isPending && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
            <Loader2
              className="mx-auto animate-spin text-blue-600 mb-4"
              size={48}
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Submitting Your Application
            </h3>
            <p className="text-gray-600">
              Please wait while we process your KYC application...
            </p>
          </div>
        </div>
      )}

      {isSuccess && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => {
            setShowSuccessModal(false);
            resetForm();
          }}
        />
      )}
    </>
  );
}
