import { Skeleton } from '../ui/skeleton';

export default function BasicInfoSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-y-[68px] gap-x-[38px]">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-48" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-56" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-6 w-40" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-6 w-52" />
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-6 w-64" />
        </div>
      </div>
    </div>
  );
}
