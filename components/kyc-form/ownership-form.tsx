'use client';

import { Formik, Form } from 'formik';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/ownership.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import OwnershipStructureSection from './ownership-structure-section';
import OwnershipRevenueSection from './ownership-revenue-section';

type OwnershipFormData = {
  companySetupType: string;
  parentCompanyName: string;
  countryOfIncorporation: string;
  commercialRegistrationNumber: string;
  parentCompanyDocuments: File | null;
  preferredJurisdiction: string;
  specificLocation: string;
  expectedTimeline: string;
  primaryBusinessActivity: string;
  industrySector: string;
  additionalActivities: string;
  licenseTypes: string[];
  localRevenue: string;
  expectedAnnualRevenue: string;
};

export default function OwnershipForm() {
  const { formData, setFormData, nextStep, prevStep } = useKYCFormStore();

  const handleSubmit = (values: OwnershipFormData) => {
    setFormData('ownership', values);
    nextStep();
  };

  return (
    <>
      <Formik
        initialValues={formData.ownership}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <OwnershipStructureSection
              errors={errors}
              touched={touched}
              values={values}
              setFieldValue={setFieldValue}
            />

            <OwnershipRevenueSection
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
