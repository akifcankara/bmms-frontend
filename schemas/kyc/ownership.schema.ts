import * as Yup from 'yup';

export const validationSchema = Yup.object({
  companySetupType: Yup.string().required('Company setup type is required'),
  parentCompanyName: Yup.string().when('companySetupType', {
    is: 'branch',
    then: (schema) => schema.required('Parent company name is required'),
    otherwise: (schema) => schema,
  }),
  countryOfIncorporation: Yup.string().when('companySetupType', {
    is: 'branch',
    then: (schema) => schema.required('Country of incorporation is required'),
    otherwise: (schema) => schema,
  }),
  commercialRegistrationNumber: Yup.string().when('companySetupType', {
    is: 'branch',
    then: (schema) =>
      schema.required('Commercial registration number is required'),
    otherwise: (schema) => schema,
  }),
  parentCompanyDocuments: Yup.mixed().when('companySetupType', {
    is: 'branch',
    then: (schema) => schema.required('Parent company documents are required'),
    otherwise: (schema) => schema,
  }),
  preferredJurisdiction: Yup.string().required(
    'Preferred jurisdiction is required'
  ),
  specificLocation: Yup.string(),
  expectedTimeline: Yup.string().required('Expected timeline is required'),
  primaryBusinessActivity: Yup.string().required(
    'Primary business activity is required'
  ),
  industrySector: Yup.string().required('Industry sector is required'),
  additionalActivities: Yup.string(),
  licenseTypes: Yup.array().of(Yup.string()),
  localRevenue: Yup.string().required(
    'Please indicate if you will generate revenue locally'
  ),
  expectedAnnualRevenue: Yup.string().required(
    'Expected annual revenue is required'
  ),
});
