import PaymentStatusItem from "./payment-status-item";

const PAYMENT_DATA = [
  {
    status: "paid" as const,
    amount: "$721.3K",
    invoiceCount: 186,
    percentage: "85.6%",
  },
  {
    status: "pending" as const,
    amount: "$98.5K",
    invoiceCount: 42,
    percentage: "11.7%",
  },
  {
    status: "overdue" as const,
    amount: "$22.7K",
    invoiceCount: 15,
    percentage: "2.7%",
  },
];

const COLLECTION_RATE = 85.6;

export default function PaymentStatus() {
  return (
    <div className="flex-1 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
      <div className="border-b border-[#e5e7eb] px-6 py-6 flex flex-col gap-1">
        <h3 className="text-[#111827] text-lg font-semibold leading-7">
          Payment Status
        </h3>
        <p className="text-[#6b7280] text-xs leading-4">
          Current payment distribution
        </p>
      </div>

      <div className="px-6 py-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {PAYMENT_DATA.map((data) => (
            <PaymentStatusItem
              key={data.status}
              status={data.status}
              amount={data.amount}
              invoiceCount={data.invoiceCount}
              percentage={data.percentage}
            />
          ))}
        </div>

        <div className="border-t border-[#e5e7eb] pt-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-[#4b5563] text-sm leading-5">Collection Rate</p>
            <p className="text-[#111827] text-sm font-semibold leading-5">
              {COLLECTION_RATE}%
            </p>
          </div>
          <div className="w-full bg-[#e5e7eb] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#22c55e] h-full rounded-full"
              style={{ width: `${COLLECTION_RATE}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
