'use client';
import { Filter as FilterIcon, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SEARCH_PLACEHOLDER = 'Search clients, companies or contacts';

export default function Filter() {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white p-5 rounded-t-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="text-[#111827] text-lg font-bold">All Partners</h2>
        <p className="text-[#6B7280] text-md">89 companies found</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          className="text-white px-10 py-5 cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #00A0D2 10.38%, #05DC82 100%)',
          }}
        >
          <Plus className="w-4 h-4" /> New Client
        </Button>
        <Input
          placeholder={SEARCH_PLACEHOLDER}
          className="flex-1 w-[300px] border-[#D1D5DB]"
        />
        <Button
          variant="outline"
          size="sm"
          className="text-[#374151] min-w-[100px]"
        >
          <FilterIcon className="w-4 h-4" />
          Filter
        </Button>
      </div>
    </div>
  );
}
