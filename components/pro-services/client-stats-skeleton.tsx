import { Skeleton } from '../ui/skeleton';

export default function ClientStatsSkeleton() {
  return (
    <div className="flex gap-[24px] w-full">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white border border-[#e5e7eb] border-solid flex-1 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-6"
        >
          <div className="flex flex-col gap-6">
            <Skeleton className="w-12 h-12 rounded-[8px]" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
