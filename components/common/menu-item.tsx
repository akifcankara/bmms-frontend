import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

type MenuItemProps = {
  to: string;
  label: string;
  icon?: ReactNode;
  count?: number;
  active?: boolean;
  countColor?: string;
  countBg?: string;
  countContent?: ReactNode;
};

export default function MenuItem({
  to,
  label,
  icon,
  count,
  active,
  countColor,
  countBg,
  countContent,
}: MenuItemProps) {
  const hasCount = count !== undefined && count !== null;

  return (
    <Link
      href={to}
      className={cn(
        'flex items-center justify-between px-4 py-2 rounded-md cursor-pointer',
        active ? 'bg-[rgba(5,220,130,0.1)]' : 'hover:bg-gray-50'
      )}
    >
      <div className="flex items-center gap-3">
        {icon && icon}
        <span className={cn('text-sm text-slate-700')}>{label}</span>
      </div>
      {countContent
        ? countContent
        : hasCount && (
            <div
              style={{ backgroundColor: countBg, color: countColor }}
              className={cn(
                'text-xs font-semibold px-2 py-0.5 rounded-full',
                countBg,
                countColor
              )}
            >
              {count}
            </div>
          )}
    </Link>
  );
}
