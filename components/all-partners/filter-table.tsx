'use client';
import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SEARCH_PLACEHOLDER = 'Search clients, companies or contacts';

export default function FilterTable() {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white p-5 rounded-t-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="text-[#111827] text-lg font-bold">Clients</h2>
        <p className="text-[#6B7280] text-md">
          Manage and track all client information
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder={SEARCH_PLACEHOLDER}
          className="flex-1 w-[300px] border-[#D1D5DB]"
        />
        <Button
          variant="outline"
          size="sm"
          className="text-[#374151] min-w-[100px]"
        >
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>
    </div>
  );
}
