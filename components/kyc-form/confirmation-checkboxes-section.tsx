import { Field, ErrorMessage, FormikErrors, FormikTouched } from 'formik';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

type ConfirmationFormValues = {
  confirmAccuracy: boolean;
  consentContact: boolean;
  agreeTerms: boolean;
};

interface ConfirmationCheckboxesSectionProps {
  errors: FormikErrors<ConfirmationFormValues>;
  touched: FormikTouched<ConfirmationFormValues>;
  values: ConfirmationFormValues;
  setFieldValue: (field: string, value: unknown) => void;
}

export default function ConfirmationCheckboxesSection({
  values,
}: ConfirmationCheckboxesSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mt-6 w-full">
      {/* Divider */}
      <div className="border-t border-gray-200 pt-6">
        <div className="space-y-4">
          {/* Confirm Accuracy */}
          <label
            className={`border-2 rounded-lg p-5 cursor-pointer transition-colors flex items-start ${
              values.confirmAccuracy
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex items-start pt-1">
              <Field
                type="checkbox"
                name="confirmAccuracy"
                className="w-5 h-5 text-teal-600 border-gray-400 rounded focus:ring-teal-500 cursor-pointer"
              />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-base font-semibold text-gray-900">
                I confirm that all information provided is accurate and complete{' '}
                <span className="text-red-500">*</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                By checking this box, I certify that all the information I have
                provided in this application is true, accurate, and complete to
                the best of my knowledge.
              </p>
              <ErrorMessage
                name="confirmAccuracy"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>
          </label>

          {/* Consent Contact */}
          <label
            className={`border-2 rounded-lg p-5 cursor-pointer transition-colors flex items-start ${
              values.consentContact
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex items-start pt-1">
              <Field
                type="checkbox"
                name="consentContact"
                className="w-5 h-5 text-teal-600 border-gray-400 rounded focus:ring-teal-500 cursor-pointer"
              />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-base font-semibold text-gray-900">
                I consent to be contacted by the Bridge MENA team
              </div>
              <p className="text-xs text-gray-500 mt-1">
                I agree to receive communications from Bridge MENA regarding my
                application, including updates, consultations, and relevant
                business setup information via email, phone, or WhatsApp.
              </p>
            </div>
          </label>

          {/* Agree Terms */}
          <label
            className={`border-2 rounded-lg p-5 cursor-pointer transition-colors flex items-start ${
              values.agreeTerms
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex items-start pt-1">
              <Field
                type="checkbox"
                name="agreeTerms"
                className="w-5 h-5 text-teal-600 border-gray-400 rounded focus:ring-teal-500 cursor-pointer"
              />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-base font-semibold text-gray-900">
                I agree to the Terms &amp; Conditions and Privacy Policy{' '}
                <span className="text-red-500">*</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                I have read and agree to Bridge MENA&apos;s{' '}
                <Link
                  href="/terms"
                  className="text-teal-600 hover:text-teal-700 underline"
                >
                  Terms &amp; Conditions
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-teal-600 hover:text-teal-700 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <ErrorMessage
                name="agreeTerms"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>
          </label>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start mt-6">
          <AlertTriangle
            size={16}
            className="text-yellow-700 mt-1 flex-shrink-0"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-yellow-900">
              Important Notice
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              Please ensure all required fields are completed before submission.
              Our team will review your application and contact you within 24-48
              hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
