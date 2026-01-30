import { create } from 'zustand';

interface KYCFormState {
  currentStep: number;
  formData: {
    companyInfo: {
      fullName: string;
      email: string;
      phoneNumber: string;
      currentLocation: string;
    };
    businessSetup: {
      companySetupType: string;
      firstChoiceName: string;
      secondChoiceName: string;
      thirdChoiceName: string;
      preferredJurisdiction: string;
      specificLocation: string;
      expectedTimeline: string;
      primaryBusinessActivity: string;
      industrySector: string;
      additionalActivities: string;
      licenseTypes: string[];
      localRevenue: string;
      expectedAnnualRevenue: string;
    };
    ownership: {
      ownershipType: string;
      shareCapital: string;
      numberOfShareholders: string;
      shareholders: Array<{
        id: string;
        fullName: string;
        nationality: string;
        phoneCode: string;
        phoneNumber: string;
        address: string;
        ownershipPercentage: string;
        passportNumber: string;
        passportCopy: File | null;
        emiratesId: File | null;
        residenceVisa: File | null;
      }>;
      generalManager: string;
      director: string;
      ubo: string;
      hasLocalSponsor: string;
    };
  };
  nextStep: () => void;
  prevStep: () => void;
  setFormData: <K extends keyof KYCFormState['formData']>(
    step: K,
    data: KYCFormState['formData'][K]
  ) => void;
}

export const useKYCFormStore = create<KYCFormState>((set) => ({
  currentStep: 0,
  formData: {
    companyInfo: {
      fullName: '',
      email: '',
      phoneNumber: '',
      currentLocation: '',
    },
    businessSetup: {
      companySetupType: '',
      firstChoiceName: '',
      secondChoiceName: '',
      thirdChoiceName: '',
      preferredJurisdiction: '',
      specificLocation: '',
      expectedTimeline: '',
      primaryBusinessActivity: '',
      industrySector: '',
      additionalActivities: '',
      licenseTypes: [],
      localRevenue: '',
      expectedAnnualRevenue: '',
    },
    ownership: {
      ownershipType: '',
      shareCapital: '',
      numberOfShareholders: '',
      shareholders: [],
      generalManager: '',
      director: '',
      ubo: '',
      hasLocalSponsor: '',
    },
  },
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 5),
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),
  setFormData: (step, data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [step]: data,
      },
    })),
}));
