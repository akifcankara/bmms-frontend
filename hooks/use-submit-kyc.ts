import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';

interface KYCFormData {
  companyInfo: any;
  businessSetup: any;
  ownership: any;
  visaPro: any;
  bankingCompliance: any;
  confirmation: any;
}

export function useSubmitKYC() {
  return useMutation({
    mutationFn: async (formData: KYCFormData) => {
      const data = new FormData();

      data.append('companyInfo', JSON.stringify(formData.companyInfo));
      data.append('businessSetup', JSON.stringify(formData.businessSetup));
      data.append('visaPro', JSON.stringify(formData.visaPro));
      data.append(
        'bankingCompliance',
        JSON.stringify(formData.bankingCompliance)
      );
      data.append('confirmation', JSON.stringify(formData.confirmation));

      const ownershipWithoutFiles = {
        ...formData.ownership,
        shareholders: formData.ownership.shareholders.map(
          (shareholder: any) => ({
            fullName: shareholder.fullName,
            nationality: shareholder.nationality,
            phoneCode: shareholder.phoneCode,
            phoneNumber: shareholder.phoneNumber,
            address: shareholder.address,
            ownershipPercentage: shareholder.ownershipPercentage,
            passportNumber: shareholder.passportNumber,
          })
        ),
      };

      data.append('ownership', JSON.stringify(ownershipWithoutFiles));

      formData.ownership.shareholders.forEach(
        (shareholder: any, index: number) => {
          if (shareholder.passportCopy) {
            data.append(
              `shareholders[${index}][passportCopy]`,
              shareholder.passportCopy
            );
          }
          if (shareholder.emiratesId) {
            data.append(
              `shareholders[${index}][emiratesId]`,
              shareholder.emiratesId
            );
          }
          if (shareholder.residenceVisa) {
            data.append(
              `shareholders[${index}][residenceVisa]`,
              shareholder.residenceVisa
            );
          }
        }
      );

      const response = await axiosInstance.post('/kyc/application', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    },
  });
}
