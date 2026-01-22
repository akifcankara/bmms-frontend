import React from "react";

export default function ModuleCard({
  title,
  subtitle,
  items,
  completion,
  accentColor = "bg-green-500",
}: {
  title: string;
  subtitle?: string;
  items?: { label: string; value: number }[];
  completion?: number; // 0-100
  accentColor?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-sm font-semibold text-slate-800">{title}</div>
          {subtitle && <div className="text-xs text-slate-500">{subtitle}</div>}
        </div>
        <div className="h-8 w-8 rounded-md bg-slate-100 flex items-center justify-center">•</div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {items?.map((it) => (
          <div key={it.label} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="text-slate-600 truncate">{it.label}</div>
            </div>
            <div className="font-semibold text-slate-800">{it.value}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="text-xs text-slate-500 mb-2">Completion Rate</div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div className="h-2 rounded-full" style={{ width: `${completion ?? 0}%`, background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </div>
        <div className="text-xs text-slate-600 mt-2 text-right font-semibold">{completion ?? 0}%</div>
      </div>
    </div>
  );
}
