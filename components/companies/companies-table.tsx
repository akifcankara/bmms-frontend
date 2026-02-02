'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

interface ProServicesTableProps {
  data?: KYCApplication[];
  isLoading: boolean;
  isError: boolean;
}

export default function ProServicesTable({
  data,
  isLoading,
  isError,
}: ProServicesTableProps) {
  if (isLoading) {
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
            <tbody
              className="divide-y"
              style={{ borderColor: 'var(--border)' }}
            >
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

  if (isError) {
    return (
      <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden p-8 text-center">
        <p className="text-red-600">Failed to load applications</p>
      </div>
    );
  }

  if (!isLoading && (!data || data.length === 0)) {
    return (
      <div className="w-full rounded-b-lg border bg-card/60 shadow-sm overflow-hidden p-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <span className="text-3xl">📋</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No applications found
            </h3>
            <p className="text-sm text-gray-500">
              No KYC applications match your search criteria
            </p>
          </div>
        </div>
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
            {data?.map((app: KYCApplication) => {
              return (
                <tr key={app.id} className="hover:bg-accent/5">
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary/90 text-white font-bold">
                        {app.initials}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div
                          className="text-sm font-medium"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {app.firstChoiceName || 'N/A'}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {app.fullName} • {app.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 capitalize">{app.industrySector}</td>
                  <td className="px-4 py-3 capitalize">
                    {app.preferredJurisdiction}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/pro-services/${app.slug}`}>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary font-bold"
                        >
                          View
                        </Button>
                      </div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
