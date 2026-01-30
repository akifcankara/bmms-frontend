import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  ownershipType: Yup.string().required('Ownership type is required'),
  shareCapital: Yup.string().required('Company share capital is required'),
  numberOfShareholders: Yup.string().required(
    'Number of shareholders is required'
  ),
  generalManager: Yup.string().required('General Manager is required'),
  director: Yup.string().required('Director is required'),
  ubo: Yup.string().required('Ultimate Beneficial Owner (UBO) is required'),
  hasLocalSponsor: Yup.string().required(
    'Please specify if you have a local sponsor'
  ),
});
