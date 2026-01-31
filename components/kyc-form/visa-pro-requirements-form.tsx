'use client';

import { Formik, Form } from 'formik';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/visa-pro.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import VisaRequirementsSection from './visa-requirements-section';
import ProServicesSection from './pro-services-section';

export default function VisaProRequirementsForm() {
  const { formData, setFormData, nextStep, prevStep } = useKYCFormStore();

  const handleSubmit = (values: typeof formData.visaPro) => {
    setFormData('visaPro', values);
    nextStep();
  };

  return (
    <>
      <Formik
        initialValues={formData.visaPro}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <VisaRequirementsSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            <ProServicesSection values={values} setFieldValue={setFieldValue} />

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
