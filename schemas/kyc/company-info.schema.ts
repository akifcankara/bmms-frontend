import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  currentLocation: Yup.string(),
});
