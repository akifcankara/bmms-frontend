'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

const LOADING_MESSAGE = 'Loading...';
const ERROR_MESSAGE = 'Failed to load applications';
const NO_DATA_MESSAGE = 'No applications found';

interface KYCApplication {
  id: string;
  slug: string;
  initials: string;
  name: string;
  type: string;
  module: string;
}

interface ProServicesTableProps {
  data?: KYCApplication[];
  isLoading: boolean;
  isError: boolean;
}

function TableSkeleton() {
  return (
    <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Company
              </th>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Industry
              </th>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Jurisdiction
              </th>
              <th className="px-4 py-3 text-right text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Skeleton className="w-12 h-12 rounded-md" />
                    <div className="flex flex-col gap-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="px-4 py-3">
                  <Skeleton className="h-4 w-20" />
                </td>
                <td className="px-4 py-3 text-right">
                  <Skeleton className="h-8 w-16 ml-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ProServicesTable({
  data,
  isLoading,
  isError,
}: ProServicesTableProps) {
  if (isLoading) {
    return <TableSkeleton />;
  }

  if (isError) {
    return (
      <div className="w-full rounded-b-lg border bg-card/60 shadow-sm p-8 text-center">
        <p className="text-red-500">{ERROR_MESSAGE}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full rounded-b-lg border bg-card/60 shadow-sm p-8 text-center">
        <p className="text-muted-foreground">{NO_DATA_MESSAGE}</p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Company
              </th>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Industry
              </th>
              <th className="px-4 py-3 text-left text-muted-foreground">
                Jurisdiction
              </th>
              <th className="px-4 py-3 text-right text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {data.map((application) => (
              <tr key={application.id} className="hover:bg-accent/5">
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/90 text-white font-bold">
                      {application.initials}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div
                        className="text-sm font-medium"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {application.name}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Slug: {application.slug}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">{application.type}</td>
                <td className="px-4 py-3">{application.module}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/pro-services/${application.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary font-bold"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
