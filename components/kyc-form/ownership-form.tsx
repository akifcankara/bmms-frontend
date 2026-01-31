'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Users, Lightbulb, ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/button';
import {
  validationSchema,
  validateShareholders,
} from '@/schemas/kyc/ownership.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';
import OwnershipBasicInfoSection from './ownership-basic-info-section';
import ShareholdersSection from './shareholders-section';
import ManagementRolesSection from './management-roles-section';
import LocalSponsorSection from './local-sponsor-section';

export default function OwnershipForm() {
  const { formData, setFormData, nextStep, prevStep } = useKYCFormStore();
  const [shareholderErrors, setShareholderErrors] = useState<string[]>([]);
  const [shareholders, setShareholders] = useState(
    formData.ownership.shareholders.length > 0
      ? formData.ownership.shareholders
      : [
          {
            id: '1',
            fullName: '',
            nationality: '',
            phoneCode: '+97',
            phoneNumber: '',
            address: '',
            ownershipPercentage: '',
            passportNumber: '',
            passportCopy: null,
            emiratesId: null,
            residenceVisa: null,
          },
        ]
  );

  const handleSubmit = async (values: any) => {
    const errors = await validateShareholders(shareholders);

    if (errors.length > 0) {
      setShareholderErrors(errors);
      window.scrollTo(0, 0);
      return;
    }

    setShareholderErrors([]);
    setFormData('ownership', { ...values, shareholders });
    nextStep();
  };

  const addShareholder = () => {
    setShareholders([
      ...shareholders,
      {
        id: String(shareholders.length + 1),
        fullName: '',
        nationality: '',
        phoneCode: '+97',
        phoneNumber: '',
        address: '',
        ownershipPercentage: '',
        passportNumber: '',
        passportCopy: null,
        emiratesId: null,
        residenceVisa: null,
      },
    ]);
  };

  const removeShareholder = (id: string) => {
    if (shareholders.length > 1) {
      setShareholders(shareholders.filter((s) => s.id !== id));
    }
  };

  const updateShareholder = (id: string, field: string, value: any) => {
    setShareholders(
      shareholders.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  return (
    <Formik
      initialValues={formData.ownership}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-2 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap gap-3 items-start justify-between mb-6">
              <div className="flex flex-wrap gap-3 items-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(79, 70, 229) 100%)',
                  }}
                >
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Ownership, Management & KYC
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Define your company&apos;s ownership structure and upload
                    required documents
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-lg">
                <Lightbulb size={16} className="text-indigo-700" />
                <span className="ml-2 text-sm font-medium text-indigo-700">
                  Section 4 of 7
                </span>
              </div>
            </div>

            {/* Shareholder Validation Errors */}
            {shareholderErrors.length > 0 && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="text-sm font-semibold text-red-800 mb-2">
                  Please fix the following errors:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {shareholderErrors.map((error, index) => (
                    <li key={index} className="text-sm text-red-700">
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              <OwnershipBasicInfoSection
                errors={errors}
                touched={touched}
                values={values}
                setFieldValue={setFieldValue}
              />

              <ShareholdersSection
                shareholders={shareholders}
                onAdd={addShareholder}
                onUpdate={updateShareholder}
                onRemove={removeShareholder}
              />

              <ManagementRolesSection
                values={values}
                shareholders={shareholders}
                setFieldValue={setFieldValue}
              />

              <LocalSponsorSection values={values} />
            </div>
          </div>

          {/* Navigation Buttons */}
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
  );
}
