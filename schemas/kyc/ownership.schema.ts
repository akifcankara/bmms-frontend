import * as Yup from 'yup';

const shareholderSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  nationality: Yup.string().required('Nationality is required'),
  phoneCode: Yup.string().required('Phone code is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  ownershipPercentage: Yup.string().required(
    'Ownership percentage is required'
  ),
  passportNumber: Yup.string().required('Passport number is required'),
  passportCopy: Yup.mixed()
    .required('Passport copy is required')
    .test('fileType', 'Only PDF, JPG, and PNG files are allowed', (value) => {
      if (!value) return false;
      const file = value as File;
      return [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
      ].includes(file.type);
    }),
  emiratesId: Yup.mixed().nullable(),
  residenceVisa: Yup.mixed().nullable(),
});

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

export const validateShareholders = async (shareholders: any[]) => {
  const errors: string[] = [];

  for (let i = 0; i < shareholders.length; i++) {
    try {
      await shareholderSchema.validate(shareholders[i], { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        errors.push(`Shareholder ${i + 1}: ${err.errors.join(', ')}`);
      }
    }
  }

  return errors;
};
