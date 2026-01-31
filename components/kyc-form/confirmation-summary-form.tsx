'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/confirmation.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import SummarySection from './summary-section';
import ConfirmationCheckboxesSection from './confirmation-checkboxes-section';
import SuccessModal from './success-modal';

export default function ConfirmationSummaryForm() {
  const { formData, setFormData, prevStep } = useKYCFormStore();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (values: typeof formData.confirmation) => {
    setFormData('confirmation', values);

    // Console log all form data
    console.log('=== KYC APPLICATION SUBMITTED ===');
    console.log('Complete Form Data:', {
      ...formData,
      confirmation: values,
    });
    console.log('=================================');

    // Show success modal
    setShowSuccessModal(true);
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

            <div className="w-full flex items-center justify-between mt-6">
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="px-10 py-5"
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
              >
                <CheckCircle2 className="mr-2" size={20} />
                Submit Application
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
