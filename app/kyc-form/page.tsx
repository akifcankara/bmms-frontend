import FormShell from "@/components/common/form-shell";
import CompanyInfoForm from "@/components/kyc-form/company-info-form";
import Indicator from "@/components/kyc-form/indicator";

const KYC_STEPS = [
  { label: "Company Info", completed: false },
  { label: "Business Setup", completed: false },
  { label: "Ownership", completed: false },
  { label: "Visa & PRO", completed: false },
  { label: "Banking", completed: false },
  { label: "Confirmation", completed: false },
];

export default function KYCFormPage() {
  return (
    <FormShell>
      <Indicator currentProgress={0} steps={KYC_STEPS} />
      <div className="max-w-[1280px] mx-auto px-20 py-8">
        <CompanyInfoForm />
      </div>
    </FormShell>
  );
}