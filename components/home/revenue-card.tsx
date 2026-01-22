import React from "react";

export default function RevenueCard({
  title,
  value,
  subtitle,
  colorFrom,
  colorTo,
}: {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  colorFrom?: string;
  colorTo?: string;
}) {
  const from = colorFrom ?? "var(--gradient-rev-1-from)";
  const to = colorTo ?? "var(--gradient-rev-1-to)";

  return (
    <div className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div
        className="p-6 text-white"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm opacity-95">{title}</div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
            {subtitle && <div className="text-xs opacity-90 mt-1">{subtitle}</div>}
          </div>
          <div className="opacity-90 text-2xl">📈</div>
        </div>
      </div>
    </div>
  );
}
