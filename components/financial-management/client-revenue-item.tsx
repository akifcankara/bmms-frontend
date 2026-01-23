import { cn } from "@/lib/utils";

interface ClientRevenueItemProps {
  initials: string;
  clientName: string;
  description: string;
  transactionCount: number;
  lastPayment: string;
  amount: string;
  status: "paid" | "pending";
  isOverdue?: boolean;
  gradient: string;
}

const STATUS_CONFIG = {
  paid: {
    label: "Paid",
    color: "text-[#16a34a]",
  },
  pending: {
    label: "Pending",
    color: "text-[#ea580c]",
  },
};

export default function ClientRevenueItem({
  initials,
  clientName,
  description,
  transactionCount,
  lastPayment,
  amount,
  status,
  isOverdue = false,
  gradient,
}: ClientRevenueItemProps) {
  const statusConfig = STATUS_CONFIG[status];

  return (
    <div
      className={cn(
        "rounded-lg p-4 flex items-center justify-between",
        isOverdue
          ? "bg-[#fefce8] border border-[#fef08a]"
          : "bg-[#f9fafb] border-0"
      )}
    >
      <div className="flex items-center flex-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ background: gradient }}
        >
          <span className="text-white text-sm font-bold">{initials}</span>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="text-[#111827] text-base font-semibold leading-6">
            {clientName}
          </h4>
          <p className="text-[#6b7280] text-xs leading-4">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end">
          <p className="text-[#111827] text-sm font-medium leading-5">
            {transactionCount} Transaction{transactionCount !== 1 ? "s" : ""}
          </p>
          <p
            className={cn(
              "text-xs leading-4",
              isOverdue ? "text-[#ea580c]" : "text-[#6b7280]"
            )}
          >
            {lastPayment}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[#111827] text-lg font-bold leading-7">{amount}</p>
          <p className={cn("text-xs font-medium leading-4", statusConfig.color)}>
            {statusConfig.label}
          </p>
        </div>
      </div>
    </div>
  );
}
