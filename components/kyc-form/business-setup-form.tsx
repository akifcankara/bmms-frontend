'use client';

import { Formik, Form } from 'formik';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/business-setup.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import BusinessSetupIntentSection from './business-setup-intent-section';
import BusinessActivitySection from './business-activity-section';

export default function BusinessSetupForm() {
  const { formData, setFormData, nextStep, prevStep } = useKYCFormStore();

  const handleSubmit = (values: typeof formData.businessSetup) => {
    setFormData('businessSetup', values);
    nextStep();
  };

  return (
    <>
      <Formik
        initialValues={formData.businessSetup}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <BusinessSetupIntentSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            <BusinessActivitySection
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
                Next Page
                <ArrowRight />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
