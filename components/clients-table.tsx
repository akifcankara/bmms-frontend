import React from "react";
import { Button } from "@/components/ui/button";

const rows = [
  {
    initials: "AM",
    name: "Sarah Mitchell",
    email: "sarah.mitchell@techcorp.com",
    type: "Individual",
    module: "PRO",
    status: "Active",
    updated: "2 hours ago",
  },
  {
    initials: "TC",
    name: "TechCorp Industries",
    email: "contact@techcorp.com",
    type: "Company",
    module: "Expansion",
    status: "Pending",
    updated: "5 hours ago",
  },
  {
    initials: "MC",
    name: "Michael Chen",
    email: "m.chen@leadership.ae",
    type: "Individual",
    module: "MENA Leaders",
    status: "Under Review",
    updated: "1 day ago",
  },
];

export default function ClientsTable() {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Clients</h3>
          <p className="text-sm text-slate-500">Latest client registrations and updates</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">View All</Button>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-slate-500">
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Module</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Last Update</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.email} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold">{r.initials}</div>
                    <div>
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">{r.type}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700">{r.module}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">{r.status}</span>
                </td>
                <td className="px-6 py-4">{r.updated}</td>
                <td className="px-6 py-4">
                  <Button variant="ghost" size="sm">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
