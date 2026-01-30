'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ArrowRight, Building2, Info, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { validationSchema } from '@/schemas/kyc/company-info.schema';
import { useKYCFormStore } from '@/stores/kyc-form-store';

export default function CompanyInfoForm() {
  const { formData, setFormData, nextStep } = useKYCFormStore();

  const handleSubmit = (values: typeof formData.companyInfo) => {
    setFormData('companyInfo', values);
    nextStep();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%)',
            }}
          >
            <Building2 size={20} className="text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Company & Contact Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Provide your business and contact details
            </p>
          </div>
        </div>
        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
          <Info size={16} className="text-blue-700" />
          <span className="ml-2 text-sm font-medium text-blue-700">
            Section 1 of 7
          </span>
        </div>
      </div>

      {/* Form */}
      <Formik
        initialValues={formData.companyInfo}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.fullName && touched.fullName
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Row 2: Phone Number & Current Location */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-32 px-5 py-3.5 border border-gray-300 rounded-lg bg-white">
                    <span className="text-base text-black">+971</span>
                  </div>
                  <Field
                    name="phoneNumber"
                    type="tel"
                    placeholder="50 123 4567"
                    className={`flex-1 px-4 py-3.5 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phoneNumber && touched.phoneNumber
                        ? 'border-red-300'
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Location
                </label>
                <Field
                  name="currentLocation"
                  type="text"
                  placeholder="City, Country"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start">
              <ShieldCheck
                size={16}
                className="text-teal-700 mt-1 flex-shrink-0"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-teal-900">
                  Your information is secure
                </p>
                <p className="text-xs text-teal-700 mt-1">
                  All data is encrypted and handled according to GDPR standards
                </p>
              </div>
            </div>
            <div className="w-full flex items-end">
              <Button
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
    </div>
  );
}
