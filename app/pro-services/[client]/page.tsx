import AppShell from '@/components/common/app-shell';
import ClientStats from '@/components/pro-services/client-stats';
import ActiveModules from '@/components/pro-services/active-modules';
import FinancialOverview from '@/components/pro-services/financial-overview';
import DocumentManagement from '@/components/pro-services/document-management';
import ClientInformationTabs from '@/components/pro-services/client-information-tabs';
import BasicInfoContent from '@/components/pro-services/basic-info-content';

export default function ClientKycFormPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <ClientStats />
        <ClientInformationTabs
          content={{
            basicInfo: <BasicInfoContent />,
            businessInfo: <div>Business Info Content</div>,
            ownershipStructure: <div>Ownership & Structure Content</div>,
            visaPro: <div>Visa & PRO Requirements Content</div>,
            bankingServices: <div>Banking & Additional Services Content</div>,
          }}
        />
        <ActiveModules />
        <FinancialOverview />
        <DocumentManagement />
      </div>
    </AppShell>
  );
}
