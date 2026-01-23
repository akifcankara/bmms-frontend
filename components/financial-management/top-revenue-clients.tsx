import ClientRevenueItem from "./client-revenue-item";

const CLIENT_GRADIENTS = {
  blue: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(29, 78, 216) 100%)",
  green: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(21, 128, 61) 100%)",
  purple:
    "linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(126, 34, 206) 100%)",
  orange:
    "linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(194, 65, 12) 100%)",
  red: "linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(185, 28, 28) 100%)",
};

const TOP_CLIENTS = [
  {
    id: "1",
    initials: "TC",
    clientName: "TechCorp International",
    description: "PRO Module • 3 active cases",
    transactionCount: 8,
    lastPayment: "Last payment: 2 days ago",
    amount: "$45,200",
    status: "paid" as const,
    gradient: CLIENT_GRADIENTS.blue,
  },
  {
    id: "2",
    initials: "GV",
    clientName: "Global Ventures Ltd",
    description: "Expansion • 5 markets",
    transactionCount: 12,
    lastPayment: "Last payment: 5 days ago",
    amount: "$38,900",
    status: "paid" as const,
    gradient: CLIENT_GRADIENTS.green,
  },
  {
    id: "3",
    initials: "ME",
    clientName: "Middle East Holdings",
    description: "PRO + Expansion • 6 cases",
    transactionCount: 15,
    lastPayment: "Last payment: 1 week ago",
    amount: "$32,400",
    status: "paid" as const,
    gradient: CLIENT_GRADIENTS.purple,
  },
  {
    id: "4",
    initials: "IP",
    clientName: "Innovation Partners",
    description: "MENA Leaders • 2 applications",
    transactionCount: 4,
    lastPayment: "Last payment: 3 days ago",
    amount: "$28,700",
    status: "paid" as const,
    gradient: CLIENT_GRADIENTS.orange,
  },
  {
    id: "5",
    initials: "SE",
    clientName: "Summit Enterprises",
    description: "PRO Module • 2 active cases",
    transactionCount: 6,
    lastPayment: "Overdue: 12 days",
    amount: "$24,500",
    status: "pending" as const,
    isOverdue: true,
    gradient: CLIENT_GRADIENTS.red,
  },
];

export default function TopRevenueClients() {
  return (
    <div className="flex-1 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
      <div className="border-b border-[#e5e7eb] px-6 py-6">
        <h3 className="text-[#111827] text-lg font-semibold leading-7">
          Top Revenue Clients
        </h3>
      </div>

      <div className="px-6 py-6 flex flex-col gap-3">
        {TOP_CLIENTS.map((client) => (
          <ClientRevenueItem
            key={client.id}
            initials={client.initials}
            clientName={client.clientName}
            description={client.description}
            transactionCount={client.transactionCount}
            lastPayment={client.lastPayment}
            amount={client.amount}
            status={client.status}
            isOverdue={client.isOverdue}
            gradient={client.gradient}
          />
        ))}
      </div>
    </div>
  );
}
