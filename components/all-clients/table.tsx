"use client"

import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Badge } from "../ui/badge"

type Client = {
    id: string
    name: string
    type: string
    module: string
    status: string
    lastUpdate: string
    partner: string
}

const SAMPLE: Client[] = [
    { id: "c1", name: "Sarah Mitchell", type: "Company", module: "PRO", status: "Active", partner: 'Apex Partners', lastUpdate: "2 days ago" },
    { id: "c2", name: "TechCorp", type: "Company", module: "Expansion", status: "Paused", partner: 'Venture Solutions', lastUpdate: "5 days ago" },
    { id: "c3", name: "Liam Wong", type: "Individual", module: "MENA Leaders", status: "Active", partner: 'Growth Consulting', lastUpdate: "1 day ago" },
]

export default function Table({ data = SAMPLE }: { data?: Client[] }) {
    return (
        <div className="w-full rounded-lg border bg-card/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-muted">
                        <tr>
                            <th className="px-4 py-3 text-left text-muted-foreground">Client</th>
                            <th className="px-4 py-3 text-left text-muted-foreground">Type</th>
                            <th className="px-4 py-3 text-left text-muted-foreground">Module</th>
                            <th className="px-4 py-3 text-left text-muted-foreground">Status</th>
                            <th className="px-4 py-3 text-left text-muted-foreground">Partner</th>
                            <th className="px-4 py-3 text-left text-muted-foreground">Last Update</th>
                            <th className="px-4 py-3 text-right text-muted-foreground">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y" style={{ borderColor: "var(--border)" }}>
                        {data?.map((c) => (
                            <tr key={c.id} className="hover:bg-accent/5">
                                <td className="px-4 py-3">
                                    <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{c.name}</div>
                                </td>
                                <td className="px-4 py-3">
                                    <Badge className="bg-[#DBEAFE] text-[#1D4ED8]">
                                        {c.type}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">
                                    <Badge className="bg-[#DCFCE7] text-[#15803D]">
                                    {c.module}
                                    </Badge>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${c.status === "Active" ? "bg-green-50 text-green-700" : c.status === "Paused" ? "bg-yellow-50 text-yellow-700" : "bg-red-50 text-red-700"}`}>
                                        {c.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">{c.partner}</td>
                                <td className="px-4 py-3">{c.lastUpdate}</td>
                                <td className="px-4 py-3 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button variant="ghost" size="sm" className="text-primary font-bold">View</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
