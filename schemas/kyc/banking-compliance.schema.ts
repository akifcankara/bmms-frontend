import * as Yup from 'yup';

export const validationSchema = Yup.object({
  requireBankSupport: Yup.string().required(
    'Please select if you require bank account opening support'
  ),
  bankingServices: Yup.array().of(Yup.string()),
  preferredBank: Yup.string(),
  sourceOfFunds: Yup.string().required('Source of funds is required'),
  transactionVolume: Yup.string(),
  countriesOfOperation: Yup.string(),
  clientType: Yup.string().required('Client type is required'),
  additionalServices: Yup.array().of(Yup.string()),
  monthlyBudget: Yup.string(),
});
