import { Skeleton } from '../ui/skeleton';

export default function ActiveModulesSkeleton() {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px]">
      <div className="flex flex-col gap-6">
        <Skeleton className="h-7 w-48" />

        <div className="border border-[#e5e7eb] rounded-[8px] p-[17px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Skeleton className="w-[32px] h-[32px] rounded-[8px]" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          <div className="border-t border-[#e5e7eb] pt-3">
            <div className="flex gap-[366px]">
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-28" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
