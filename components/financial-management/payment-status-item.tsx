import { cn } from "@/lib/utils";

interface PaymentStatusItemProps {
  status: "paid" | "pending" | "overdue";
  amount: string;
  invoiceCount: number;
  percentage: string;
}

const STATUS_STYLES = {
  paid: {
    bg: "bg-[#f0fdf4]",
    border: "border-[#dcfce7]",
    iconBg: "bg-[#dcfce7]",
    percentageColor: "text-[#16a34a]",
  },
  pending: {
    bg: "bg-[#fefce8]",
    border: "border-[#fef9c3]",
    iconBg: "bg-[#fef9c3]",
    percentageColor: "text-[#ca8a04]",
  },
  overdue: {
    bg: "bg-[#fef2f2]",
    border: "border-[#fee2e2]",
    iconBg: "bg-[#fee2e2]",
    percentageColor: "text-[#dc2626]",
  },
};

const PaidIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" fill="#16A34A" stroke="#16A34A" strokeWidth="2" />
    <path
      d="M5 8L7 10L11 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PendingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" fill="#CA8A04" stroke="#CA8A04" strokeWidth="2" />
    <path
      d="M8 4V8L10.5 10.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OverdueIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" fill="#DC2626" stroke="#DC2626" strokeWidth="2" />
    <path
      d="M8 4V8L10.5 10.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STATUS_CONFIG = {
  paid: {
    label: "Paid",
    icon: <PaidIcon />,
  },
  pending: {
    label: "Pending",
    icon: <PendingIcon />,
  },
  overdue: {
    label: "Overdue",
    icon: <OverdueIcon />,
  },
};

export default function PaymentStatusItem({
  status,
  amount,
  invoiceCount,
  percentage,
}: PaymentStatusItemProps) {
  const styles = STATUS_STYLES[status];
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={cn(
        "border border-solid rounded-lg p-4 flex items-center justify-between",
        styles.bg,
        styles.border
      )}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            styles.iconBg
          )}
        >
          {config.icon}
        </div>
        <div className="flex flex-col ml-3">
          <h4 className="text-[#111827] text-base font-medium leading-6">
            {config.label}
          </h4>
          <p className="text-[#6b7280] text-xs leading-4">
            {invoiceCount} invoices
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-[#111827] text-lg font-bold leading-7">{amount}</p>
        <p className={cn("text-xs font-medium leading-4", styles.percentageColor)}>
          {percentage}
        </p>
      </div>
    </div>
  );
}
