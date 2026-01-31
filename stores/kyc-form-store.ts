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
    visaPro: {
      totalVisasRequired: string;
      visaTypes: string[];
      proServices: string[];
    };
    bankingCompliance: {
      requireBankSupport: string;
      bankingServices: string[];
      preferredBank: string;
      sourceOfFunds: string;
      transactionVolume: string;
      countriesOfOperation: string;
      clientType: string;
      additionalServices: string[];
      monthlyBudget: string;
    };
    confirmation: {
      confirmAccuracy: boolean;
      consentContact: boolean;
      agreeTerms: boolean;
    };
  };
  nextStep: () => void;
  prevStep: () => void;
  setFormData: <K extends keyof KYCFormState['formData']>(
    step: K,
    data: KYCFormState['formData'][K]
  ) => void;
  fillRandomData: () => void;
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
    visaPro: {
      totalVisasRequired: '',
      visaTypes: [],
      proServices: [],
    },
    bankingCompliance: {
      requireBankSupport: '',
      bankingServices: [],
      preferredBank: '',
      sourceOfFunds: '',
      transactionVolume: '',
      countriesOfOperation: '',
      clientType: '',
      additionalServices: [],
      monthlyBudget: '',
    },
    confirmation: {
      confirmAccuracy: false,
      consentContact: false,
      agreeTerms: false,
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
  fillRandomData: () =>
    set(() => ({
      formData: {
        companyInfo: {
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          phoneNumber: '501234567',
          currentLocation: 'Dubai, UAE',
        },
        businessSetup: {
          companySetupType: 'new',
          firstChoiceName: 'Tech Solutions LLC',
          secondChoiceName: 'Digital Innovations LLC',
          thirdChoiceName: 'Smart Systems LLC',
          preferredJurisdiction: 'dubai',
          specificLocation: 'Dubai Media City',
          expectedTimeline: '1month',
          primaryBusinessActivity: 'Software Development',
          industrySector: 'technology',
          additionalActivities: 'IT Consulting',
          licenseTypes: ['professional'],
          localRevenue: 'no',
          expectedAnnualRevenue: '100k-500k',
        },
        ownership: {
          ownershipType: 'sole-proprietorship',
          shareCapital: '50000',
          numberOfShareholders: '1',
          shareholders: [
            {
              id: '1',
              fullName: 'John Doe',
              nationality: 'uae',
              phoneCode: '+971',
              phoneNumber: '501234567',
              address: 'Dubai, UAE',
              ownershipPercentage: '100',
              passportNumber: 'A1234567',
              passportCopy: null,
              emiratesId: null,
              residenceVisa: null,
            },
          ],
          generalManager: '1',
          director: '1',
          ubo: '1',
          hasLocalSponsor: 'no',
        },
        visaPro: {
          totalVisasRequired: '2',
          visaTypes: ['investor'],
          proServices: ['visaProcessing'],
        },
        bankingCompliance: {
          requireBankSupport: 'yes',
          bankingServices: ['businessAccount'],
          preferredBank: 'emiratesNbd',
          sourceOfFunds: 'personalSavings',
          transactionVolume: '50k-100k',
          countriesOfOperation: 'UAE, Saudi Arabia',
          clientType: 'b2b',
          additionalServices: ['trademark'],
          monthlyBudget: '5k-10k',
        },
        confirmation: {
          confirmAccuracy: true,
          consentContact: true,
          agreeTerms: true,
        },
      },
    })),
}));
