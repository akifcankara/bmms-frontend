import React from "react";

export default function RevenueCard({
  value,
  subtitle,
  colorFrom,
  colorTo,
  rightIcon,
  leftIcon,
  footer
}: {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  colorFrom?: string;
  colorTo?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  footer?: {
    title: string,
    value: string
  }
}) {
  const from = colorFrom ?? "var(--gradient-rev-1-from)";
  const to = colorTo ?? "var(--gradient-rev-1-to)";

  return (
    <div className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div
        className="p-6 text-white"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="flex flex-col gap-2 items-start justify-between gap-4">
          <div>
            {leftIcon && leftIcon}
            <div className="mt-3 text-2xl font-bold tracking-tight">{value}</div>
            {subtitle && <div className="text-xs opacity-90 mt-1">{subtitle}</div>}
          </div>
          {rightIcon && rightIcon}
        </div>
        {footer && (
          <>
            <div className="h-[0.5px] w-full bg-white my-2 opactiy-90"></div>
            <div className="flex justify-between font-normal">
              <p className="text-md">{footer.title}</p>
              <p className="text-lg font-bold">{footer.value}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
