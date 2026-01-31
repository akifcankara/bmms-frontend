'use client';

import { Formik, Form } from 'formik';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/banking-compliance.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import BankingServicesSection from './banking-services-section';
import ComplianceSection from './compliance-section';
import AdditionalServicesSection from './additional-services-section';

export default function BankingComplianceForm() {
  const { formData, setFormData, nextStep, prevStep } = useKYCFormStore();

  const handleSubmit = (values: typeof formData.bankingCompliance) => {
    setFormData('bankingCompliance', values);
    nextStep();
  };

  return (
    <>
      <Formik
        initialValues={formData.bankingCompliance}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="w-full md:min-w-[850px]">
            <BankingServicesSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            <ComplianceSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            <AdditionalServicesSection
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
