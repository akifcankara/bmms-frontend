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
  resetForm: () => void;
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
    set(() => {
      const names = [
        'John Doe',
        'Jane Smith',
        'Michael Johnson',
        'Sarah Williams',
        'David Brown',
      ];
      const companies = [
        'Tech Solutions',
        'Digital Innovations',
        'Smart Systems',
        'Global Services',
        'Future Technologies',
      ];
      const jurisdictions = ['dubai', 'saudi', 'abudhabi'];
      const sectors = [
        'technology',
        'finance',
        'healthcare',
        'retail',
        'manufacturing',
      ];

      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCompany =
        companies[Math.floor(Math.random() * companies.length)];
      const randomNum = Math.floor(Math.random() * 9999);

      return {
        formData: {
          companyInfo: {
            fullName: randomName,
            email: `${randomName.toLowerCase().replace(' ', '.')}${randomNum}@example.com`,
            phoneNumber: `50${Math.floor(Math.random() * 9999999)}`,
            currentLocation: 'Dubai, UAE',
          },
          businessSetup: {
            companySetupType: 'new',
            firstChoiceName: `${randomCompany} LLC`,
            secondChoiceName: `${randomCompany} International LLC`,
            thirdChoiceName: `${randomCompany} Global LLC`,
            preferredJurisdiction:
              jurisdictions[Math.floor(Math.random() * jurisdictions.length)],
            specificLocation: 'Dubai Media City',
            expectedTimeline: ['1month', '2months', '3months'][
              Math.floor(Math.random() * 3)
            ],
            primaryBusinessActivity: 'Software Development',
            industrySector: sectors[Math.floor(Math.random() * sectors.length)],
            additionalActivities: 'IT Consulting',
            licenseTypes: ['professional'],
            localRevenue: ['yes', 'no'][Math.floor(Math.random() * 2)],
            expectedAnnualRevenue: ['0-100k', '100k-500k', '500k-1m'][
              Math.floor(Math.random() * 3)
            ],
          },
          ownership: {
            ownershipType: 'sole-proprietorship',
            shareCapital: `${Math.floor(Math.random() * 100000) + 10000}`,
            numberOfShareholders: '1',
            shareholders: [
              {
                id: '1',
                fullName: randomName,
                nationality: ['uae', 'saudi', 'egypt', 'jordan'][
                  Math.floor(Math.random() * 4)
                ],
                phoneCode: '+971',
                phoneNumber: `50${Math.floor(Math.random() * 9999999)}`,
                address: 'Dubai, UAE',
                ownershipPercentage: '100',
                passportNumber: `A${Math.floor(Math.random() * 9999999)}`,
                passportCopy: null,
                emiratesId: null,
                residenceVisa: null,
              },
            ],
            generalManager: '1',
            director: '1',
            ubo: '1',
            hasLocalSponsor: ['yes', 'no'][Math.floor(Math.random() * 2)],
          },
          visaPro: {
            totalVisasRequired: `${Math.floor(Math.random() * 5) + 1}`,
            visaTypes: ['investor'],
            proServices: ['visaProcessing'],
          },
          bankingCompliance: {
            requireBankSupport: 'yes',
            bankingServices: ['businessAccount'],
            preferredBank: ['emiratesNbd', 'adcb', 'fab'][
              Math.floor(Math.random() * 3)
            ],
            sourceOfFunds: ['personalSavings', 'investment', 'businessIncome'][
              Math.floor(Math.random() * 3)
            ],
            transactionVolume: ['0-50k', '50k-100k', '100k-500k'][
              Math.floor(Math.random() * 3)
            ],
            countriesOfOperation: 'UAE, Saudi Arabia',
            clientType: ['b2b', 'b2c', 'both'][Math.floor(Math.random() * 3)],
            additionalServices: ['trademark'],
            monthlyBudget: ['0-5k', '5k-10k', '10k-20k'][
              Math.floor(Math.random() * 3)
            ],
          },
          confirmation: {
            confirmAccuracy: true,
            consentContact: true,
            agreeTerms: true,
          },
        },
      };
    }),
  resetForm: () =>
    set(() => ({
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
    })),
}));
