import { Skeleton } from '../ui/skeleton';

export default function DocumentManagementSkeleton() {
  return (
    <div className="bg-white w-full">
      <div className="bg-[#f4f6f8] p-4 flex items-center justify-between">
        <Skeleton className="h-6 w-64" />
      </div>

      <div className="p-4">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2.5 border-b border-[#7a7a7a] bg-white"
            >
              <div className="flex items-center gap-2">
                <Skeleton className="w-6 h-6" />
                <Skeleton className="w-8 h-8 rounded" />
                <Skeleton className="h-5 w-56" />
              </div>

              <div className="flex items-center gap-[140px]">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
