import React from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type Partner = {
  id: string
  name: string
  region: string
  revenue: string
  growth: string
  status: "Active" | "Paused" | "At Risk"
}

const samplePartners: Partner[] = [
  { id: "p1", name: "Astra Partners", region: "EMEA", revenue: "$1,240,000", growth: "+12%", status: "Active" },
  { id: "p2", name: "Orion Group", region: "MENA", revenue: "$842,300", growth: "+3%", status: "At Risk" },
  { id: "p3", name: "NovaTech", region: "APAC", revenue: "$432,100", growth: "-1%", status: "Paused" },
  { id: "p4", name: "Crescent Co.", region: "MEA", revenue: "$2,120,540", growth: "+24%", status: "Active" },
]

export default function PartnersTable({ data = samplePartners }: { data?: Partner[] }) {
  return (
    <div className="w-full rounded-lg border bg-card/60 shadow-sm overflow-x-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
        <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Partner Performance</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Export</Button>
          <Button variant="default" size="sm">New Partner</Button>
        </div>
      </div>

      <table className="min-w-full table-fixed text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Partner</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Region</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Revenue</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Growth</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y" style={{ borderColor: "var(--border)" }}>
          {data?.map((p) => (
            <tr key={p.id} className="hover:bg-accent/5">
              <td className="px-4 py-3">
                <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{p.name}</div>
                <div className="text-xs text-muted-foreground">Partner ID: {p.id}</div>
              </td>
              <td className="px-4 py-3">{p.region}</td>
              <td className="px-4 py-3 font-semibold">{p.revenue}</td>
              <td className={cn("px-4 py-3", p.growth.startsWith("+") ? "text-green-600" : "text-red-600")}>{p.growth}</td>
              <td className="px-4 py-3">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                    p.status === "Active" ? "bg-green-50 text-green-700" : p.status === "Paused" ? "bg-yellow-50 text-yellow-700" : "bg-red-50 text-red-700"
                  )}
                >
                  {p.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
