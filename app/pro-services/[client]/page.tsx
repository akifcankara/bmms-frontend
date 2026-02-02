import AppShell from '@/components/common/app-shell';
import ClientStats from '@/components/pro-services/client-stats';
import ActiveModules from '@/components/pro-services/active-modules';
import FinancialOverview from '@/components/pro-services/financial-overview';
import DocumentManagement from '@/components/pro-services/document-management';
import ClientInformationTabs from '@/components/pro-services/client-information-tabs';
import BasicInfoContent from '@/components/pro-services/basic-info-content';
import BusinessInfoContent from '@/components/pro-services/business-info-content';
import BankingServicesContent from '@/components/pro-services/banking-services-content';
import VisaProContent from '@/components/pro-services/visa-pro-content';
import OwnershipStructureContent from '@/components/pro-services/ownership-structure-content';

export default function ClientKycFormPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <ClientStats />
        <ClientInformationTabs
          content={{
            basicInfo: <BasicInfoContent />,
            businessInfo: <BusinessInfoContent />,
            ownershipStructure: <OwnershipStructureContent />,
            visaPro: <VisaProContent />,
            bankingServices: <BankingServicesContent />,
          }}
        />
        <ActiveModules />
        <FinancialOverview />
        <DocumentManagement />
      </div>
    </AppShell>
  );
}
