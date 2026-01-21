import React from "react";

export default function Card({
  title,
  value,
  hint,
  accent,
  children,
}: {
  title: string;
  value: React.ReactNode;
  hint?: string;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-sm text-slate-400 font-medium">{title}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-800">{value}</div>
          {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
        </div>
        {accent && (
          <div className="text-xs font-semibold px-3 py-1 rounded-md flex items-center justify-center" style={{ background: accent, color: "white", minWidth: 56 }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
