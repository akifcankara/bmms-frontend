interface KYCApplication {
  id: string;
  slug: string;
  initials: string;
  fullName: string;
  email: string;
  firstChoiceName: string;
  industrySector: string;
  preferredJurisdiction: string;
}

interface KYCFormData {
  companyInfo: Record<string, unknown>;
  businessSetup: Record<string, unknown>;
  ownership: {
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
    [key: string]: unknown;
  };
  visaPro: Record<string, unknown>;
  bankingCompliance: Record<string, unknown>;
  confirmation: Record<string, unknown>;
}

interface ModuleDetail {
  label: string;
  value: string;
}

interface Module {
  title: string;
  description: string;
  status: string;
  details: ModuleDetail[];
}

interface ActiveModulesResponse {
  modules: Module[];
}

interface ClientStatsResponse {
  status: string;
  clientType: string;
  activeModules: number;
  joinedDate: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface InfoFieldWithIconProps {
  value: string;
  icon: React.ReactNode;
}

interface InfoFieldProps {
  value: string;
}

type ShareholderDocumentType =
  | 'passport_copy'
  | 'emirates_id'
  | 'residence_visa';

interface ShareholderDocument {
  id: string;
  shareholderName: string;
  documentType: ShareholderDocumentType;
  filePath: string | null;
  createdAt: string;
}

interface ShareholderDocumentsResponse {
  documents: ShareholderDocument[];
}

interface DocumentListItem {
  id: string;
  name: string;
  lastUpdated: string;
  hasFile: boolean;
  filePath: string | null;
}
