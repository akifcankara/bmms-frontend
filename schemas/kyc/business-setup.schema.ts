import * as Yup from 'yup';

export const validationSchema = Yup.object({
  companySetupType: Yup.string().required('Company setup type is required'),
  firstChoiceName: Yup.string().required(
    'First choice company name is required'
  ),
  secondChoiceName: Yup.string().required(
    'Second choice company name is required'
  ),
  thirdChoiceName: Yup.string().required(
    'Third choice company name is required'
  ),
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
