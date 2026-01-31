import * as Yup from 'yup';

export const validationSchema = Yup.object({
  totalVisasRequired: Yup.number()
    .required('Total number of visas is required')
    .min(1, 'At least 1 visa is required')
    .typeError('Please enter a valid number'),
  visaTypes: Yup.array().of(Yup.string()),
  proServices: Yup.array().of(Yup.string()),
});
