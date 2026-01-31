import * as Yup from 'yup';

export const validationSchema = Yup.object({
  confirmAccuracy: Yup.boolean()
    .oneOf([true], 'You must confirm that all information is accurate')
    .required('This confirmation is required'),
  consentContact: Yup.boolean(),
  agreeTerms: Yup.boolean()
    .oneOf(
      [true],
      'You must agree to the Terms & Conditions and Privacy Policy'
    )
    .required('This agreement is required'),
});
